import Logo from "../components/Logo";
import loginPng from "../assets/loginPng.png";
import { Outlet } from "react-router-dom";

function Register() {
  return (
    <div className="grid w-screen h-screen grid-cols-3 overflow-y-scroll dark:bg-gray-800">
      <div className="col-span-1 py-8 mx-3 bg-lime-300 dark:bg-lime-600">
        <div className="flex items-center mb-10 space-x-3 border-b-2 border-amber-300 ">
          <Logo onlyLogo={true} />
          <h1 className="px-3 py-2 font-serif text-5xl font-bold text-transparent md:px-8 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text">
            Register
          </h1>
        </div>
        <Outlet />
      </div>
      <div className="col-span-2 px-3 py-4">
        <h1 className="px-3 py-2 mb-8 font-serif text-5xl font-bold uppercase md:px-8 text-lime-500 dark:text-lime-300 bg-clip-text">
          Happy to see you joining in
        </h1>
        <h2 className="px-3 py-2 mb-8 font-serif text-2xl font-bold uppercase md:px-8 text-lime-500 dark:text-lime-300 bg-clip-text">
          Which chick are you?
        </h2>
        <img
          src={loginPng}
          alt="chicks"
          className="h-auto max-h-[70vh] max-w-50vw"
        />
      </div>
    </div>
  );
}

export default Register;
