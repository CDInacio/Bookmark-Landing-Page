import React from "react";

import Image from "next/image";

import Button from "@ui/Button";
import Container from "../Layout/Container";

const Hero = () => {
  return (
    <Container className="mt-[50px]">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start ">
        <div className="mt-[80px]">
          <h1 className="text-3xl xl:text-5xl text-center lg:text-start   font-[500] text-veryDarkBlue">
            A Simple Bookmark Manager
          </h1>
          <p className="text-grayishBlue  text-center xl:text-start mt-[30px] max-w-[450px]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try ir for
            free.
          </p>
          <div className="mt-[30px] flex  justify-center lg:justify-start ">
            <Button intent="primary" className="mr-[20px] px-[13px] text-sm">
              Get it on Chrome
            </Button>
            <Button intent="terciary" className=" px-[13px] text-sm">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/illustration-hero.svg"
            height={466}
            width={657}
            alt="illustration hero"
            className=""
          />
          <span className="-z-10 absolute bottom-0 right-0 w-[300px] xl:w-[400px] h-[200px] rounded-l-[200px]  bg-softBlue rounded-r-[30px]" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
