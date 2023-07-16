"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { axios } from "axios";



export default function SignUp(){
  const [user,setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignup = async () =>{}

 return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <br/>

      <label className='mt-3' htmlFor="username">username</label>
      <input 
         className="text-black p-3 rounded-lg mt-1 focus:outline-none"
         id="username"
         type="text"
         value={user.username} 
         onChange={(e) => setUser({...user, username: e.target.value})} 
         placeholder="username" />
     
      <label className='mt-3' htmlFor="email">Email</label>
      <input 
         className="text-black p-3 rounded-lg mt-1 focus:outline-none"
         id="email"
         type="email"
         value={user.email} 
         onChange={(e) => setUser({...user, email: e.target.value})} 
         placeholder="email" />

      <label className='mt-3' htmlFor="password">Password</label>
      <input 
         className="text-black p-3 rounded-lg mt-1 focus:outline-none"
         id="password"
         type="password"
         value={user.password} 
         onChange={(e) => setUser({...user, password: e.target.value})} 
         placeholder="password" />
      
      <button className="p-2 border border-gray-200 rounded-lg mt-3 focus:outline-none focus:border-gray-600"
      onClick={onSignup}>Signup Here</button>
      <Link href='/login' className="mt-3">Visit Login Page</Link>
    </div>
 )
}