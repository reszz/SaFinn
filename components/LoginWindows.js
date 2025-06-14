import Link from "next/link";

export default function LoginWindows() {
  const form = [
    { text: "Email", type: "email" },
    { text: "Password", type: "password" },
  ];
  return (
    <div className="flex items-center w-full">
      <div className="w-8/12">
        <div className="flex flex-col items-center">
          <img src="/logo.png" />
        </div>
        <div className="flex flex-col mx-auto w-5/12  mt-10 text-black">
          {form.map(({ text, type }) => (
            <input
              key={text}
              className="bg-white px-4 mt-4 h-14 rounded-2xl"
              type={type}
              placeholder={text}
            />
          ))}
          <div className="flex justify-between items-center">
            <div className=" text-white">
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
        <div className="flex flex-col mx-auto w-5/12 mt-20">
          <div className="">
            Don't have an account?
            <Link href="/" className="text-green-500 ml-2">
              Register
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="w-full text-center place-content-center items-center h-16 bg-emerald-500 mt-2 rounded-2xl text-2xl">
            Login
          </Link>
        </div>
      </div>
      <div className="bg-emerald-500 w-4/12 min-h-screen rounded-4xl">
        <div className="w-50 h-50 bg-emerald-600 rounded-full ml-10 mt-5"></div>
      </div>
    </div>
  );
}
