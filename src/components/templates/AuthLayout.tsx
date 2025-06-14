import React, { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthProps) => {
  return (
    <div className="h-screen w-full p-5 flex justify-center bg-[#282828] text-white">
      <div className="flex justify-between w-full bg-black rounded-4xl">
        <div className="flex-1">{children}</div>

        <div className="bg-emerald-500 w-4/12 h-full rounded-4xl hidden md:block">
          <div className="w-50 h-50 bg-emerald-600 rounded-full ml-10 mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
