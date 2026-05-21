"use client";

import { useSession } from "@/lib/auth-client";

import { catAdd } from "@/lib/petsData/data";

import { useForm } from "react-hook-form";

import { toast } from "sonner";

export default function AddPetForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    data: session,
  } = useSession();

  const HandelSubmit = async (data) => {

    const petData = {

      ...data,

      userId:
        session?.user?.id,
    };

    const result =
      await catAdd(petData);

    if (result.insertedId) {

      reset();

      toast.success(
        "Pet Added Successfully 🐾"
      );
    }

    else {

      toast.error(
        "Something went wrong 😢"
      );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f8f5ef] via-[#f5f1e8] to-[#faf8f3] py-24 px-4 overflow-hidden relative">

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto relative z-10">

        {/* TOP */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#00A86B] text-sm font-black">
            PawHaven
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-[#173c2d] mt-5 leading-tight">

            Add New
            <span className="text-[#c89b3c]">
              {" "}Pet
            </span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Share pet details beautifully and help
            them find a loving forever home.
          </p>
        </div>

        {/* FORM BOX */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[45px] p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.07)]">

          <form
            className="grid md:grid-cols-2 gap-7"
            onSubmit={handleSubmit(HandelSubmit)}
          >

            {/* PET NAME */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Pet Name
              </label>

              <input
                type="text"
                {...register("petName", {
                  required: true,
                })}
                placeholder="Enter pet name"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.petName &&
                <p className="text-red-500 text-sm mt-2">
                  Pet Name Required
                </p>
              }
            </div>

            {/* SPECIES */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Species
              </label>

              <input
                type="text"
                {...register("species", {
                  required: true,
                })}
                placeholder="Dog / Cat / Bird"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.species &&
                <p className="text-red-500 text-sm mt-2">
                  Species Required
                </p>
              }
            </div>

            {/* BREED */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Breed
              </label>

              <input
                type="text"
                {...register("breed", {
                  required: true,
                })}
                placeholder="Golden Retriever"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.breed &&
                <p className="text-red-500 text-sm mt-2">
                  Breed Required
                </p>
              }
            </div>

            {/* AGE */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Age
              </label>

              <input
                {...register("age", {
                  required: true,
                })}
                type="text"
                placeholder="2 Years"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.age &&
                <p className="text-red-500 text-sm mt-2">
                  Age Required
                </p>
              }
            </div>

            {/* GENDER */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Gender
              </label>

              <input
                type="text"
                {...register("gender", {
                  required: true,
                })}
                placeholder="Male/Female"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.gender &&
                <p className="text-red-500 text-sm mt-2">
                  Gender Required
                </p>
              }
            </div>

            {/* IMAGE URL */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Image URL
              </label>

              <input
                type="text"
                {...register("image", {
                  required: true,
                })}
                placeholder="Paste image URL"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.image &&
                <p className="text-red-500 text-sm mt-2">
                  Image URL Required
                </p>
              }
            </div>

            {/* HEALTH */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Health Status
              </label>

              <input
                type="text"
                {...register("healthStatus", {
                  required: true,
                })}
                placeholder="Healthy"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.healthStatus &&
                <p className="text-red-500 text-sm mt-2">
                  Health Status Required
                </p>
              }
            </div>

            {/* VACCINATION */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Vaccination
              </label>

              <input
                {...register("vaccinationStatus", {
                  required: true,
                })}
                type="text"
                placeholder="Vaccinated"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.vaccinationStatus &&
                <p className="text-red-500 text-sm mt-2">
                  Vaccination Required
                </p>
              }
            </div>

            {/* LOCATION */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Location
              </label>

              <input
                {...register("location", {
                  required: true,
                })}
                type="text"
                placeholder="Dhaka, Bangladesh"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.location &&
                <p className="text-red-500 text-sm mt-2">
                  Location Required
                </p>
              }
            </div>

            {/* ADOPTION FEE */}
            <div>
              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Adoption Fee
              </label>

              <input
                {...register("adoptionFee", {
                  required: true,
                })}
                type="text"
                placeholder="$120"
                className="w-full h-[65px] rounded-[26px] bg-white/80 border border-white/40 px-6 outline-none"
              />

              {
                errors.adoptionFee &&
                <p className="text-red-500 text-sm mt-2">
                  Adoption Fee Required
                </p>
              }
            </div>

            {/* DESCRIPTION */}
            <div className="md:col-span-2">

              <label className="block text-[#173c2d] font-black mb-3 text-sm tracking-wide">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: true,
                })}
                rows={6}
                placeholder="Write pet description..."
                className="w-full rounded-[32px] bg-white/80 border border-white/40 px-6 py-5 outline-none resize-none"
              ></textarea>

              {
                errors.description &&
                <p className="text-red-500 text-sm mt-2">
                  Description Required
                </p>
              }
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="md:col-span-2 h-[72px] rounded-[28px] bg-gradient-to-r from-[#173c2d] to-[#215540] hover:from-[#123126] hover:to-[#1d4a3a] text-[#f8d27b] text-lg font-black tracking-[1px] shadow-[0_18px_45px_rgba(23,60,45,0.22)] hover:scale-[1.01] transition duration-300"
            >
              Add Pet Now →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}