import { Link } from "react-router-dom";
import page404Png from "../assets/page404.png";
import { FaArrowRight } from "react-icons/fa6";

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
        <Link
          className="flex items-center justify-center space-x-2 text-blue-600 underline dark:text-blue-400"
          to="/home"
        >
          <FaArrowRight />
          <span>back to home page</span>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
