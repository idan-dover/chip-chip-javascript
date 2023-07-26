import { Link } from "react-router-dom";

function LinkButton({ to, children, target }) {
  return (
    <Link
      className="flex items-center justify-center py-3 space-x-2 text-blue-600 underline dark:text-blue-300"
      to={to}
      target={target}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
