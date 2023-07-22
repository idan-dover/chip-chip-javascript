import { FaCircleInfo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between px-4 py-3 font-semibold bg-lime-500 dark:bg-lime-600">
      <span className="px-3 font-mono font-normal text-gray-800 dark:text-gray-50">
        &copy; Idan Dover {year}
      </span>
      <div className="flex items-center justify-between space-x-3 text-3xl text-gray-800 dark:text-gray-50">
        <Link to="/about">
          <FaCircleInfo />
        </Link>
        <Link target="_blank" to="https://github.com/IdanDover">
          <FaGithub />
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/idan-dover/">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
