import Link from "next/link";
import LoginWindows from "@/components/LoginWindows";

export default function Home() {
  return (
    <div className="flex items-center bg-gray-900 min-h-screen">
      <LoginWindows />
    </div>
  );
}
