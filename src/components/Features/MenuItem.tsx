import { IFeature } from "@/@types";
import React from "react";

interface Props {
  item: IFeature;
  id: string;
  onSetFeature: (feature: IFeature) => void;
}

const MenuItem = ({ item, id, onSetFeature }: Props) => {
  return (
    <div
      key={item.id}
      className={` border-b-[1px]  md:border-t-0 border-slate-200 w-full md:w-fit text-center `}
    >
      <p
        onClick={() => onSetFeature(item)}
        className={`${
          id === item.id
            ? "text-veryDarkBlue border-softRed border-b-4"
            : "text-neutral-500 border-b-4 border-white"
        } w-fit mx-auto  hover:text-veryDarkBlue hover:border-b-4 md:mx-10
       hover:border-softRed duration-300 text-center py-3 cursor-pointer`}
      >
        {item.featureItem}
      </p>
    </div>
  );
};

export default MenuItem;
