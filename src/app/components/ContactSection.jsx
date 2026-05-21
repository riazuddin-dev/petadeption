"use client";

import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
     className="relative bg-white py-32 overflow-hidden">
      
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="#F4EFE6"
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
            fill="#F4EFE6"
          />
        </svg>
      </div>

      {/* SECTION */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        <div className="relative bg-[#F4EFE6] rounded-[45px] border-[3px] border-black overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
          
          {/* BACKGROUND PAWS */}
          <img
            src="/image(116).png"
            alt="paw"
            className="absolute top-10 left-10 w-20 opacity-[0.05]"
          />

          <img
            src="/image(116).png"
            alt="paw"
            className="absolute bottom-10 right-10 w-24 opacity-[0.05]"
          />

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-16">
            
            {/* LEFT IMAGE */}
            <div className="relative">
              
              <div className="overflow-hidden rounded-[35px] shadow-2xl border-[4px] border-white">
                
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                  alt="pet"
                  className="w-full h-[620px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 left-10 bg-white px-6 py-4 rounded-[25px] shadow-2xl">
                
                <h3 className="text-[#173c2d] text-xl font-bold">
                  Loving Care ❤️
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Happy pets, happy families
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              
              {/* SCRATCH DESIGN */}
              <div className="absolute top-0 right-0 opacity-20">
                
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
                  alt="scratch"
                  className="w-28 rotate-12"
                />
              </div>

              {/* TITLE */}
              <p className="uppercase tracking-[5px] text-[#00A86B] font-semibold mb-4">
                Contact Us
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-[#173c2d] leading-tight">
                Make Your
                <br />

                Pet’s Appointment
              </h2>

              <p className="text-gray-600 text-lg mt-6 max-w-xl">
                Book an appointment for your lovely pets and
                give them the best grooming and caring service.
              </p>

              {/* FORM */}
              <form className="mt-12 space-y-5">
                
                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">
                  
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition"
                  />

                  <input
                    type="text"
                    placeholder="Pet Name"
                    className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition"
                  />
                </div>

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">
                  
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition"
                  />
                </div>

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">
                  
                  <input
                    type="text"
                    placeholder="Appointment Time"
                    className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition"
                  />

                  <select className="bg-white border-2 border-black/10 rounded-2xl px-5 h-[60px] outline-none focus:border-[#00A86B] transition text-gray-500">
                    
                    <option>Select Service</option>
                    <option>Pet Grooming</option>
                    <option>Pet Care</option>
                    <option>Adoption Help</option>
                    <option>Health Check</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea
                  placeholder="Write Your Message..."
                  rows={6}
                  className="w-full bg-white border-2 border-black/10 rounded-[30px] p-5 outline-none focus:border-[#00A86B] transition resize-none"
                ></textarea>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-3">
                  
                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group bg-[#b0007a] hover:bg-[#980068] transition px-8 py-4 rounded-full text-white font-bold shadow-xl flex items-center gap-4 w-fit"
                  >
                    Get In Touch

                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      
                      <Send className="w-4 h-4 text-[#b0007a] group-hover:rotate-45 transition duration-300" />
                    </div>
                  </button>

                  {/* CHECKBOX */}
                  <label className="flex items-center gap-3 text-[#173c2d] font-medium cursor-pointer">
                    
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#00A86B]"
                    />

                    I Agree With The Privacy Policy
                  </label>
                </div>
              </form>

              {/* SIDE CATS */}
              <div className="hidden xl:block absolute top-24 -right-28 space-y-6">
                
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2138/2138440.png"
                  alt="cat"
                  className="w-32"
                />

                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
                  alt="cat"
                  className="w-28"
                />

                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="cat"
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}