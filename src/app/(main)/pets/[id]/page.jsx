import PetDetailsClient from "@/app/components/PetDetailsClient";
import {OneUserId } from "@/lib/petsData/data";


export default async function PetDetailsPage({params}) {
  const { id } = await params;

  const pet = await OneUserId(id);
  // const {
  //   ownerEmail,
  //   vaccinationStatus,
  //   location,
  //   healthStatus,
  //   adoptionFee,
  //   image,
  //   petName,
  //   gender,
  //   bread,
  //   age,
  //   description,
  // } = pet;
 
  return (
    // <section className="min-h-screen bg-[#F6F1E8] py-16 overflow-hidden relative">
    //   {/* BLUR */}
    //   <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

    //   <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

    //   {/* PAWS */}
    //   <img
    //     src={image}
    //     alt="paw"
    //     className="absolute top-20 left-10 w-40 opacity-[0.03]"
    //   />

    //   <img
    //     src={image}
    //     alt="paw"
    //     className="absolute bottom-10 right-10 w-44 opacity-[0.03]"
    //   />

    //   <div className="max-w-7xl mx-auto px-4 relative z-10">
    //     {/* BACK */}
    //     <Link href={"/pets"}>
    //       <button className="mb-10 bg-white/70 backdrop-blur-xl border border-white/30 hover:bg-[#12372A] hover:text-white text-[#12372A] h-[58px] px-7 rounded-full text-sm font-black shadow-xl transition-all duration-300">
    //         ← Back To Pets
    //       </button>
    //     </Link>

    //     {/* MAIN GRID */}
    //     <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
    //       {/* LEFT */}
    //       <div>
    //         {/* IMAGE */}
    //         <div className="relative overflow-hidden rounded-[45px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
    //           <img
    //             src={image}
    //             alt="pet"
    //             className="w-full h-[650px] object-cover"
    //           />

    //           {/* OVERLAY */}
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

    //           {/* BADGES */}
    //           <div className="absolute top-6 left-6 flex gap-4 flex-wrap">
    //             <span className="bg-[#00A86B] text-white px-6 py-3 rounded-full text-sm font-black shadow-xl">
    //               Available For Adoption
    //             </span>

    //             <span className="bg-white/90 backdrop-blur-xl text-[#12372A] px-6 py-3 rounded-full text-sm font-black shadow-xl">
    //               ${adoptionFee} Adoption Fee
    //             </span>
    //           </div>

    //           {/* NAME */}
    //           <div className="absolute bottom-8 left-8">
    //             <h1 className="text-7xl font-black text-white">{petName}
    //             </h1>

    //             <p className="text-white/80 text-xl mt-4">{bread}</p>
    //           </div>
    //         </div>

    //         {/* DETAILS */}
    //         <div className="mt-10 bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[40px] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
    //           {/* TOP INFO */}
    //           <div className="flex flex-wrap gap-4">
    //             <div className="bg-[#F8F5EE] rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
    //               <PawPrint className="w-5 h-5 text-[#F4A300]" />

    //               <span className="font-black text-[#1E2E23]">
    //                 {age} Years Old
    //               </span>
    //             </div>

    //             <div className="bg-[#EFFFF8] rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
    //               <ShieldCheck className="w-5 h-5 text-[#00A86B]" />

    //               <span className="font-black text-[#1E2E23]">
    //                 {vaccinationStatus}
    //               </span>
    //             </div>

    //             <div className="bg-[#FFF6E5] rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
    //               <Stethoscope className="w-5 h-5 text-[#F4A300]" />

    //               <span className="font-black text-[#1E2E23]">
    //                 {healthStatus}
    //               </span>
    //             </div>

    //             <div className="bg-[#F4F7FF] rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
    //               <MapPin className="w-5 h-5 text-[#3B82F6]" />

    //               <span className="font-black text-[#1E2E23]">{location}</span>
    //             </div>
    //           </div>

    //           {/* DESCRIPTION */}
    //           <div className="mt-10">
    //             <p className="uppercase tracking-[4px] text-[#00A86B] text-xs font-black">
    //               About {petName}
    //             </p>

    //             <h2 className="text-5xl font-black text-[#1E2E23] mt-4">
    //               Loyal, Friendly &
    //               <br />
    //               Full Of Energy 
    //             </h2>

    //             <p className="text-gray-600 text-lg leading-relaxed mt-8">
    //               {description}
    //             </p>

    //             <p className="text-gray-600 text-lg leading-relaxed mt-6">
    //               He loves children, gets along well with other pets and enjoys
    //               long walks in the park. Max is already trained with basic
    //               commands and adapts quickly to new environments.
    //             </p>
    //           </div>

    //           {/* EXTRA INFO */}
    //           <div className="grid md:grid-cols-2 gap-6 mt-10">
    //             <div className="bg-[#F8F5EE] rounded-[28px] p-6">
    //               <p className="uppercase tracking-[3px] text-gray-400 text-[10px] font-black">
    //                 Gender
    //               </p>

    //               <h3 className="text-2xl font-black text-[#1E2E23] mt-4">
    //                 {gender}
    //               </h3>
    //             </div>

    //             <div className="bg-[#EFFFF8] rounded-[28px] p-6">
    //               <p className="uppercase tracking-[3px] text-gray-400 text-[10px] font-black">
    //                 Owner Email
    //               </p>

    //               <h3 className="text-xl font-black text-[#1E2E23] mt-4 break-all">
    //                 {ownerEmail}
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT */}
    //       <div className="sticky top-10">
    //         <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[40px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] relative overflow-hidden">
    //           {/* BLUR */}
    //           <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4A300]/10 rounded-full blur-3xl"></div>

    //           {/* TOP */}
    //           <div>
    //             <p className="uppercase tracking-[4px] text-[#F4A300] text-xs font-black">
    //               Adoption Form
    //             </p>

    //             <h2 className="text-5xl font-black text-[#1E2E23] mt-4 leading-[1.1]">
    //               Adopt
    //               <br />
    //               {petName}
    //             </h2>

    //             <p className="text-gray-500 mt-5 leading-relaxed">
    //               Fill the form and begin your adoption journey.
    //             </p>
    //           </div>

    //           {/* FORM */}
    //           <div className="space-y-6 mt-10">
    //             {/* PET NAME */}
    //             <div>
    //               <label className="block text-sm font-black text-[#1E2E23] mb-3">
    //                 Pet Name
    //               </label>

    //               <input
    //                 type="text"
    //                 value="Max"
    //                 readOnly
    //                 className="w-full h-[62px] rounded-[22px] bg-[#F8F5EE] border border-gray-200 outline-none px-5 text-gray-500"
    //               />
    //             </div>

    //             {/* USER NAME */}
    //             <div>
    //               <label className="block text-sm font-black text-[#1E2E23] mb-3">
    //                 User Name
    //               </label>

    //               <input
    //                 type="text"
    //                 value="John Doe"
    //                 readOnly
    //                 className="w-full h-[62px] rounded-[22px] bg-[#F8F5EE] border border-gray-200 outline-none px-5 text-gray-500"
    //               />
    //             </div>

    //             {/* USER EMAIL */}
    //             <div>
    //               <label className="block text-sm font-black text-[#1E2E23] mb-3">
    //                 User Email
    //               </label>

    //               <input
    //                 type="email"
    //                 value="john@gmail.com"
    //                 readOnly
    //                 className="w-full h-[62px] rounded-[22px] bg-[#F8F5EE] border border-gray-200 outline-none px-5 text-gray-500"
    //               />
    //             </div>

    //             {/* PICKUP DATE */}
    //             <div>
    //               <label className="block text-sm font-black text-[#1E2E23] mb-3">
    //                 Pickup Date
    //               </label>

    //               <div className="relative">
    //                 <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F4A300]" />

    //                 <input
    //                   type="date"
    //                   className="w-full h-[62px] rounded-[22px] bg-white border border-gray-200 focus:border-[#00A86B] outline-none pl-14 pr-5"
    //                 />
    //               </div>
    //             </div>

    //             {/* MESSAGE */}
    //             <div>
    //               <label className="block text-sm font-black text-[#1E2E23] mb-3">
    //                 Message
    //               </label>

    //               <textarea
    //                 rows={5}
    //                 placeholder="Why do you want to adopt this pet?"
    //                 className="w-full rounded-[28px] bg-white border border-gray-200 focus:border-[#00A86B] outline-none px-5 py-5 resize-none"
    //               ></textarea>
    //             </div>

    //             {/* STATUS */}
    //             <div className="bg-[#FFF6E5] rounded-[24px] p-5">
    //               <p className="uppercase tracking-[3px] text-[#F4A300] text-[10px] font-black">
    //                 Default Status
    //               </p>

    //               <h3 className="text-2xl font-black text-[#1E2E23] mt-3">
    //                 Pending
    //               </h3>
    //             </div>

    //             {/* BUTTON */}
    //             <button className="w-full bg-[#12372A] hover:bg-[#0d281f] text-white h-[68px] rounded-[24px] text-lg font-black shadow-[0_15px_40px_rgba(18,55,42,0.25)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
    //               <Heart className="w-6 h-6" />
    //               Submit Adoption Request
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

     <PetDetailsClient
      pet={pet}
    />
  );
}
