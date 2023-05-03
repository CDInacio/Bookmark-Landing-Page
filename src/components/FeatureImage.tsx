import React from "react";

import Image from "next/image";

interface Props {
  featureId: string;
  sx?: string;
}

const FeatureImage = ({ featureId, sx }: Props) => {
  switch (featureId) {
    case "f2":
      return (
        <div className="">
          <Image
            src="/images/illustration-features-tab-2.svg"
            height={416}
            width={478}
            alt="speddy searching icon"
            className={sx}
          />
        </div>
      );
    case "f3":
      return (
        <Image
          src="/images/illustration-features-tab-3.svg"
          height={380}
          width={440}
          alt="easy charing icon"
          className={sx}
        />
      );
    default:
      return (
        <Image
          src="/images/illustration-features-tab-1.svg"
          height={346}
          width={536}
          alt="simple bookmarking icon"
          className={sx}
        />
      );
  }
};

export default FeatureImage;
