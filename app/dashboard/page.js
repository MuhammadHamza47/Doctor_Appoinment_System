import React from "react";
import DoctorForm from "../(components)/form/Form";

const page = () => {
  return (
    <div >
      <div className="text-green-800 flex justify-center items-center my-7 text-[58px] font-extrabold font-['Montserrat'] leading-[80px] tracking-tight">
        Add your Information
      </div>
     
      <DoctorForm  />
    

    </div>
  );
};

export default page;
