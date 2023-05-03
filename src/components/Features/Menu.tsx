import React from "react";
import MenuItem from "./MenuItem";
import { FEATURES } from "@/constants";
import { IFeature } from "@/@types";

interface Props {
  onSetFeature: (feature: IFeature) => void;
  feature: IFeature;
}

const Menu = ({ feature, onSetFeature }: Props) => {
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-center  my-14 [&>*:nth-child(1)]:border-t-[1px] md:[&>*:nth-child(1)]:border-t-[0px]">
      {FEATURES.map((item, index) => (
        <MenuItem
          key={item.id}
          id={feature.id}
          item={item}
          onSetFeature={onSetFeature}
        />
      ))}
    </div>
  );
};

export default Menu;
