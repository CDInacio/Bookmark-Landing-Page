import React from "react";

import ExtensionItem from "./ExtensionItem";
import Container from "../Layout/Container";
import Header from "../Header";
import { EXTENSIONS } from "@/constants";

const Extensions = () => {
  return (
    <section className="mt-[200px]">
      <Container className="flex flex-col items-center">
        <Header title="Download the extension">
          We´ve got more browsers in the pipeline. Please do let us know if
          you´ve got a favourite you´d like us to prioritize.
        </Header>
        <div className="grid gap-[40px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]">
          {EXTENSIONS.map((extension) => (
            <ExtensionItem
              key={extension.id}
              image={extension.image}
              subtitle={extension.subtitle}
              title={extension.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Extensions;
