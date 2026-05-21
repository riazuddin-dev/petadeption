"use client";

import {
  HandelUpdate,
  PetAddUser,
} from "@/lib/petsData/data";

import { useForm } from "react-hook-form";

import { toast } from "sonner";

const EditModal = ({
  openModal,
  setOpenModal,
  selectedPet,
  setPets,
  session,
}) => {

  const {
    register,
    handleSubmit,
  } = useForm();

  if (!openModal) {

    return null;
  }

  const onSubmit =
    async (data) => {

      const update =
        await HandelUpdate(
          selectedPet?._id,
          data
        );

      if (update.modifiedCount) {

        toast.success(
          "Pet Updated Successfully ✨"
        );

        setOpenModal(false);

        PetAddUser(
          session.user.id
        )
        .then((data) => {

          setPets(data);
        });
      }

      else {

        toast.error(
          "Something went wrong 😢"
        );
      }
    };

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      {/* MODAL */}
      <div className="w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl">

        {/* TOP */}
        <div className="bg-[#12372A] px-7 py-5 flex items-center justify-between">

          <div>

            <p className="text-[#F4A300] text-[10px] uppercase tracking-[3px] font-black">
              Dashboard
            </p>

            <h2 className="text-2xl font-black text-white mt-1">
              Edit Pet
            </h2>
          </div>

          <button
            onClick={() =>
              setOpenModal(false)
            }
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-7 grid md:grid-cols-2 gap-5 bg-[#f8f5ef]"
        >

          <input
            type="text"
            placeholder="Pet Name"
            defaultValue={
              selectedPet?.petName
            }
            {...register("petName")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <input
            type="text"
            placeholder="Breed"
            defaultValue={
              selectedPet?.breed
            }
            {...register("breed")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <input
            type="text"
            placeholder="Age"
            defaultValue={
              selectedPet?.age
            }
            {...register("age")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <input
            type="text"
            placeholder="Gender"
            defaultValue={
              selectedPet?.gender
            }
            {...register("gender")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            defaultValue={
              selectedPet?.location
            }
            {...register("location")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <input
            type="text"
            placeholder="Adoption Fee"
            defaultValue={
              selectedPet?.adoptionFee
            }
            {...register("adoptionFee")}
            className="h-[55px] rounded-2xl border bg-white px-5 outline-none"
          />

          <div className="md:col-span-2">

            <input
              type="text"
              placeholder="Image URL"
              defaultValue={
                selectedPet?.image
              }
              {...register("image")}
              className="w-full h-[55px] rounded-2xl border bg-white px-5 outline-none"
            />
          </div>

          <div className="md:col-span-2">

            <textarea
              rows={4}
              placeholder="Description"
              defaultValue={
                selectedPet?.description
              }
              {...register("description")}
              className="w-full rounded-2xl border bg-white px-5 py-4 outline-none"
            />
          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full h-[60px] rounded-2xl bg-[#12372A] text-[#F4A300] font-black text-lg hover:scale-[1.01] transition"
            >
              Update Pet →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;