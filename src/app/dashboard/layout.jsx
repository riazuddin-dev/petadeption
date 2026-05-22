"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  PawPrint,
  HeartHandshake,
  ClipboardList,
  Home,
  Bell,
  Sparkles,
} from "lucide-react";

import {
  useSession,
} from "@/lib/auth-client";

export default function DashboardLayout({
  children,
}) {

  const pathname =
    usePathname();

  const {
    data: session,
  } = useSession();

  const navLinks = [

    {
      name: "Add Pet",

      href:
      "/dashboard/add-pet",

      icon:
      PawPrint,
    },

    {
      name:
      "My Listings",

      href:
      "/dashboard/my-listings",

      icon:
      ClipboardList,
    },

    {
      name:
      "My Requests",

      href:
      "/dashboard/my-requests",

      icon:
      HeartHandshake,
    },
  ];

  return (

    <section className="
      min-h-screen
      bg-[#F6F1E8]
      flex
      flex-col
      lg:flex-row
      relative
      overflow-hidden
    ">

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* SIDEBAR */}
      <aside className="
        hidden
        lg:flex
        w-[320px]
        min-h-screen
        bg-[#12372A]
        relative
        overflow-hidden
        flex-col
        justify-between
        p-8
      ">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <Link href="/">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-[#F4A300] flex items-center justify-center shadow-2xl">

                <PawPrint className="w-8 h-8 text-[#12372A]" />
              </div>

              <div>

                <h2 className="text-3xl font-black text-white">

                  PawHaven
                </h2>

                <p className="text-white/60 text-sm mt-1">

                  Pet Adoption
                </p>
              </div>
            </div>
          </Link>

          {/* USER */}
          <div className="
            mt-10
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[32px]
            p-5
          ">

            <div className="flex items-center gap-4">

              <div className="relative">

                <img
                  src={
                    session?.user?.image
                    ||
                    "https://i.pravatar.cc/150?img=12"
                  }

                  alt="user"

                  className="
                    w-20
                    h-20
                    rounded-full
                    object-cover
                    border-4
                    border-white
                    shadow-2xl
                  "
                />

                <div className="
                  absolute
                  bottom-1
                  right-1
                  w-4
                  h-4
                  rounded-full
                  bg-[#00A86B]
                  border-2
                  border-white
                  animate-pulse
                "></div>
              </div>

              <div>

                <p className="
                  uppercase
                  tracking-[3px]
                  text-[#F4A300]
                  text-[10px]
                  font-black
                ">

                  Active User
                </p>

                <h3 className="
                  text-white
                  font-black
                  text-xl
                  mt-2
                ">

                  {
                    session?.user?.name
                    ||
                    "User"
                  }
                </h3>

                <p className="
                  text-white/60
                  text-sm
                  mt-1
                  break-all
                ">

                  {
                    session?.user?.email
                  }
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="mt-14 space-y-4">

            {
              navLinks.map((item) => {

                const Icon =
                  item.icon;

                const isActive =
                  pathname === item.href;

                return (

                  <Link
                    key={item.href}
                    href={item.href}
                  >

                    <div

                      className={`
                        flex items-center gap-4 px-5 h-[68px]
                        rounded-[24px]
                        transition-all duration-300

                        ${
                          isActive

                          ?

                          "bg-[#F4A300] text-[#12372A] shadow-2xl"

                          :

                          "text-white/70 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >

                      <div className="
                        w-12
                        h-12
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                      ">

                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="font-black text-lg">

                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })
            }
          </div>
        </div>

        {/* HOME */}
        <Link href="/">

          <button className="
            w-full
            bg-white
            hover:bg-[#F4A300]

            text-[#12372A]

            h-[65px]

            rounded-[24px]

            text-sm
            font-black

            shadow-xl

            transition-all
            duration-300

            flex
            items-center
            justify-center
            gap-3
          ">

            <Home className="w-5 h-5" />

            Back To Home
          </button>
        </Link>
      </aside>

      {/* MAIN */}
      <main className="
        flex-1
        relative
        z-10
        w-full
      ">

        {/* MOBILE TOP */}
        <div className="
          lg:hidden
          sticky
          top-0
          z-50

          bg-[#12372A]/95
          backdrop-blur-2xl

          border-b
          border-white/10
        ">

          {/* HEADER */}
          <div className="
            px-4
            py-4

            flex
            items-center
            justify-between
          ">

            <div className="
              flex
              items-center
              gap-3
            ">

              <div className="
                w-12
                h-12

                rounded-2xl

                bg-[#F4A300]

                flex
                items-center
                justify-center

                shadow-xl
              ">

                <PawPrint className="
                  w-6
                  h-6
                  text-[#12372A]
                " />
              </div>

              <div>

                <h2 className="
                  text-white
                  font-black
                  text-xl
                ">

                  PawHaven
                </h2>

                <p className="
                  text-white/50
                  text-xs
                ">

                  Dashboard
                </p>
              </div>
            </div>

            <Link href="/">

              <button className="
                bg-[#F4A300]

                hover:bg-[#e8a000]

                transition-all
                duration-300

                px-4
                h-[45px]

                rounded-2xl

                text-sm
                font-black

                text-[#12372A]

                shadow-lg
              ">

                Home
              </button>
            </Link>
          </div>

          {/* MOBILE MENU */}
          <div className="
            flex
            gap-3

            overflow-x-auto

            px-4
            pb-4

            scrollbar-hide
          ">

            {
              navLinks.map((item) => {

                const Icon =
                  item.icon;

                const isActive =
                  pathname === item.href;

                return (

                  <Link
                    key={item.href}
                    href={item.href}
                  >

                    <div

                      className={`
                        min-w-fit

                        px-5
                        h-[55px]

                        rounded-2xl

                        flex
                        items-center
                        gap-3

                        font-bold

                        transition-all
                        duration-300

                        ${
                          isActive

                          ?

                          "bg-[#F4A300] text-[#12372A] shadow-xl"

                          :

                          "bg-white/10 text-white"
                        }
                      `}
                    >

                      <Icon className="w-5 h-5" />

                      {item.name}
                    </div>
                  </Link>
                );
              })
            }
          </div>
        </div>

        {/* TOPBAR */}
        <div className="
          sticky
          top-0
          z-20

          backdrop-blur-2xl

          bg-white/40

          border-b
          border-white/20

          px-4
          lg:px-10

          py-5

          flex
          items-center
          justify-between
        ">

          <div>

            <div className="
              inline-flex
              items-center
              gap-3

              bg-white/70

              backdrop-blur-xl

              border
              border-white/30

              px-4
              py-2

              rounded-full

              shadow-lg
            ">

              <Sparkles className="w-5 h-5 text-[#F4A300]" />

              <span className="
                text-sm
                font-black
                text-[#173c2d]
                tracking-wide
              ">

                PawHaven Dashboard
              </span>
            </div>

            <h2 className="
              text-2xl
              lg:text-4xl

              font-black

              text-[#1E2E23]

              mt-4
            ">

              Welcome Back 👋
            </h2>
          </div>

          <button className="
            w-[58px]
            h-[58px]

            rounded-full

            bg-white/70

            backdrop-blur-xl

            border
            border-white/30

            flex
            items-center
            justify-center

            shadow-lg
          ">

            <Bell className="w-5 h-5 text-[#12372A]" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="
          p-4
          lg:p-10
        ">

          {children}

        </div>
      </main>
    </section>
  );
}