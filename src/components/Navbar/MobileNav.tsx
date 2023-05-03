import { LINKS } from "@/constants";
import { IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

import React from "react";
import Button from "../ui/Button";

const MobileNav = () => {
  const iconStyle =
    "text-white mx-[15px] hover:text-softRed duration-300 cursor-pointer";
  return (
    <div className="w-screen flex flex-col justify-between h-screen  px-6 bg-[rgba(36,41,69,0.9)] absolute z-[100] ">
      <div>
        <ul className="text-white  flex flex-col items-center mt-[130px] [&>*:nth-child(1)]:border-t-[1px]">
          {LINKS.map((link) => (
            <li className="border-b-[1px] border-neutral-500 w-full text-center py-5 cursor-pointer hover:text-softRed duration-300">
              {link.text}
            </li>
          ))}
        </ul>
        <Button className=" mt-[20px] w-full bg-transparent border-2 border-white text-white">
          LOGIN
        </Button>
      </div>
      <div className="flex justify-center mb-[60px]">
        <IoLogoTwitter size={30} className={iconStyle} />
        <IoLogoFacebook size={30} className={iconStyle} />
      </div>
    </div>
  );
};

export default MobileNav;
