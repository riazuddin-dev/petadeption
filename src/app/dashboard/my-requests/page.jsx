"use client";

import Link from "next/link";

import {
  CalendarDays,
  PawPrint,
  ArrowRight,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useSession,
} from "@/lib/auth-client";

import {
  MyRequestData
} from "@/lib/petsData/data";

export default function MyRequestsPage() {

  const {
    data: session,
  } = useSession();

  const [
    requests,
    setRequests,
  ] = useState([]);

  // FETCH DATA
  useEffect(() => {

    if(session?.user?.id){

      MyRequestData(
        session.user.id
      )
      .then((data) => {

        setRequests(data);
      });
    }

  }, [session]);

  return (

    <section className="relative">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-5">

        <div>

          <p className="uppercase tracking-[4px] text-[#00A86B] text-xs font-black">
            Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-[#1E2E23] mt-3">
            My Requests ❤️
          </h1>

          <p className="text-gray-500 mt-4 text-base">
            Track your adoption requests beautifully.
          </p>
        </div>

        {/* FLOAT CARD */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-[28px] px-6 py-5 shadow-xl flex items-center gap-5">

          <div className="w-14 h-14 rounded-full bg-[#F4A300] flex items-center justify-center shadow-lg">

            <PawPrint className="w-7 h-7 text-[#12372A]" />
          </div>

          <div>

            <h3 className="text-[#1E2E23] font-black text-2xl">
              {requests.length}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Total Requests
            </p>
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      {
        requests.length === 0 ?

        (

          <div className="mt-14">

            <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[35px] p-10 md:p-16 text-center shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

              {/* ICON */}
              <div className="w-28 h-28 mx-auto rounded-full bg-[#F8F5EE] flex items-center justify-center">

                <PawPrint className="w-14 h-14 text-[#00A86B]" />
              </div>

              {/* TITLE */}
              <h2 className="text-4xl font-black text-[#1E2E23] mt-8">

                No Requests Yet 💔
              </h2>

              {/* DESC */}
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mt-5">

                You haven't requested any pets yet.
                Explore pets and send adoption
                requests to your favorite companions.
              </p>

              {/* BUTTON */}
              <Link href="/pets">

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

                  Explore Pets
                </button>
              </Link>
            </div>
          </div>
        )

        :

        (

          /* REQUESTS */
          <div className="grid lg:grid-cols-2 gap-7 mt-14">

            {requests.map((request) => (

              <div
                key={request._id}
                className="group bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[35px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={request.image}
                    alt={request.petName}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* STATUS */}
                  <div className="absolute top-5 left-5">

                    <span className="px-5 py-2 rounded-full text-[11px] font-black shadow-xl bg-[#F4A300] text-white">

                      {request.status}
                    </span>
                  </div>

                  {/* NAME */}
                  <div className="absolute bottom-6 left-6">

                    <h2 className="text-3xl font-black text-white">
                      {request.petName}
                    </h2>

                    <p className="text-white/70 mt-1">
                      {request.Name}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* DETAILS */}
                  <div className="grid md:grid-cols-2 gap-4">

                    {/* EMAIL */}
                    <div className="bg-[#F8F5EE] rounded-[22px] p-5">

                      <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-black">
                        Email
                      </p>

                      <h3 className="font-black text-[#1E2E23] text-base mt-4 break-all">
                        {request.email}
                      </h3>
                    </div>

                    {/* PICKUP DATE */}
                    <div className="bg-[#EFFFF8] rounded-[22px] p-5">

                      <div className="flex items-center gap-3">

                        <CalendarDays className="w-5 h-5 text-[#00A86B]" />

                        <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-black">
                          Pickup Date
                        </p>
                      </div>

                      <h3 className="font-black text-[#1E2E23] text-base mt-4">
                        {request.date}
                      </h3>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-5 bg-white rounded-[24px] p-5 shadow-lg">

                    <p className="uppercase tracking-[2px] text-gray-400 text-[10px] font-black">
                      Message
                    </p>

                    <p className="text-[#1E2E23] leading-relaxed mt-4 text-sm">
                      {request.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-5">

                    <Link
                      href={`/pets/${request.petId}`}
                      className="bg-[#12372A] hover:bg-[#0d281f] text-white h-[54px] rounded-[18px] text-sm font-black transition-all duration-300 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
                    >

                      View Pet Details

                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </section>
  );
}