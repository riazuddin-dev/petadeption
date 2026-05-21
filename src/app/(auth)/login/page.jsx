"use client";

import Link from "next/link";


import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  PawPrint,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient, signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { router } from "better-auth/api";

export default function LoginPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const HandleSingIn = async (data) => {
    const {
      email,

      password,

    } = data;

   
    const { data: item, error } = await signIn.email({
      email,

      password,


      
    });

    if(error){

      console.log("wrong password");
      return
    
    }

    if(item){

      redirect("/")
    }


    
  };


  const HandleGoogle= async()=>{
     const data = await signIn.social({
    provider: "google",


  
  });
  
  }

  return (
    <section className="min-h-screen bg-[#F4EFE6] overflow-hidden relative flex items-center justify-center px-4 py-10">
      {/* BACK TO HOME */}
      <div className="absolute top-5 left-5 z-50">
        <Link
          href="/"
          className="group flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300 px-5 py-3 rounded-full"
        >
          <div className="w-10 h-10 rounded-full bg-[#005F56] flex items-center justify-nter shadow-lg group-hover:-translate-x-1 transition duration-300">
            <span className="text-white text-lg">←</span>
          </div>

          <div className="leading-none">
            <p className="text-[11px] uppercase tracking-[3px] text-gray-400 font-semibold">
              Return
            </p>

            <h3 className="text-[#173c2d] font-bold text-sm">Back To Home</h3>
          </div>
        </Link>
      </div>

      {/* BG */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* MAIN */}
      <div className="relative w-full max-w-6xl grid lg:grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[55px] bg-white shadow-[0_25px_120px_rgba(0,0,0,0.12)]">
        {/* LEFT */}
        <div className="relative bg-[#005F56] overflow-hidden p-8 lg:p-12 flex flex-col justify-between">
          <div className="absolute -top-20 -right-20 w-[280px] h-[280px] bg-[#F4A300]/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* BRAND */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F4A300]/40 blur-xl rounded-full"></div>

                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F4A300] to-[#ffd76b] flex items-center justify-center border-[3px] border-white shadow-2xl">
                  <PawPrint className="w-8 h-8 text-[#173c2d]" />
                </div>
              </div>

              <div>
                <h1 className="text-white text-4xl font-black">PawHaven</h1>

                <p className="text-white/70 tracking-[5px] uppercase text-[10px] mt-1">
                  Find Your Best Friend
                </p>
              </div>
            </div>

            {/* HERO */}
            <div className="mt-16">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-[#F4A300]" />

                <span className="text-white text-sm">
                  Welcome Back To PawHaven
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] mt-7">
                Continue
                <br />
                Your Pet
                <br />
                Journey 🐾
              </h2>

              <p className="text-white/70 text-base leading-relaxed mt-7 max-w-md">
                Sign in to continue helping adorable pets find safe, caring and
                loving forever homes.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative z-10 mt-10">
            <div className="relative overflow-hidden rounded-[40px] border-[4px] border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="pet"
                className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative bg-white/70 backdrop-blur-xl p-7 lg:p-10 flex items-center overflow-hidden">
          <div className="relative z-10 w-full">
            <p className="text-[#00A86B] font-bold tracking-[4px] uppercase text-xs">
              Welcome Back
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#173c2d] mt-3">
              Sign In
            </h2>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit(HandleSingIn)}
            >
              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-5 shadow-lg"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-14 shadow-lg"
                />

                <button
                  type="button"
                  
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                >
                 
                </button>
              </div>

              {/* BUTTON */}
              <button className="w-full h-[62px] rounded-[24px] bg-[#F4A300] hover:bg-[#e89a00] text-white font-black text-lg shadow-xl transition">
                Sign In
              </button>
            </form>

            {/* GOOGLE */}
            <button onClick={HandleGoogle}  className="w-full mt-6 h-[62px] rounded-[24px] bg-white border border-gray-100 shadow-lg flex items-center justify-center gap-4 font-bold text-[#173c2d]">
              <FcGoogle className="text-3xl" />
              Continue with Google
            </button>

            {/* REGISTER */}
            <p className="text-center text-gray-500 mt-7">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-[#00A86B] font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
