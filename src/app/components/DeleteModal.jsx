"use client";

import {
  Trash2,
  X,
} from "lucide-react";

export default function DeleteModal({

  openDelete,

  setOpenDelete,

  HandleDelete,

  petId,

}) {

  if(!openDelete){

    return null;
  }

  return (

    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.2)]">

        {/* TOP */}
        <div className="relative bg-[#FFF5F5] px-8 pt-10 pb-8 text-center">

          {/* CLOSE */}
          <button
            onClick={() =>
              setOpenDelete(false)
            }
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
          >

            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* ICON */}
          <div className="w-24 h-24 rounded-full bg-[#FFE5E5] flex items-center justify-center mx-auto shadow-lg">

            <Trash2 className="w-11 h-11 text-[#EF4444]" />
          </div>

          <h2 className="text-4xl font-black text-[#1E2E23] mt-7">

            Delete Pet?
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">

            This action cannot be undone.
            Your pet listing will be permanently removed.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-4 p-6 bg-white">

          {/* CANCEL */}
          <button
            onClick={() =>
              setOpenDelete(false)
            }
            className="h-[58px] rounded-[20px] bg-[#F8F5EE] hover:bg-[#ece7dd] text-[#1E2E23] font-black transition-all duration-300"
          >

            Cancel
          </button>

          {/* DELETE */}
          <button
            onClick={() => {

              HandleDelete(petId);

              setOpenDelete(false);
            }}
            className="h-[58px] rounded-[20px] bg-[#EF4444] hover:bg-[#dc2626] text-white font-black transition-all duration-300 shadow-xl"
          >

            Delete
          </button>
        </div>
      </div>
    </div>
  );
}