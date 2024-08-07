import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon.jsx";
import SunIcon from "./icons/SunIcon.jsx";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    debugger;
    if (darkMode) {
      document.documentElement.classList.add("dark"); //Acceder al HTML de esta forma solo se hace ya que el elemento está fuera de React. Si estuviera dentro habría que utilizar referencia
      localStorage.setItem("theme", "dark"); //Alternativa: localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-5">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};
export default Header;
