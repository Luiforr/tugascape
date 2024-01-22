"use client";
import { useState } from 'react';
import { supabase } from '../config/supabase.js';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react'
// import { useToast } from 'next/navigation';
import React from 'react'
export default function page() {
    const toast = useToast()
    const router = useRouter()
   const [user, setUser] = useState({
    email:"",
    password1: ""
   })
   const [isSubmitting,setIsSubmitting] = useState(false);
   async function handleSubmit (e) {
    e.preventDefault
    if (user.password1 !== user.password1){
        toast({
            title: "Login Gagal",
            description: "Gagal, Password Tidak Sama",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        setIsSubmitting(false)
   return;

    }try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email, //ganti pake state
            password: user.password1 //ganti pake state
            
    })
 if (error){
    toast({
        title: "Login Gagal",
        description: "Gagal, Password Tidak Sama",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
 } else {
    toast({
        title: "Login success",
        description: "berhasil",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    router.push("/dashboard")
    
 }
   } catch (error){
    toast({
        title: "Login Gagal",
        description: "Gagal, Password Tidak Sama",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    

   }finally{setIsSubmitting(false)} 
}

    return (

        <>
            <nav className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Login Account</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <h1 className='mt-3'>Email:</h1>
                            <input
                                type="text"
                                placeholder="test1@gmail.com"
                                name="email"
                                value= {user.email}
                                onChange={(e)=>setUser({...user, email: e.target.value})}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <h1 className='mt-3'>Password:</h1>
                            <input
                                type="password"
                                placeholder="atleast 6"
                                name="password1"
                                value={user.password1}
                                onChange={(e)=>setUser({...user, password1: e.target.value})}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <button
                                className="btn btn-primary bg-slate-500 hover:bg-slate-700 mt-3"
                                type='submit'
                               
                            >  halo</button>
                        </form>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )

    }