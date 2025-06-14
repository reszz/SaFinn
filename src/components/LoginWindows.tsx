import Link from "next/link";

export default function LoginWindows() {
  const form = [
    { text: "Email", type: "email" },
    { text: "Password", type: "password" },
  ];
  return (
    <div className="flex items-center p-5 md:p-0 justify-center h-full md:w-full">
      <div className="w-full md:w-1/2 flex flex-col gap-y-2">
        <div className="flex flex-col items-center">
          <img src="/logo.png" />
        </div>
        <div className="flex flex-col gap-y-4 mx-auto w-full mt-10 text-black">
          {form.map(({ text, type }) => (
            <input
              key={text}
              className="bg-white px-4 h-14 rounded-2xl"
              type={type}
              placeholder={text}
            />
          ))}
          <div className="flex justify-between items-center">
            <div className="text-white">
              <input type="checkbox" className="" />
              Remember me
            </div>
            <div className="text-emerald-700">
              <a href="#" className="">
                Forgot Password
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-full mt-20 text-white">
          <div className="">
            Don't have an account?
            <Link href="/" className="text-green-500 ml-2">
              Register
            </Link>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="w-full text-center place-content-center items-center h-16 bg-emerald-500 mt-2 rounded-2xl text-2xl">
          Login
        </Link>
      </div>
    </div>
  );
}
