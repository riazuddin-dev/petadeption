"use client";

import Link from "next/link";
import { useState } from "react";

import {
  User,
  Mail,
  Image,
  LockKeyhole,
  Eye,
  EyeOff,
  PawPrint,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";



export default function RegisterPage() {
  // const [showPassword, setShowPassword] =
  //   useState(false);

  // const [
  //   showConfirmPassword,
  //   setShowConfirmPassword,
  // ] = useState(false);

  // const [error, setError] = useState("");

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   const password = form.password.value;
  //   const confirmPassword =
  //     form.confirmPassword.value;

  //   setError("");

  //   // VALIDATION

  //   if (password.length < 6) {
  //     return setError(
  //       "Password must be at least 6 characters"
  //     );
  //   }

  //   if (!/[A-Z]/.test(password)) {
  //     return setError(
  //       "Password must contain one uppercase letter"
  //     );
  //   }

  //   if (!/[a-z]/.test(password)) {
  //     return setError(
  //       "Password must contain one lowercase letter"
  //     );
  //   }

  //   if (password !== confirmPassword) {
  //     return setError(
  //       "Password & Confirm Password must be same"
  //     );
  //   }

  //   alert("Registration Successful ✅");

  //   form.reset();
  // };

   const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()


  const HandleSingUp= async (data)=>{

    const { name,
    email,
    photo,
    conformPassword,
    password}= data

if(password!== conformPassword){

  return alert("not match")
}


    const { data:item, error } = await signUp.email({
    name,
    email,
    photo,
  conformPassword,
    password

   
    
});


if(error){
  console.log(error);
  return

  
}

if(item){

  redirect("/login")
}



  }

   const HandleGoogle= async()=>{
       const data = await signIn.social({
      provider: "google",
  
    
    });
    
    }




  return (
    <section className="min-h-screen bg-[#F4EFE6] overflow-hidden relative flex items-center justify-center px-4 py-10">

        {/* BACK TO HOME */}
<Link
  href="/"
  className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md hover:bg-white transition px-5 py-3 rounded-full shadow-lg border border-white/20 text-[#173c2d] font-semibold"
>
  <span className="text-xl">←</span>
  Back To Home
</Link>
      
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* PAW PRINT */}
      <img
        src="/image(116).png"
        alt="paw"
        className="absolute top-24 left-10 w-24 opacity-[0.04] rotate-12"
      />

      <img
        src="/image(116).png"
        alt="paw"
        className="absolute bottom-20 right-10 w-28 opacity-[0.04] -rotate-12"
      />

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-6xl grid lg:grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[55px] bg-white shadow-[0_25px_120px_rgba(0,0,0,0.12)]">
        
        {/* LEFT SIDE */}
        <div className="relative bg-[#005F56] overflow-hidden p-8 lg:p-12 flex flex-col justify-between">
          
          {/* SHAPES */}
          <div className="absolute -top-20 -right-20 w-[280px] h-[280px] bg-[#F4A300]/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl"></div>

          {/* TOP */}
          <div className="relative z-10">
            
            {/* BRAND */}
            <div className="flex items-center gap-4">
              
              {/* LOGO */}
              <div className="relative">
                
                <div className="absolute inset-0 bg-[#F4A300]/40 blur-xl rounded-full"></div>

                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F4A300] to-[#ffd76b] flex items-center justify-center border-[3px] border-white shadow-2xl">
                  
                  <PawPrint className="w-8 h-8 text-[#173c2d]" />
                </div>
              </div>

              {/* TEXT */}
              <div>
                
                <h1 className="text-white text-4xl font-black">
                  PawHaven
                </h1>

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
                  Trusted Pet Adoption Platform
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] mt-7">
                Open Your
                <br />
                Heart To
                <br />
                A Pet 🐾
              </h2>

              <p className="text-white/70 text-base leading-relaxed mt-7 max-w-md">
                Join thousands of loving families and help
                pets discover warm, safe and caring homes.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-4">
                
                <div className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-md rounded-[22px] p-4">
                  
                  <div className="w-12 h-12 rounded-full bg-[#F4A300] flex items-center justify-center shadow-xl">
                    
                    <ShieldCheck className="w-6 h-6 text-[#173c2d]" />
                  </div>

                  <div>
                    
                    <h3 className="text-white font-bold">
                      Safe Adoption
                    </h3>

                    <p className="text-white/70 text-sm">
                      Verified & secure pet adoption process
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-md rounded-[22px] p-4">
                  
                  <div className="w-12 h-12 rounded-full bg-[#F4A300] flex items-center justify-center shadow-xl">
                    
                    ❤️
                  </div>

                  <div>
                    
                    <h3 className="text-white font-bold">
                      Loving Community
                    </h3>

                    <p className="text-white/70 text-sm">
                      Connect with passionate pet lovers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative z-10 mt-10">
            
            <div className="relative overflow-hidden rounded-[40px] border-[4px] border-white/10 shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
                alt="pet"
                className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* FLOAT */}
              <div className="absolute bottom-5 left-5 bg-white/10 border border-white/20 backdrop-blur-md rounded-[26px] px-5 py-4">
                
                <h3 className="text-white text-2xl font-black">
                  1500+
                </h3>

                <p className="text-white/70 text-sm">
                  Pets Successfully Adopted
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-white/70 backdrop-blur-xl p-7 lg:p-10 flex items-center overflow-hidden">
          
          {/* SHAPES */}
          <div className="absolute top-10 right-10 w-56 h-56 bg-[#00A86B]/5 rounded-full"></div>

          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#F4A300]/10 rounded-full"></div>

          {/* CONTENT */}
          <div className="relative z-10 w-full">
            
            {/* TOP */}
            <div>
              
              <p className="text-[#00A86B] font-bold tracking-[4px] uppercase text-xs">
                Create Account
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-[#173c2d] mt-3">
                Join PawHaven
              </h2>

              <p className="text-gray-500 mt-4">
                Start your journey with our loving pet community.
              </p>
            </div>

         

            {/* FORM */}
            <form
              onSubmit={handleSubmit(HandleSingUp)}
              className="mt-8 space-y-5"
            >
              
              {/* NAME */}
              <div className="relative">
                
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  type="text"
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-5 shadow-lg transition"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-5 shadow-lg transition"
                  required
                />
              </div>

              {/* PHOTO */}
              <div className="relative">
                
                <Image className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  type="text"
                  {...register("photo")}
                  placeholder="Photo URL"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-5 shadow-lg transition"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                
                <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  // type={
                  //   showPassword
                  //     ? "text"
                  //     : "password"
                  // }
                 {...register("password")}
                  placeholder="Password"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-14 shadow-lg transition"
                  required
                />

                <button
                  // type="button"
                  // onClick={() =>
                  //   setShowPassword(
                  //     !showPassword
                  //   )
                  // }
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                >
                  {/* {showPassword ? (
                    <Eye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  )} */}
                </button>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                
                <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A86B]" />

                <input
                  // type={
                  //   showConfirmPassword
                  //     ? "text"
                  //     : "password"
                  // }
               {...register("conformPassword")}
                  placeholder="Conform Password"
                  className="w-full h-[62px] rounded-[24px] bg-white border-2 border-transparent focus:border-[#00A86B] outline-none pl-14 pr-14 shadow-lg transition"
                  required
                />

                <button
                  // type="button"
                  // onClick={() =>
                  //   setShowConfirmPassword(
                  //     !showConfirmPassword
                  //   )
                  // }
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                >
                  {/* {showConfirmPassword ? (
                    <Eye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  )} */}
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-[62px] rounded-[24px] bg-[#F4A300] hover:bg-[#e89a00] text-white font-black text-lg shadow-[0_15px_35px_rgba(244,163,0,0.35)] hover:scale-[1.02] transition duration-300"
              >
                Create Account
              </button>
            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-7">
              
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="text-gray-400 text-sm">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* GOOGLE */}
            <button onClick={HandleGoogle} className="w-full h-[62px] rounded-[24px] bg-white border border-gray-100 shadow-lg flex items-center justify-center gap-4 font-bold text-[#173c2d] hover:bg-gray-50 transition duration-300">
              
              <FcGoogle className="text-3xl" />

              Continue with Google
            </button>

            {/* LOGIN */}
            <p className="text-center text-gray-500 mt-7">
              Already have an account?{" "}

              <Link
                href="/login"
                className="text-[#00A86B] font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}