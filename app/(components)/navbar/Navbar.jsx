import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 ">
      <div className="text-center cursor-pointer">
        <Image src="/Assets/logo.png" width={250} height={100} alt="" />
      </div>
      <div className=" justify-start items-start  gap-[26px] inline-flex">
        <Link href={"/"} className="text-center cursor-pointer hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          Home
        </Link>
        <Link href={"/doctors"} className="text-center cursor-pointer text-black hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          Doctors
        </Link>
        <Link href={"/appoinments"} className="text-center cursor-pointer text-black hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          Appoinments
        </Link>
        <Link href={"/dashboard"} className="text-center cursor-pointer text-black hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          Dashboard
        </Link>
        
        <Link href={"/services"} className="text-center cursor-pointer text-black hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          services
        </Link>
        <Link href={"/contact"} className="text-center cursor-pointer text-black hover:text-cyan-500 text-xl font-normal font-['Lexend Tera'] capitalize">
          contact us
        </Link>
        
      </div>
      <Button size="20"  title="Login" />
    </div>
  );
};

export default Navbar;
