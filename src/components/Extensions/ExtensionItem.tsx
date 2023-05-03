import React from "react";

import Button from "@ui/Button";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

const ExtensionItem = ({ title, subtitle, image }: Props) => {
  return (
    <div
      className={`max-w-[280px] mx-auto shadow-md rounded-xl flex flex-col
       justify-center items-center py-[30px]`}
    >
      <Image src={image} width={102} height={100} alt="chrome logo" />
      <h3 className="text-lg font-medium text-veryDarkBlue mt-[20px]">
        {title}
      </h3>
      <p className="text-grayishBlue text-sm mb-[30px]">{subtitle}</p>
      <Image
        src="/images/bg-dots.svg"
        width={280}
        height={4}
        alt="bunch of dots"
      />
      <Button intent="primary" className="mt-[30px]">
        Add & Install Extension
      </Button>
    </div>
  );
};

export default ExtensionItem;
