"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";
import { toast } from "react-hot-toast";



export default function SignUp(){
   const router = useRouter();
  const [user,setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled , setButtonDisabled] = React.useState(false);
  const [loading , setLoading] = React.useState(false);

  const onSignup = async () =>{
      try {

         setLoading(true);
         const response = await axios.post("/api/user/signup",user);
         console.log('Signup success', response.data);
         router.push('/login')

      } catch (error: any) {
          console.log("Signup failed", error.message)

          toast.error(error.message);

      } finally{
          setLoading(false);
      }
  }

   useEffect(() => {
      if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
         setButtonDisabled(false);
      }else {
         setButtonDisabled(true);
      }
   } , [user]);

 return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "SignUp"}</h1>
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
      
      <button 
      className="p-2 border border-gray-200 rounded-lg mt-3 focus:outline-none focus:border-gray-600"
      onClick={onSignup}>{buttonDisabled ? "No Signup" : "Signup"}</button>
      <Link href='/login' className="mt-3">Visit Login Page</Link>
    </div>
 )
}