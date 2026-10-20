import React from 'react'
import img from '../../assets/avatar-3.jpg'
import Image from "next/image";
export default function page() {
  return (
    <div className='w-1/4 relative'>
    <Image  src={img} alt="avatar" loading='lazy' placeholder='blur'/>
    <Image width={400} height={400}  src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linked-posts/1790622409718-0ba3b092-9d9f-4e4e-9dbe-c522b058923b-profile-photo.webp" alt="avatar"/>
    </div>
  )
}
