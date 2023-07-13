import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleSwitchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return [theme, handleSwitchTheme];
}

export default useTheme;
