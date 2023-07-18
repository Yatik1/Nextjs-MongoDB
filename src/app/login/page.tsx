"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'react-hot-toast'


export default function LoginPage(){

    const router = useRouter()
    const [user,setUser] = React.useState({
        email: "",
        password: "",
    })
    
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading , setLoading] = useState(false)

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/user/login',user)
            console.log("Login success", response.data)
            toast.success("Login Success")
            router.push("/profile")

        } catch (error: any) {
            console.log("Login failed", error.message)
            toast.error(error.message)

        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[user])

    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Login"}</h1>
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
        onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
        <Link href='/signup' className="mt-3">Visit Signup Page</Link>
      </div>

    )
}