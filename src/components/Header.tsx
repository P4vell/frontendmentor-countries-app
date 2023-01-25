import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-secondary drop-shadow-md">
      <div className="container flex items-center justify-between py-8">
        <Link to="/">
          <h1 className="font-bold md:text-2xl">Where in the world?</h1>
        </Link>
        <button className="flex items-center gap-2" onClick={toggleTheme}>
          {isDark ? <BsMoonFill /> : <BsMoon />}
          <span className="font-semibold">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
