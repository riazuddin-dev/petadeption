export default function Loading() {

  return (

    <section className="min-h-screen bg-[#F6F1E8] flex items-center justify-center overflow-hidden relative">

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* LOADER */}
      <div className="relative z-10 flex flex-col items-center">

        {/* SPINNER */}
        <div className="relative w-28 h-28">

          <div className="absolute inset-0 rounded-full border-[10px] border-[#12372A]/10"></div>

          <div className="absolute inset-0 rounded-full border-[10px] border-[#F4A300] border-t-transparent animate-spin"></div>

          <div className="absolute inset-5 rounded-full bg-[#12372A] flex items-center justify-center">

            <span className="text-3xl">
              🐾
            </span>
          </div>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-black text-[#12372A] mt-10">
          Loading...
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Fetching adorable pets 😄
        </p>
      </div>
    </section>
  );
}