"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {axios} from 'axios';

export default function LoginPage(){
    const [user,setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {}
    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <br/>
  
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
        onClick={onLogin}>Login Here</button>
        <Link href='/signup' className="mt-3">Visit Signup Page</Link>
      </div>

    )
}