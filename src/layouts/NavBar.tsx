import { useState } from "react";
import logo from "../assets/icons/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { constants } from "../utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white text-black h-16 flex items-center justify-between px-5 relative">
      <Link to={"/"} className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
        <img
          src={logo}
          className="w-[70px] md:w-[70px] h-[70px] mt-4 xl:ml-20 lg:ml-10 md:ml-6"
          alt="Logo"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-10">
        {constants.navItems.map((item: any, i: number) => (
          <div>
            <Link
              key={i}
              to={item.link}
              className={`hover:text-primary-dim ${
                location.pathname === item.link
                  ? "text-primary font-bold text-lg "
                  : "font-medium"
              }`}
            >
              {item.label}
            </Link>
            {location.pathname === item.link && (
              <div className="bg-primary h-0.5" />
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex items-center justify-center gap-8 xl:mr-30">
        <button
          type="button"
          onClick={() => navigate("/locations")}
          className="bg-secondary text-primary px-12 py-4 font-semibold text-sm rounded-full cursor-pointer"
        >
          Join Us
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden text-blue-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <div className="bg-white/30 backdrop-blur-lg">
          <Icon icon="ci:hamburger-md" fontSize={44} color="#073260" />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 z-50 lg:hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        {constants.navItems.map((item: any, i: number) => (
          <Link
            key={i}
            to={item.link}
            className={`text-primary ${location.pathname === item.link ? "text-secondary-dim font-semibold text-lg": ""} font-medium py-2 w-full text-center hover:bg-green/70`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => {
            navigate("/locations");
            setMenuOpen(false);
          }}
          className="bg-secondary text-primary px-12 py-4 font-semibold text-sm rounded-full cursor-pointer"
        >
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
