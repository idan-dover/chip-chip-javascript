import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-3 py-5">
        <h1 className="px-3 py-3 font-serif text-2xl text-amber-500 dark:text-amber-300">
          Hello, my name is Idan Dover
        </h1>
        <p className="px-3 py-3 font-serif text-lg text-gray-800 dark:text-gray-50">
          I am a junior full stack developer and I hope you like my small coupon
          project
        </p>
        <p className="px-3 py-3 font-serif text-lg text-amber-500 dark:text-amber-300">
          This project is built with java spring in the backend. and react.JS in
          the frontend
        </p>
        <p className="px-3 py-3 font-serif text-lg text-gray-800 dark:text-gray-50">
          I have learned in John Bryce and my skills are:
        </p>
        <ul>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            java
          </li>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            spring framework
          </li>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            react
          </li>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            javascript
          </li>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            typescript
          </li>
          <li className="font-serif text-lg text-lime-500 dark:text-lime-300">
            SQL databases
          </li>
        </ul>
        <div className="flex items-center justify-center py-3 m-3 space-x-3">
          <Link
            className="flex items-center justify-center space-x-2 text-blue-600 underline dark:text-blue-400"
            to="/home"
          >
            <FaArrowRight />
            <span>back to home page</span>
          </Link>
          <Link
            className="flex items-center justify-center space-x-2 text-blue-600 underline dark:text-blue-400"
            target="_blank"
            to="https://github.com/IdanDover"
          >
            <FaGithub />
            <span>To my github</span>
          </Link>
          <Link
            className="flex items-center justify-center space-x-2 text-blue-600 underline dark:text-blue-400"
            target="_blank"
            to="https://www.linkedin.com/in/idan-dover/"
          >
            <FaLinkedin />
            <span>to my linkedInn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
