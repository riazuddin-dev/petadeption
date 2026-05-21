"use client";

import {
  X,
  CalendarDays,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  
  RequestData,
  UpdateStatus,
} from "@/lib/petsData/data";

const RequestsListModal = ({
  openRequest,
  setOpenRequest,
  pet,
}) => {

  const [
    requests,
    setRequests,
  ] = useState([]);

  // LOAD REQUESTS
  useEffect(() => {

    if (pet?._id) {

      RequestData(
        pet?._id
      )
      .then((data) => {

        setRequests(data);
      });
    }

  }, [pet]);

  // STATUS UPDATE
  const HandleStatus =
    async (id, status) => {

      const update =
        await UpdateStatus(
          id,
          status
        );

      if (update.modifiedCount) {

        const updated =
          requests.map((request) => {

            if (
              request._id === id
            ) {

              return {
                ...request,
                status,
              };
            }

            return request;
          });

        setRequests(updated);
      }
  };

  if (!openRequest) {

    return null;
  }

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      {/* MODAL */}
      <div className="w-full max-w-3xl bg-white rounded-[35px] overflow-hidden shadow-2xl">

        {/* TOP */}
        <div className="bg-[#12372A] px-7 py-6 flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[3px] text-[#F4A300] text-[10px] font-black">
              Requests
            </p>

            <h2 className="text-3xl font-black text-white mt-2">
              {pet?.petName}
            </h2>
          </div>

          {/* CLOSE */}
          <button
            onClick={() =>
              setOpenRequest(false)
            }
            className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center"
          >

            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-7 bg-[#f8f5ef] max-h-[75vh] overflow-y-auto space-y-5">

          {
            requests.length === 0 && (

              <div className="bg-white rounded-[25px] p-10 text-center shadow-lg">

                <h2 className="text-2xl font-black text-[#1E2E23]">
                  No Requests Yet 😄
                </h2>

                <p className="text-gray-500 mt-3">
                  Nobody requested this pet yet.
                </p>
              </div>
            )
          }

          {
            requests.map((request) => (

              <div
                key={request._id}
                className="bg-white rounded-[30px] p-6 shadow-lg"
              >

                {/* TOP */}
                <div className="flex items-center justify-between flex-wrap gap-5">

                  <div>

                    <h2 className="text-2xl font-black text-[#1E2E23]">
                      {request.Name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {request.email}
                    </p>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`
                      px-5 py-2 rounded-full text-xs font-black

                      ${
                        request.status === "Pending"
                          ? "bg-[#FFF6E5] text-[#F4A300]"
                          : request.status === "Approved"
                          ? "bg-[#EFFFF8] text-[#00A86B]"
                          : "bg-[#FFF1F1] text-[#EF4444]"
                      }
                    `}
                  >

                    {request.status}
                  </span>
                </div>

                {/* DATE */}
                <div className="mt-6 bg-[#F8F5EE] rounded-[22px] p-5">

                  <div className="flex items-center gap-3">

                    <CalendarDays className="w-5 h-5 text-[#00A86B]" />

                    <p className="uppercase tracking-[2px] text-gray-400 text-[10px] font-black">
                      Pickup Date
                    </p>
                  </div>

                  <h3 className="text-[#1E2E23] font-black text-lg mt-3">
                    {request.date || "Not Selected"}
                  </h3>
                </div>

                {/* MESSAGE */}
                <div className="mt-5">

                  <p className="uppercase tracking-[2px] text-gray-400 text-[10px] font-black">
                    Message
                  </p>

                  <p className="text-[#1E2E23] mt-3 leading-relaxed">
                    {request.description || "No Message"}
                  </p>
                </div>

                {/* BUTTONS */}
                {
                  request.status ===
                  "Pending" && (

                    <div className="grid grid-cols-2 gap-4 mt-7">

                      {/* APPROVE */}
                      <button
                        onClick={() =>
                          HandleStatus(
                            request._id,
                            "Approved"
                          )
                        }
                        className="bg-[#00A86B] hover:bg-[#008f5a] text-white h-[55px] rounded-[20px] text-sm font-black transition-all duration-300 flex items-center justify-center gap-3"
                      >

                        <CheckCircle2 className="w-5 h-5" />

                        Approve
                      </button>

                      {/* REJECT */}
                      <button
                        onClick={() =>
                          HandleStatus(
                            request._id,
                            "Rejected"
                          )
                        }
                        className="bg-[#EF4444] hover:bg-[#dc2626] text-white h-[55px] rounded-[20px] text-sm font-black transition-all duration-300 flex items-center justify-center gap-3"
                      >

                        <XCircle className="w-5 h-5" />

                        Reject
                      </button>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RequestsListModal;