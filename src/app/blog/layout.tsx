import Link from 'next/link'
import React from 'react'
import Sidebar from '../_Components/Sidebar'
import '../globals.css'
export default function layout({children}:LayoutProps<'/'>) {
  return (
    <div>
    <div className='grid grid-cols-12'>
        <div className='col-span-2 '>
           <Link href={'/blog/web'}>Web</Link>
            <Link href={'/blog/design'}>Design</Link>
        </div>
        <div className="col-span-10">
            {children}
        </div>
    </div>
    </div>
  )
}
