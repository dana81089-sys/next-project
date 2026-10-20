"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {

  const path =usePathname()
  console.log(path)
  let links=[
    {title:'Home',path:"/"},
    {title:'Blog',path:"/blog"},
    {title:'About',path:"/about"},
    {title:'Profile',path:"/profile"},
  ]
  return (
    <div className='flex items-center justify-between bg-gray-200 p-5'>
      <div className='w-1/2 brand'>
     <Link href={"/"}> Next Project</Link>
      </div>
<div className='w-1/4'>
  <ul className='flex justify-around w-full'>
    {links.map((link)=>{
      return <li key={link.path}> <Link className={path == link.path ?"text-blue-600 font-bold":""} href={link.path}>{link.title}</Link></li>
      })}
  </ul>
</div>
    </div>
  )
}
