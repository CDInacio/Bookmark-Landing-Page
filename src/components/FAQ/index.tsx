import React from "react";

import Questions from "./Questions";
import Container from "../Layout/Container";
import Header from "../Header";

const Faq = () => {
  return (
    <section className="flex flex-col items-center mt-[200px]">
      <Container>
        <Header title="Frequently Asked Questions">
          Here are some of our FAQs. If you have any other questions you´d like
          answered please feel free to email us.
        </Header>
        <Questions />
      </Container>
    </section>
  );
};

export default Faq;
