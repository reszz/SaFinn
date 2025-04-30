import Image from "next/image";

export default function Home() {
  const form = [
    {text: "Email", type: "email"},
    {text: "Name", type: "name"},
    {text: "Password", type: "password"},
    {text: "Confirm Password", type: "password"},

  ];
  return (
    <div className="bg-gray-900 min-h-screen ">
      <div className="flex items-center rounded">
        <div className="w-8/12">
          <div className="flex flex-col items-center">
            <div className=""><img src="/logo.png"/></div>
            <div className="flex flex-col w-5/12  mt-10 text-black">
              {form.map(({text, type}) => (
                <input key={text} className="bg-white px-4 mt-4 h-14 rounded-2xl" type={type} placeholder={text} />
              ))}
            </div>
            <div className="mt-4">Have an account? <a href="#" className="text-green-500 ml-2">Login</a></div>
            <div className="w-5/12 text-center place-content-center items-center h-16 bg-emerald-500 mt-12 rounded-2xl text-2xl">Register</div>
          </div>
        </div>
        <div className="bg-emerald-500 w-4/12 min-h-screen rounded-4xl"></div>
      </div>
    </div>
  );
}
