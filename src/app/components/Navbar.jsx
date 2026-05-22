"use client";

import Link from "next/link";

import {
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Heart,
  LogOut,
  PawPrint,
  PlusCircle,
} from "lucide-react";

import {
  authClient,
} from "@/lib/auth-client";

import { router }
from "better-auth/api";

export default function Navbar() {

  const pathname =
    usePathname();

  const {
    data: session
  } =
    authClient.useSession();

  const user =
    session?.user;

  const [
    mobileMenu,
    setMobileMenu
  ] = useState(false);

  const [
    openProfile,
    setOpenProfile
  ] = useState(false);

  const HandelLogout =
  async () => {

    await authClient.signOut();

    router.push("/");
  };

  return (

    <header className="relative w-full z-[9999] px-4 md:px-8 pt-5 overflow-visible">

      {/* NAVBAR */}
      <nav className="relative overflow-visible max-w-7xl mx-auto bg-[#12372A]/95 backdrop-blur-xl rounded-[28px] px-5 lg:px-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/10">

        <div className="flex items-center justify-between h-[78px]">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >

            {/* ICON */}
            <div className="relative">

              <div className="absolute inset-0 bg-[#F4A300]/30 blur-xl rounded-full"></div>

              <div className="relative w-14 h-14 rounded-2xl bg-[#F4A300] flex items-center justify-center shadow-xl">

                <PawPrint className="w-7 h-7 text-[#12372A]" />
              </div>
            </div>

            {/* TEXT */}
            <div className="leading-none">

              <h1 className="text-white text-[28px] font-black tracking-wide">
                PawHaven
              </h1>

              <p className="text-white/50 text-[11px] tracking-[4px] uppercase mt-1">
                Pet Adoption
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-3">

            {/* HOME */}
            <Link
              href="/"

              className={`
                px-5
                h-11
                rounded-2xl
                flex
                items-center
                transition
                font-semibold

                ${
                  pathname === "/"

                  ?

                  "bg-[#F4A300] text-[#12372A] shadow-lg"

                  :

                  "text-white/80 hover:bg-white/10 hover:text-[#F4A300]"
                }
              `}
            >
              Home
            </Link>

            {/* ALL PETS */}
            <Link
              href="/pets"

              className={`
                px-5
                h-11
                rounded-2xl
                flex
                items-center
                transition
                font-semibold

                ${
                  pathname === "/pets"

                  ?

                  "bg-[#F4A300] text-[#12372A] shadow-lg"

                  :

                  "text-white/80 hover:bg-white/10 hover:text-[#F4A300]"
                }
              `}
            >
              All Pets
            </Link>

            {/* DASHBOARD */}
         <Link
  href="/dashboard/add-pet"

  className={`
    px-5
    h-11
    rounded-2xl
    flex
    items-center
    transition
    font-semibold

    ${
      pathname.includes("/dashboard")

      ?

      "bg-[#F4A300] text-[#12372A] shadow-lg"

      :

      "text-white/80 hover:bg-white/10 hover:text-[#F4A300]"
    }
  `}
>
  Dashboard
</Link>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4">

            {
              user ?

              (
                <>

                  {/* PROFILE */}
                  <div className="relative">

                    {/* PROFILE BUTTON */}
                    <button

                      onClick={() =>
                        setOpenProfile(
                          !openProfile
                        )
                      }

                      className="bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-[22px] px-3 py-2 flex items-center gap-3 border border-white/10"
                    >

                      {/* IMAGE */}
                      <img
                        src={
                          user?.image
                          ||
                          "https://i.pravatar.cc/100"
                        }

                        alt="profile"

                        className="w-11 h-11 rounded-full object-cover border-2 border-[#F4A300]"
                      />

                      {/* INFO */}
                      <div className="text-left">

                        <h3 className="text-white font-bold text-sm leading-none">
                          {user?.name}
                        </h3>

                        <p className="text-white/50 text-xs mt-1">
                          Active User
                        </p>
                      </div>

                      {/* ICON */}
                      <ChevronDown

                        className={`
                          w-4 h-4 text-white/70 transition duration-300

                          ${
                            openProfile
                            ?
                            "rotate-180"
                            :
                            ""
                          }
                        `}
                      />
                    </button>

                    {/* DROPDOWN */}
                    {
                      openProfile && (

                        <div className="absolute right-0 top-[85px] w-[320px] bg-[#F8F5EE] rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] p-5 z-[99999] border border-[#ece7dd]">

                          {/* USER TOP */}
                          <div className="bg-white rounded-[24px] p-5 border border-[#ece7dd]">

                            <div className="flex items-center gap-4">

                              <img
                                src={
                                  user?.image
                                  ||
                                  "https://i.pravatar.cc/100"
                                }

                                alt="profile"

                                className="w-16 h-16 rounded-full object-cover border-2 border-[#F4A300]"
                              />

                              <div>

                                <h3 className="font-black text-[#1E2E23] text-lg">
                                  {user?.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1 break-all">
                                  {user?.email}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* MENU */}
                          <div className="mt-5 space-y-2">

                            {/* ADD PET */}
                            <Link
                              href="/dashboard/add-pet"

                              className={`
                                flex
                                items-center
                                gap-4
                                px-5
                                h-[58px]
                                rounded-[20px]
                                transition-all
                                duration-300
                                font-semibold

                                ${
                                  pathname === "/dashboard/add-pet"

                                  ?

                                  "bg-[#12372A] text-[#F4A300]"

                                  :

                                  "hover:bg-white text-[#173c2d]"
                                }
                              `}
                            >

                              <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/20 flex items-center justify-center">

                                <PlusCircle className="w-5 h-5 text-[#F4A300]" />
                              </div>

                              Add Pet
                            </Link>

                            {/* REQUEST */}
                            <Link
                              href="/dashboard/my-requests"

                              className={`
                                flex
                                items-center
                                gap-4
                                px-5
                                h-[58px]
                                rounded-[20px]
                                transition-all
                                duration-300
                                font-semibold

                                ${
                                  pathname === "/dashboard/my-requests"

                                  ?

                                  "bg-[#12372A] text-[#F4A300]"

                                  :

                                  "hover:bg-white text-[#173c2d]"
                                }
                              `}
                            >

                              <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/20 flex items-center justify-center">

                                <Heart className="w-5 h-5 text-[#F4A300]" />
                              </div>

                              My Requests
                            </Link>

                            {/* DASHBOARD */}
                            <Link
                              href="/dashboard/add-pet"

                              className="flex items-center gap-4 px-5 h-[58px] rounded-[20px] hover:bg-white text-[#173c2d] transition-all duration-300 font-semibold"
                            >

                              <div className="w-11 h-11 rounded-2xl bg-[#F4A300]/20 flex items-center justify-center">

                                <LayoutDashboard className="w-5 h-5 text-[#F4A300]" />
                              </div>

                              Dashboard
                            </Link>

                            {/* LOGOUT */}
                            <button

                              onClick={HandelLogout}

                              className="w-full flex items-center gap-4 px-5 h-[58px] rounded-[20px] hover:bg-red-50 text-red-500 transition-all duration-300 font-semibold"
                            >

                              <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center">

                                <LogOut className="w-5 h-5" />
                              </div>

                              Logout
                            </button>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </>
              )

              :

              (
                <>
                  {/* LOGIN */}
                  <Link
                    href="/login"
                    className="text-white/80 hover:text-white transition font-medium"
                  >
                    Login
                  </Link>

                  {/* REGISTER */}
                  <Link
                    href="/register"
                    className="bg-[#F4A300] hover:bg-[#e69a00] transition px-6 h-[50px] rounded-2xl text-[#12372A] font-bold shadow-xl flex items-center"
                  >
                    Sign Up
                  </Link>
                </>
              )
            }
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="lg:hidden text-white"
          >

            {
              mobileMenu
              ?
              <X size={30} />
              :
              <Menu size={30} />
            }
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {
        mobileMenu && (

          <div className="max-w-7xl mx-auto bg-[#12372A] mt-4 rounded-[30px] p-6 lg:hidden shadow-2xl border border-white/10">

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="h-[55px] rounded-2xl px-5 flex items-center text-white hover:bg-white/10"
              >
                Home
              </Link>

              <Link
                href="/pets"
                className="h-[55px] rounded-2xl px-5 flex items-center text-white hover:bg-white/10"
              >
                All Pets
              </Link>

              <Link
                href="/dashboard/add-pet"
                className="h-[55px] rounded-2xl px-5 flex items-center text-white hover:bg-white/10"
              >
                Dashboard
              </Link>

              {
                user ?

                (
                  <button

                    onClick={HandelLogout}

                    className="bg-red-500 hover:bg-red-600 transition text-white h-[55px] rounded-2xl mt-2 font-medium"
                  >
                    Logout
                  </button>
                )

                :

                (
                  <div className="flex flex-col gap-3 mt-2">

                    <Link
                      href="/login"
                      className="border border-white/20 text-center text-white h-[55px] rounded-2xl flex items-center justify-center"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      className="bg-[#F4A300] hover:bg-[#e89a00] transition text-[#12372A] text-center h-[55px] rounded-2xl flex items-center justify-center font-bold"
                    >
                      Sign Up
                    </Link>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </header>
  );
}