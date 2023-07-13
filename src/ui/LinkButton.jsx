import { useNavigate } from "react-router-dom";

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  return (
    <button
      className="inline-block px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full disabled:cursor-not-allowed hover:bg-lime-300 text-gray-700 focus:outline-none focus:ring focus:ring-amber-300 focus:bg-amber-300 focus:ring-offset-2 sm:px-6 sm:py-4"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

export default LinkButton;
