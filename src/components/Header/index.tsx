import React from "react";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Header = ({ className, children, title }: HeaderProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl xl:text-4xl text-center font-[500] text-veryDarkBlue">
        {title}
      </h2>
      <p className="text-grayishBlue  text-center my-5 max-w-[400px] sm:max-w-[480px]">
        {children}
      </p>
    </div>
  );
};

export default Header;
