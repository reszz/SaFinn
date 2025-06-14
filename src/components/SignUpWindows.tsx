import Link from "next/link";

export default function SignUpWindows() {
  const form = [
    { text: "Email", type: "email" },
    { text: "Name", type: "name" },
    { text: "Password", type: "password" },
    { text: "Confirm Password", type: "password" },
  ];
  return (
    <div className="flex items-center p-5 md:p-0 justify-center h-full w-full">
      <div className="w-full md:w-1/2 flex flex-col gap-y-10">
        <div className="flex flex-col items-center">
          <img src="/logo.png" />
        </div>
        <div className="flex flex-col gap-y-6 mx-auto w-full mt-10 text-black">
          {form.map(({ text, type }) => (
            <input
              key={text}
              className="bg-white px-4 h-14 rounded-2xl"
              type={type}
              placeholder={text}
            />
          ))}
          <div className="flex justify-between items-center">
            <div className="text-emerald-700 flex gap-x-2">
              <div className="text-white">Have an account?</div>
              <a href="#" className="">
                Login
              </a>
            </div>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="w-full text-center place-content-center items-center h-16 bg-emerald-500 mt-2 rounded-2xl text-2xl">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
