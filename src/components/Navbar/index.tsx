import React from "react";

import Image from "next/image";

import Button from "@ui/Button";
import Container from "../Layout/Container";
import { LINKS } from "@/constants";

const Navbar = () => {
  return (
    <Container className="h-[150px]">
      <nav className=" h-full flex items-center justify-between">
        <Image
          src="/images/logo-bookmark-nav.svg"
          height={25}
          width={148}
          alt="bookmark logo "
        />
        <Image
          className="lg:hidden"
          src="/images/icon-hamburger.svg"
          height={15}
          width={18}
          alt="icon hamburger "
        />
        <div className="hidden lg:flex items-center">
          <ul className="flex">
            {LINKS.map((link) => (
              <li
                key={link.id}
                className="mx-[30px] text-neutral-700 hover:text-softRed duration-300 cursor-pointer"
              >
                {link.text}
              </li>
            ))}
          </ul>
          <Button intent="secondary" className="ml-[30px]">
            LOGIN
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
