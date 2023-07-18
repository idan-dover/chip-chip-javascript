import { useEffect, useState } from "react";

function useTheme() {
  const userTheme = JSON.parse(localStorage.getItem("theme")) ?? "light";
  const [theme, setTheme] = useState(userTheme);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleSwitchTheme = () =>
    setTheme((prevTheme) => {
      if (prevTheme === "dark") {
        localStorage.setItem("theme", JSON.stringify("light"));
        return "light";
      } else {
        localStorage.setItem("theme", JSON.stringify("dark"));

        return "dark";
      }
    });
  // localStorage.setItem("theme", JSON.stringify(theme));

  return [theme, handleSwitchTheme];
}

export default useTheme;
