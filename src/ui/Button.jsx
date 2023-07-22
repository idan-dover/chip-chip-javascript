import { Link } from "react-router-dom";

function Button({ children, disabled, to, variation, onClick, type }) {
  const base =
    "inline-block text-sm focus:ring-0 focus:ring-offset-0 font-semibold tracking-wide uppercase transition-all duration-250 bg-amber-400 rounded-full disabled:cursor-not-allowed hover:bg-lime-300 text-stone-700 btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_5px_0px_rgb(0,0,0)] active:shadow-[0_1px_0_rgb(0,0,0)] hover:translate-y-1 dark:text-gray-100 dark:bg-amber-500 dark:hover:bg-lime-600 ";

  const styles = {
    primary: `${base} px-4 py-3 sm:px-6 sm:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary:
      "inline-block text-sm px-4 py-3 sm:px-6 sm:py-4 focus:ring-0 focus:ring-offset-0 font-semibold tracking-wide uppercase transition-all duration-300 bg-gray-400 rounded-full disabled:cursor-not-allowed hover:bg-gray-300 text-stone-700 btn shadow-[0_7px_0_rgb(0,0,0)] hover:shadow-[0_5px_0px_rgb(0,0,0)] active:shadow-[0_1px_0_rgb(0,0,0)] hover:translate-y-1 dark:text-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600",
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-xs`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[variation]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={styles[variation]}
      >
        {children}
      </button>
    );
  }

  if (type) {
    return (
      <button disabled={disabled} type={type} className={styles[variation]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[variation]}>
      {children}
      <p className="h-3 "></p>
    </button>
  );
}

export default Button;
