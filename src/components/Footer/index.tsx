import Image from "next/image";

import { LINKS } from "@/constants";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import Container from "../Layout/Container";

const Footer = () => {
  const iconStyle =
    "text-white mx-[15px] hover:text-softRed duration-300 cursor-pointer";
  return (
    <footer className=" bg-veryDarkBlue py-[40px] ">
      <Container className="flex flex-col lg:flex-row lg:justify-between items-center ">
        <div className="flex flex-col lg:flex-row lg:items-center ">
          <Image
            src="/images/logo-bookmark-footer.svg"
            width={148}
            height={25}
            alt="bookmark logo "
            className="mb-[20px] lg:mb-0 lg:mr-[20px]"
          />
          <ul className="text-center flex flex-col lg:flex-row">
            {LINKS.map((link) => (
              <li
                key={link.id}
                className="py-[10px] lg:mx-[30px] text-neutral-300 cursor-pointer hover:text-softRed duration-300"
              >
                {link.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[20px] lg:mt-0 flex">
          <IoLogoFacebook size={25} className={iconStyle} />
          <IoLogoTwitter size={25} className={iconStyle} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
