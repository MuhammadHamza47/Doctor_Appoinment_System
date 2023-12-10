import Image from "next/image";
import React from "react";
import headerMen from "../../../public/Assets/headerMen.png";

import Button from "../button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex h-[82vh] items-center justify-center">
      <div>
        <div className="w-[657px]">
          <span
            style={{
              color: "#676767",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            Providing Quality
          </span>
          <span
            style={{
              color: "#00ACC1",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            Healthcare
          </span>
          <span
            style={{
              color: "#676767",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            for a
          </span>
          <span
            style={{
              color: "#8BC34A",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            Brighter
          </span>
          <span
            style={{
              color: "#676767",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            and
          </span>
          <span
            style={{
              color: "#8BC34A",
              fontSize: "40px",
              fontWeight: "samibold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            Healthy
          </span>
          <span
            style={{
              color: "#676767",
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Lato",
              textTransform: "capitalize",
            }}
          >
            Future
          </span>
        </div>
        <div className="w-[587px] my-8 text-black text-opacity-70 text-xl font-normal font-['Lato'] capitalize tracking-wide">
          At our hospital, we are dedicated to providing exceptional medical
          care to our patients and their families. Our experienced team of
          medical professionals, cutting-edge technology, and compassionate
          approach make us a leader in the healthcare industry
        </div>
        <Link href={"/doctors"}>
          <Button size="35" title="Appoinment" />
        </Link>
      </div>
      <div>
        <Image src={headerMen} width={420} height={600} alt="" />
      </div>
    </div>
  );
};

export default Header;
