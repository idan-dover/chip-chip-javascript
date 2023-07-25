import { Link } from "react-router-dom";
import emptyView from "../assets/empty-view.png";
import { FaArrowRight } from "react-icons/fa6";

function EmptyView({ linkTo, linkText }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-5 mx-2 my-3">
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Chip Chip, seems like you don&apos;t have any coupons in here
      </h1>
      <img
        src={emptyView}
        alt="empty-view"
        className="max-w-50vw h-auto max-h-[30vh]"
      />
      <Link
        className="flex items-center justify-center space-x-2 text-blue-600 underline dark:text-blue-400"
        to={linkTo}
      >
        <FaArrowRight />
        <span>{linkText}</span>
      </Link>
    </div>
  );
}

export default EmptyView;
