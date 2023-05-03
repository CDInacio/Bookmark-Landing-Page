import React from "react";
import Container from "../Layout/Container";
import Form from "../Footer/Form";

const ContactUs = () => {
  return (
    <section className="w-screen bg-softBlue mt-[200px] py-[55px]">
      <Container>
        <div className="flex flex-col text-white items-center">
          <p className="text-sm tracking-widest mb-[10px]">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="font-medium text-2xl lg:text-4xl text-center mb-[30px] max-w-[310px] lg:max-w-[480px] ">
            Stay up-to-date with what we´re doing
          </h2>
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
