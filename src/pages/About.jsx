import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import LinkButton from "../components/LinkButton";
import StackList from "../components/StackList";
import Title from "../components/Title";

function About() {
  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-3 py-5">
        <Title>Hello, my name is Idan Dover</Title>
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
        <StackList />
        <div className="flex items-center justify-center py-3 m-3 space-x-3">
          <LinkButton to="/home">
            <FaArrowRight />
            <span>back to home page</span>
          </LinkButton>
          <LinkButton target="_blank" to="https://github.com/IdanDover">
            <FaGithub />
            <span>To my github</span>
          </LinkButton>
          <LinkButton
            target="_blank"
            to="https://www.linkedin.com/in/idan-dover/"
          >
            <FaLinkedin />
            <span>to my linkedInn</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default About;
