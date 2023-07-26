import page404Png from "../assets/page404.png";
import { FaArrowRight } from "react-icons/fa6";
import LinkButton from "../components/LinkButton";

function Page404() {
  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-3 py-5">
        <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
          Seems like you got lost
        </h1>
        <img
          src={page404Png}
          alt="empty-view"
          className="max-w-50vw h-auto max-h-[70vh]"
        />
        <LinkButton to="/home">
          <FaArrowRight />
          <span>back to home page</span>
        </LinkButton>
      </div>
    </div>
  );
}

export default Page404;
