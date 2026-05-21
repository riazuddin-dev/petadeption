"use client";

import { Quote, Star, PawPrint } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Olivia & Charlie",
    role: "Happy Adoption Family",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=900&auto=format&fit=crop",
    smallImage:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=900&auto=format&fit=crop",
    title: "A Small Paw Changed Their Whole Life",
    review:
      "When Olivia adopted Charlie, he was shy and scared. Today, Charlie fills their home with happiness, love, and beautiful memories every single day.",
  },

  {
    id: 2,
    name: "Daniel & Bella",
    role: "Forever Best Friends",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop",
    smallImage:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=900&auto=format&fit=crop",
    title: "From Shelter to a Loving Home",
    review:
      "Bella waited months for someone to choose her. Daniel gave her a forever home, and now Bella never stops wagging her tail with joy.",
  },

  {
    id: 3,
    name: "Emma & Rocky",
    role: "Pet Lover Family",
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=900&auto=format&fit=crop",
    smallImage:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=900&auto=format&fit=crop",
    title: "Every Rescue Deserves Love",
    review:
      "Rocky was rescued with care and kindness. Emma’s family gave him comfort, safety, and a warm place to finally call home.",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-story"
      className="relative bg-[#F4EFE6] py-32 overflow-hidden"
    >
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="white"
          />
        </svg>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="white"
          />
        </svg>
      </div>

      {/* PAW BACKGROUND */}
      <img
        src="/image(116).png"
        alt="paw"
        className="absolute top-20 left-10 w-24 opacity-[0.05]"
      />

      <img
        src="/image(116).png"
        alt="paw"
        className="absolute bottom-20 right-10 w-28 opacity-[0.05]"
      />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg mb-6">
            <PawPrint className="w-5 h-5 text-[#00A86B]" />

            <span className="text-[#00A86B] font-semibold">
              Success Stories
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#173c2d] leading-tight">
            Happy Tails &
            <br />
            <span className="relative inline-block text-[#00A86B]">
              Forever Homes
              {/* UNDERLINE */}
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 300 30"
                fill="none"
              >
                <path
                  d="M5 20C80 5 160 5 295 20"
                  stroke="#ff6b81"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto">
            Beautiful adoption stories filled with love, happiness, and second
            chances.
          </p>
        </div>

        {/* STORIES */}
        <div className="space-y-32">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div
                className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                {/* MAIN IMAGE */}
                <div className="overflow-hidden rounded-[40px] shadow-2xl">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-[620px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* SMALL FLOATING IMAGE */}
                <div className="absolute -top-8 -right-8 overflow-hidden rounded-[30px] border-[6px] border-white shadow-2xl">
                  <img
                    src={story.smallImage}
                    alt="pet"
                    className="w-[180px] h-[180px] object-cover"
                  />
                </div>

                {/* FLOATING CARD */}
                <div className="absolute -bottom-10 left-10 bg-white p-6 rounded-[30px] shadow-2xl max-w-[320px]">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center">
                      <Quote className="w-8 h-8 text-[#00A86B]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#111111]">
                        Best Decision
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        “Love changed everything.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <p className="uppercase tracking-[5px] text-sm text-[#111111] mb-6 font-medium">
                  Adoption Journey
                </p>

                <h2 className="text-5xl md:text-6xl font-black leading-[1.05] text-[#173c2d]">
                  {story.title}
                </h2>

                <div className="mt-10">
                  <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                    {story.review}
                  </p>
                </div>

                {/* STARS */}
                <div className="flex items-center gap-2 mt-10">
                  <Star className="w-6 h-6 fill-[#F4A300] text-[#F4A300]" />
                  <Star className="w-6 h-6 fill-[#F4A300] text-[#F4A300]" />
                  <Star className="w-6 h-6 fill-[#F4A300] text-[#F4A300]" />
                  <Star className="w-6 h-6 fill-[#F4A300] text-[#F4A300]" />
                  <Star className="w-6 h-6 fill-[#F4A300] text-[#F4A300]" />
                </div>

                {/* USER */}
                <div className="mt-6">
                  <h3 className="text-3xl font-bold text-[#111111]">
                    {story.name}
                  </h3>

                  <p className="text-[#00A86B] text-lg mt-1">{story.role} ❤️</p>
                </div>

                {/* BUTTON */}
                <button className="mt-10 bg-[#b8b394] hover:bg-[#a9a37f] transition px-8 py-4 rounded-2xl text-[#173c2d] font-bold shadow-xl hover:scale-105 duration-300">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
