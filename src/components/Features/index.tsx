"use client";

import React from "react";

import Container from "../Layout/Container";
import Menu from "./Menu";
import FeatureImage from "../FeatureImage";
import Button from "../ui/Button";
import Header from "../Header";
import { FEATURES } from "@/constants";
import { IFeature } from "@/@types";

const Features = () => {
  const [feature, setFeature] = React.useState<IFeature>(FEATURES[0]);

  const handleSetFeature = (feature: IFeature) => {
    setFeature(feature);
  };

  return (
    <section className="flex flex-col items-center mt-[200px] ">
      <Container className="flex flex-col items-center">
        <Header title="Features">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Header>
        <Menu onSetFeature={handleSetFeature} feature={feature} />
        <div className="relative flex flex-col lg:flex-row">
          <FeatureImage featureId={feature.id} sx="lg:mr-[150px]" />
          <span
            className="bg-softBlue h-[200px] w-[700px]  min-[600px]:h-[300px] rounded-r-[200px] rounded-l-[30px] 
          -z-10 absolute left-[-400px] sm:left-[-270px] top-[60px] min-[400px]:top-[80px] min-[450px]:top-[100px] sm:top-[110px] lg:bottom-[-40px]"
          />
          <div className="mt-[90px]  flex flex-col items-center lg:items-start">
            <h2 className="text-veryDarkBlue  text-2xl lg:text-4xl font-medium">
              {feature.title}
            </h2>
            <p className="text-grayishBlue text-center xl:text-start max-w-[400px] mt-5">
              {feature.text}
            </p>
            <Button intent="primary" className="mt-[30px] hidden lg:flex">
              More Info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
