import React from 'react'
import Image from "next/image";
import Link from "next/link";
import person from '../../assets/avatar-3.jpg'
export default async function About() {
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNmFiODE0Yjc4ZWJlOTJjMmMwY2QzOTgxIiwiaWF0IjoxNzkxOTE2OTU3LCJleHAiOjE3OTI1MjE3NTcsImF1ZCI6ImxpbmtlZC1wb3N0cy1jbGllbnQiLCJpc3MiOiJsaW5rZWQtcG9zdHMtYXBpIn0.OaiJM7D2jRnsI-ZIPhQG5h34rd2o8Y2jaKVEMtvsAf8"
  async function getData() {
    let res = await fetch('https://route-posts.routemisr.com/posts', {
      cache: "force-cache",
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    let data = await res.json()
    console.log(data.data.posts)
    return data.data.posts;

  }
  const postList = await getData()
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {postList.map((post: any) => {
            return <Link href={`/about/${post.id}`} key={post.id}>
              <div className=" border border-amber-400 ">
                <div className="relative w-full h-52">
                 
                </div>
                <h2>{post.body}</h2>
              </div>
            </Link>
          })}
        </div>
      </div>
    </>
  )
}
