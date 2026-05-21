"use client";

import { useState } from "react";

import Link from "next/link";

import {
  CalendarDays,
  PawPrint,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Heart,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";

import { useForm } from "react-hook-form";

import { RequestPetData } from "@/lib/petsData/data";
import { useRouter } from "next/navigation";



export default function PetDetailsClient({ pet }) {
  const { data: session } = useSession();

  const [openRequest, setOpenRequest] = useState(false);

  const { register, handleSubmit } = useForm();

  // REQUEST SUBMIT
  const HandleRequest = async (data) => {
    const requestData = {
      petId: pet._id,

      petName: pet.petName,

      image: pet.image,

      Name: data.Name,

      email: data.email,

      date: data.date,

      description: data.description,

      status: "Pending",

      userId: session.user.id,
    };

    const result = await RequestPetData(requestData);

    if (result.insertedId) {
      alert("Request Sent Successfully 😍");

      setOpenRequest(false);
    }
  };
  const router =
useRouter();

 const HandleAdopt =
() => {

  // NOT LOGIN
  if (!session) {

    router.push(
      "/login"
    );

    return;
  }

  // OWNER CHECK
  if (

    pet.ownerEmail ===
    session?.user?.email

  ) {

    toast.error(

      "You cannot adopt your own pet 😄"

    );

    return;
  }

  // OPEN MODAL
  setOpenRequest(true);
};

  return (
    <section className="min-h-screen bg-[#F6F1E8] py-16 overflow-hidden relative">
      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* BACK */}
        <Link href={"/pets"}>
          <button className="mb-10 bg-white hover:bg-[#12372A] hover:text-white text-[#12372A] h-[58px] px-7 rounded-full text-sm font-black shadow-xl transition-all duration-300">
            ← Back To Pets
          </button>
        </Link>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[45px] shadow-xl">
              <img
                src={pet.image}
                alt={pet.petName}
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* NAME */}
              <div className="absolute bottom-8 left-8">
                <h1 className="text-6xl font-black text-white">
                  {pet.petName}
                </h1>

                <p className="text-white/70 mt-3 text-xl">{pet.breed}</p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-10 bg-white rounded-[40px] p-8 shadow-xl">
              {/* TOP INFO */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#F8F5EE] rounded-full px-6 py-3 flex items-center gap-3">
                  <PawPrint className="w-5 h-5 text-[#F4A300]" />

                  <span className="font-black text-[#1E2E23]">
                    {pet.age} Years
                  </span>
                </div>

                <div className="bg-[#EFFFF8] rounded-full px-6 py-3 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00A86B]" />

                  <span className="font-black text-[#1E2E23]">
                    {pet.vaccinationStatus}
                  </span>
                </div>

                <div className="bg-[#FFF6E5] rounded-full px-6 py-3 flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-[#F4A300]" />

                  <span className="font-black text-[#1E2E23]">
                    {pet.healthStatus}
                  </span>
                </div>

                <div className="bg-[#F4F7FF] rounded-full px-6 py-3 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#3B82F6]" />

                  <span className="font-black text-[#1E2E23]">
                    {pet.location}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10">
                <p className="uppercase tracking-[4px] text-[#00A86B] text-xs font-black">
                  About {pet.petName}
                </p>

                <h2 className="text-5xl font-black text-[#1E2E23] mt-4">
                  Friendly &
                  <br />
                  Lovely Pet
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-8">
                  {pet.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sticky top-10">
            <div className="bg-white rounded-[40px] p-8 shadow-xl">
              <p className="uppercase tracking-[4px] text-[#F4A300] text-xs font-black">
                Adoption
              </p>

              <h2 className="text-5xl font-black text-[#1E2E23] mt-4 leading-[1.1]">
                Bring
                <br />
                {pet.petName}
                <br />
                Home ❤️
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                Give this lovely pet a caring and beautiful forever home.
              </p>

              {/* BUTTON */}
              <button
                onClick={HandleAdopt}
                className="w-full mt-10 bg-[#12372A] hover:bg-[#0d281f] text-white h-[68px] rounded-[24px] text-lg font-black transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Heart className="w-6 h-6" />
                Adopt Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openRequest && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl">
            {/* TOP */}
            <div className="relative h-[180px]">
              <img
                src={pet.image}
                alt={pet.petName}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              {/* INFO */}
              <div className="absolute bottom-7 left-7">
                <p className="text-[#F4A300] text-[10px] uppercase tracking-[3px] font-black">
                  Adoption
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  {pet.petName}
                </h2>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit(HandleRequest)}
              className="p-7 grid md:grid-cols-2 gap-5 bg-[#f8f5ef]"
            >
              <input
                type="text"
                value={pet.petName}
                readOnly
                {...register("petName")}
                className="h-[55px] rounded-2xl border bg-gray-100 px-5 outline-none"
              />

              <input
                type="text"
                defaultValue={session?.user?.name}
                {...register("Name")}
                className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
              />

              <input
                type="email"
                defaultValue={session?.user?.email}
                {...register("email")}
                className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
              />

              <div className="relative">
                <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="date"
                  {...register("date")}
                  className="w-full h-[55px] rounded-2xl border bg-white pl-14 pr-5 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  rows={5}
                  {...register("description")}
                  placeholder="Why do you want to adopt this pet?"
                  className="w-full rounded-2xl border bg-white px-5 py-4 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full h-[60px] rounded-2xl bg-[#12372A] text-[#F4A300] font-black text-lg"
                >
                  Submit Request →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
