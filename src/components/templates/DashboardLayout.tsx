import React, { ReactNode } from "react";
import logoHalf from "../../../public/logo-half.svg";
import Image from "next/image";

interface DashboardProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="bg-[#171717] h-screen p-10">
      <div className="flex flex-col items-center bg-[#282828] h-[95%] w-30 p-4 rounded-2xl gap-y-2 mt-6">
        <div className="pt-10">
          <Image priority src={logoHalf} alt="logo" />
        </div>
        <div className="bg-gray-400 w-10 h-10 rounded-4xl mt-20"></div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
