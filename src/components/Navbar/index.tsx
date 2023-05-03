"use client";

import React, { useEffect, useState } from "react";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

import Button from "@ui/Button";
import Container from "../Layout/Container";
import { LINKS } from "@/constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // dont show the scroll bar when the modal is open
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "unset";
  }, [mobileMenu]);

  return (
    <>
      {mobileMenu && <MobileNav />}
      <Container className="h-[150px]">
        <nav className=" h-full flex items-center justify-between">
          <Image
            src={
              !mobileMenu
                ? "/images/logo-bookmark-nav.svg"
                : "/images/logo-bookmark-nav-mobile.svg"
            }
            height={25}
            width={148}
            alt="bookmark logo "
            className={mobileMenu ? "z-[120]" : ""}
          />
          <span className="z-[120] flex lg:hidden">
            {!mobileMenu ? (
              <IoMenuOutline
                onClick={() => setMobileMenu((prev) => !prev)}
                size={30}
                className="cursor-pointer"
              />
            ) : (
              <IoCloseOutline
                onClick={() => setMobileMenu((prev) => !prev)}
                size={30}
                className=" cursor-pointer  text-white"
              />
            )}
          </span>
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
    </>
  );
};

export default Navbar;
