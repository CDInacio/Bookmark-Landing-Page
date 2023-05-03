"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineError } from "react-icons/md";

const schema = yup
  .object({
    email: yup.string().email("Whoops, Make sure it´s an email.").required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col w-[310px] lg:w-[480px]  lg:flex-row lg:justify-between"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Enter your email address"
        className={`w-full lg:w-[310px] rounded-md z-20 py-[10px] pl-[20px]   ${
          errors?.email && "border-2 border-softRed"
        }  text-grayishBlue focus:outline-none`}
      />
      {errors?.email ? (
        <>
          <p className="absolute top-[48px] w-full lg:w-[310px]   z-10 italic text-sm bg-softRed p-[5px] pl-[10px] -mt-[5px] rounded-b-md">
            {errors?.email?.message}
          </p>
          <MdOutlineError
            className="absolute right-[15px]  lg:right-[185px] top-[10px] text-softRed z-30"
            size={25}
          />{" "}
        </>
      ) : null}
      <Button
        type="submit"
        intent="secondary"
        className={`w-full lg:w-[150px]  ${
          errors?.email ? "mt-[50px]" : "mt-[15px]"
        } lg:mt-0 `}
      >
        Contact Us
      </Button>
    </form>
  );
};

export default Form;
