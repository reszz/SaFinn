import Image from "next/image";
import logoHalf from "../public/logo-half.svg";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10">
        <Image priority src={logoHalf} alt="logo" />
      </div>
      <div className="bg-gray-400 w-10 h-10 rounded-4xl"></div>
    </div>
  );
}
