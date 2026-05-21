"use client";

import { useSession } from "@/lib/auth-client";

import {
  RequestPetData,
} from "@/lib/petsData/data";

import {
  Heart,
  X,
  Calendar,
} from "lucide-react";

import {
  useForm,
} from "react-hook-form";

const RequestModal = ({
  openRequest,
  setOpenRequest,
  pet,
}) => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const {
    data: session
  } = useSession();

  if (!openRequest) {

    return null;
  }

  // REQUEST SUBMIT
  const HandleRequest =
    async (data) => {

      const requestData = {

        petId:
        pet._id,

        petName:
        data.petName,

        image:
        pet.image,

        Name:
        data.Name,

        email:
        data.email,

        date:
        data.date,

        description:
        data.description,

        status:
        "Pending",

        userId:
        session.user.id,
      };

      const result =
        await RequestPetData(
          requestData
        );

      if(result.insertedId){

       toast.success(
  "Request Sent Successfully 😍"
);

        setOpenRequest(false);
      }
  };

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      <div className="w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl">

        {/* TOP */}
        <div className="relative h-[180px]">

          <img
            src={pet?.image}
            alt={pet?.petName}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          {/* CLOSE */}
          <button
            onClick={() =>
              setOpenRequest(false)
            }
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center"
          >

            <X className="w-5 h-5" />
          </button>

          {/* INFO */}
          <div className="absolute bottom-7 left-7">

            <p className="text-[#F4A300] text-[10px] uppercase tracking-[3px] font-black">
              Adoption
            </p>

            <h2 className="text-4xl font-black text-white mt-2">
              {pet?.petName}
            </h2>

            <p className="text-white/80 mt-2">
              {pet?.breed}
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          className="p-7 grid md:grid-cols-2 gap-5 bg-[#f8f5ef]"
          onSubmit={handleSubmit(HandleRequest)}
        >

          {/* PET NAME */}
          <input
            type="text"
            {...register("petName")}
            value={pet?.petName}
            readOnly
            className="h-[55px] rounded-2xl border bg-gray-100 px-5 outline-none"
          />

          {/* USER NAME */}
          <input
            type="text"
            {...register("Name")}
            placeholder="Your Name"
            defaultValue={
              session?.user?.name
            }
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            {...register("email")}
            placeholder="Your Email"
            defaultValue={
              session?.user?.email
            }
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          {/* DATE */}
          <div className="relative">

            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              {...register("date")}
              type="date"
              className="w-full h-[55px] rounded-2xl border bg-white pl-14 pr-5 outline-none"
            />
          </div>

          {/* STATUS */}
          <div className="md:col-span-2">

            <div className="flex items-center justify-between bg-white rounded-2xl px-5 h-[55px] border">

              <span className="text-gray-500 font-medium">
                Status
              </span>

              <span className="px-4 py-2 rounded-full bg-[#FFF6E5] text-[#F4A300] text-xs font-black">

                Pending
              </span>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">

            <textarea
              {...register("description")}
              rows={5}
              placeholder="Why do you want to adopt this pet?"
              className="w-full rounded-2xl border bg-white px-5 py-4 outline-none"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full h-[60px] rounded-2xl bg-[#12372A] text-[#F4A300] font-black text-lg hover:scale-[1.01] transition flex items-center justify-center gap-3"
            >

              <Heart className="w-5 h-5" />

              Send Request →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;