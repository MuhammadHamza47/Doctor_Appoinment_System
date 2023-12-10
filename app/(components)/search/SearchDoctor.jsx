import React from "react";

const SearchDoctor = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1240px] h-40 relative">
        <div className="w-[1240px] h-48 left-0 top-0 absolute bg-white rounded-2xl" />
        <div className="left-[40px] top-[16px] absolute text-center text-black text-4xl font-bold font-['DM Sans'] capitalize leading-[46px]">
          find a doctor
        </div>
        <div className="w-[296px] h-[66px] left-[38px] top-[88px] absolute">
          <div className="w-[296px] h-[66px] left-0 top-0 absolute bg-white rounded-lg border border-cyan-700" />
          <div className="left-[20px] top-[10px] absolute text-neutral-600 text-xl font-normal font-['DM Sans'] capitalize leading-[46px]">
            name
          </div>
        </div>
        <div className="w-[296px] h-[66px] left-[358px] top-[88px] absolute">
          <div className="w-[296px] h-[66px] left-0 top-0 absolute bg-white rounded-lg border border-cyan-700" />
          <input type="text" placeholder="30" />
        </div>
        <div className="w-[201px] h-[66px] left-[1001px] top-[88px] absolute">
          <div className="w-[201px] h-[66px] left-0 top-0 absolute bg-cyan-700 rounded-full" />
          <div className="left-[61px] top-[10px] absolute text-white text-2xl font-medium font-['DM Sans'] capitalize leading-[46px]">
            search
          </div>
        </div>
        <div className="w-[63px] h-8 left-[839px] top-[105px] absolute">
          <div className="w-[63px] h-8 left-0 top-0 absolute bg-white rounded-[23px] border border-cyan-700" />
          <div className="w-[26px] h-[26px] left-[33px] top-[3px] absolute bg-cyan-700 rounded-full" />
        </div>
        <div className="left-[733px] top-[98px] absolute text-black text-xl font-normal font-['DM Sans'] capitalize leading-[46px]">
          available
        </div>
      </div>
    </div>
  );
};

export default SearchDoctor;
