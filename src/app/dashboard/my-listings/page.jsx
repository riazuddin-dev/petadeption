"use client";

import EditModal from "@/app/components/EditModal";

import RequestsListModal from "@/app/components/RequestsListModal";

import DeleteModal from "@/app/components/DeleteModal";

import { useSession } from "@/lib/auth-client";

import {
  HandelDelete,
  PetAddUser,
} from "@/lib/petsData/data";

import {
  Heart,
  Pencil,
  Trash2,
  Eye,
  ClipboardList,
  PawPrint,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import { toast }
from "sonner";

export default function MyListingsPage() {

  const {
    data: session,
  } = useSession();

  const [pets, setPets] =
    useState([]);

  const [
    openModal,
    setOpenModal,
  ] = useState(false);

  const [
    selectedPet,
    setSelectedPet,
  ] = useState(null);

  const [
    requestModal,
    setRequestModal,
  ] = useState(false);

  const [
    openDelete,
    setOpenDelete
  ] = useState(false);

  const [
    deleteId,
    setDeleteId
  ] = useState(null);

  // LOAD DATA
  useEffect(() => {

    if(session?.user?.id){

      PetAddUser(
        session.user.id
      )
      .then((data) => {

        setPets(data);
      });
    }

  }, [session]);

  // EDIT
  const HandleEdit =
    (pet) => {

      setSelectedPet(pet);

      setOpenModal(true);
  };

  // REQUEST
  const HandleRequestModal =
    (pet) => {

      setSelectedPet(pet);

      setRequestModal(true);
  };

  // DELETE
  const HandleDelete =
  async (id) => {

    const result =
      await HandelDelete(id);

    if(result.deletedCount){

      toast.success(
        "Pet Deleted 🗑️"
      );

      PetAddUser(
        session.user.id
      )
      .then((data) => {

        setPets(data);
      });
    }
  };

  return (

    <section className="relative">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-5">

        <div>

          <p className="uppercase tracking-[4px] text-[#00A86B] text-xs font-black">
            Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-[#1E2E23] mt-3">
            My Listings 🐾
          </h1>

          <p className="text-gray-500 mt-4 text-base">
            Manage your pets and adoption requests.
          </p>
        </div>

        {/* FLOAT */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-[28px] px-6 py-5 shadow-xl flex items-center gap-5">

          <div className="w-14 h-14 rounded-full bg-[#F4A300] flex items-center justify-center shadow-lg">

            <ClipboardList className="w-7 h-7 text-[#12372A]" />
          </div>

          <div>

            <h3 className="text-[#1E2E23] font-black text-2xl">
              {pets.length} Listings
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Total Active Pets
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* CARD */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[30px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

          <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center">

            <PawPrint className="w-7 h-7 text-[#00A86B]" />
          </div>

          <h2 className="text-4xl font-black text-[#1E2E23] mt-6">
            {pets.length}
          </h2>

          <p className="text-gray-500 mt-2">
            Total Listings
          </p>
        </div>

        {/* CARD */}
        <div className="bg-[#12372A] rounded-[30px] p-6 shadow-[0_20px_60px_rgba(18,55,42,0.16)]">

          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">

            <CheckCircle2 className="w-7 h-7 text-[#F4A300]" />
          </div>

          <h2 className="text-4xl font-black text-white mt-6">
            {pets.length}
          </h2>

          <p className="text-white/70 mt-2">
            Available Pets
          </p>
        </div>
      </div>

      {/* EMPTY */}
      {
        pets.length === 0 ?

        (

          <div className="mt-14">

            <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[35px] p-10 md:p-16 text-center shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

              {/* ICON */}
              <div className="w-28 h-28 mx-auto rounded-full bg-[#F8F5EE] flex items-center justify-center">

                <PawPrint className="w-14 h-14 text-[#00A86B]" />
              </div>

              {/* TITLE */}
              <h2 className="text-4xl font-black text-[#1E2E23] mt-8">

                No Listings Found 🐾
              </h2>

              {/* DESC */}
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mt-5">

                You haven’t added any pets yet.
                Start sharing pets and help them
                find a loving forever home.
              </p>

              {/* BUTTON */}
              <Link href="/dashboard/add-pet">

                <button
                  className="
                    mt-8
                    bg-[#12372A]
                    hover:bg-[#0d281f]
                    text-white
                    h-[56px]
                    px-8
                    rounded-[18px]
                    text-sm
                    font-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >

                  + Add New Pet
                </button>
              </Link>
            </div>
          </div>
        )

        :

        (

          /* PET GRID */
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-14">

            {pets.map((pet) => (

              <div
                key={pet._id}
                className="group bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[35px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={pet.image}
                    alt={pet.petName}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* PRICE */}
                  <div className="absolute top-5 right-5">

                    <span className="bg-white/90 px-5 py-2 rounded-full text-[11px] font-black text-[#1E2E23] shadow-xl">
                      ${pet.adoptionFee}
                    </span>
                  </div>

                  {/* NAME */}
                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-3xl font-black text-white">
                      {pet.petName}
                    </h3>

                    <p className="text-white/70 mt-1">
                      {pet.breed}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* LOCATION */}
                  <div className="flex items-center justify-between bg-[#F8F5EE] rounded-[20px] px-5 py-4">

                    <div>

                      <p className="text-[10px] uppercase text-gray-400 font-bold">
                        Location
                      </p>

                      <h4 className="font-black text-[#1E2E23] mt-1">
                        {pet.location}
                      </h4>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg text-lg">
                      📍
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-4 mt-5">

                    {/* REQUEST */}
                    <button
                      onClick={() =>
                        HandleRequestModal(pet)
                      }
                      className="bg-[#12372A] hover:bg-[#0d281f] text-white h-[52px] rounded-[18px] text-sm font-black transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
                    >

                      <Heart className="w-5 h-5" />

                      Request
                    </button>

                    {/* VIEW */}
                    <Link
                      href={`/pets/${pet._id}`}
                    >

                      <button
                        className="w-full bg-[#F4A300] hover:bg-[#e69800] text-white h-[52px] rounded-[18px] text-sm font-black transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
                      >

                        <Eye className="w-5 h-5" />

                        View
                      </button>
                    </Link>

                    {/* EDIT */}
                    <button
                      onClick={() =>
                        HandleEdit(pet)
                      }
                      className="bg-[#EFFFF8] hover:bg-[#00A86B] hover:text-white text-[#00A86B] h-[52px] rounded-[18px] text-sm font-black transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
                    >

                      <Pencil className="w-5 h-5" />

                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => {

                        setDeleteId(
                          pet._id
                        );

                        setOpenDelete(true);
                      }}
                      className="bg-[#FFF1F1] hover:bg-[#EF4444] hover:text-white text-[#EF4444] h-[52px] rounded-[18px] text-sm font-black transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
                    >

                      <Trash2 className="w-5 h-5" />

                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

      {/* EDIT MODAL */}
      {
        openModal && (

          <EditModal

            openModal={openModal}

            setOpenModal={setOpenModal}

            selectedPet={selectedPet}

            setPets={setPets}

            session={session}
          />
        )
      }

      {/* REQUEST MODAL */}
      {
        requestModal && (

          <RequestsListModal

            openRequest={requestModal}

            setOpenRequest={setRequestModal}

            pet={selectedPet}
          />
        )
      }

      {/* DELETE MODAL */}
      {
        openDelete && (

          <DeleteModal

            openDelete={openDelete}

            setOpenDelete={setOpenDelete}

            HandleDelete={HandleDelete}

            petId={deleteId}
          />
        )
      }
    </section>
  );
}