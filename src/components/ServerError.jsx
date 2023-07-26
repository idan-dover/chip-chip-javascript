import { FaArrowRight } from "react-icons/fa6";
import serverError from "../assets/server-error.png";
import LinkButton from "./LinkButton";

function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-5 mx-2 my-3">
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Sorry, but it seems we have a problem with our server
      </h1>
      <img
        src={serverError}
        alt="empty-view"
        className="max-w-50vw h-auto max-h-[30vh]"
      />
      <LinkButton to="/home">
        <FaArrowRight />
        <span>back home</span>
      </LinkButton>
    </div>
  );
}

export default ServerError;
