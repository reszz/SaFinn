import Image from "next/image";
import logoHalf from "../../../public/logo-half.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-900 w-30 min-h-200 m-10 rounded-2xl ">
      <div className="pt-10">
        <Image priority src={logoHalf} alt="logo" />
      </div>
      <div className="bg-gray-400 w-10 h-10 rounded-4xl my-auto"></div>
    </div>
  );
}
