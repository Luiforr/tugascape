"use client";
import { useState } from 'react';
import { supabase } from '../config/supabase.js';
import { useRouter } from 'next/navigation';
// import { useToast } from 'next/navigation';
import React from 'react'
export default function page() {
    // const toast = useToast();
    const router = useRouter();

    const [tambahUsers, setTambahUsers] = useState({
        email: "",
        password1: "",
        password2: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        setTambahUsers({ ...tambahUsers, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        if (tambahUsers.password1 !== tambahUsers.password2) {
            alert("error dan password/email tidak sama")
            setIsSubmitting(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: tambahUsers.email,
                password: tambahUsers.password1,
            });

            if (error) {
                alert("gagal")
                console.error(error.message)
            } else {

                router.push("/login"); // Use router for navigation instead of redirect
            }
        } catch (error) {
            console.error("Error signing up:", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <>
            <nav className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto">SignUp Account</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <h1 className='mt-3'>Email:</h1>
                            <input
                                type="text"
                                placeholder="test1@gmail.com"
                                name="email"
                                value={tambahUsers.email}
                                onChange={handleChange}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <h1 className='mt-3'>Password:</h1>
                            <input
                                type="password"
                                placeholder="atleast 6"
                                name="password1"
                                value={tambahUsers.password1}
                                onChange={handleChange}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <h1 className='mt-3'>Retype Password:</h1>
                            <input
                                type="password"
                                placeholder="atleast 6"
                                name="password2"
                                value={tambahUsers.password2}
                                onChange={handleChange}
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <button
                                className="btn btn-primary bg-slate-500 hover:bg-slate-700 mt-3"
                                type='submit'
                                disabled={isSubmitting}
                            >{isSubmitting ? "submitting..." : "signup"}</button>
                        </form>
                        <p className='text-right'>login?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )

}