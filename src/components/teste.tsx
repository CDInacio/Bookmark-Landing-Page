import Image from "next/image";
import React from "react";

const Teste = () => {
  return (
    <div className="flex">
      <div className="text-white">asdasdad</div>
      <div className="relative">
        <Image
          src="/images/illustration-features-tab-1.svg"
          width={536}
          height={346}
          alt=""
          className="z-50"
        />
        <span className="w-[900px] h-[100px] bg-black absolute top-0 -z-10" />
      </div>
    </div>
  );
};

export default Teste;
