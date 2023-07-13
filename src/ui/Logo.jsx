import { Link } from "react-router-dom";
import logo from "../assets/logoPng.png";

function Logo({ onlyLogo = true }) {
  return (
    <Link to="/" className="flex items-center justify-center">
      <img
        className="inline object-scale-down h-16"
        src={logo}
        alt="chip chip logo"
      />
      {onlyLogo && (
        <div className="flex flex-col ">
          <span className="px-3 py-0 font-serif text-2xl tracking-widest  text-gray-800 uppercase dark:text-gray-50  ">
            chip
          </span>

          <span className="px-3 py-0 font-serif text-2xl tracking-widest text-gray-800 uppercase dark:text-gray-50  ">
            chip
          </span>
        </div>
      )}
    </Link>
  );
}

export default Logo;
