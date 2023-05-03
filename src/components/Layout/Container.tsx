import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` px-6 lg:px-[130px] max-w-[1440px] mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
