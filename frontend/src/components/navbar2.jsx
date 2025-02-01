import { NavLink } from "react-router-dom";
import list from "/src/list.json";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

{/* Categorias Dropdown */ }
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  {/* Cuando se selecciona una categoria se cierra */ }
  const handleCategoryClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative flex flex-col items-center">
      <button onClick={() => setIsOpen((prev) => !prev)} className="py-1 text-black hover:text-cuponRed cursor-pointer mr-4 font-montserrat flex items-center">
        Categorias
        {!isOpen ? (
          <MdOutlineKeyboardArrowDown className="ml-2" />
        ) : (
          <MdOutlineKeyboardArrowUp className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full mt-0 bg-white shadow-lg p-2 w-48 z-10">
          {list.map((item, i) => (
            <div className="flex w-full justify-between cursor-pointer p-2" key={i}>
              <NavLink to={`/${item.categoria}`} className="text-black hover:text-cuponRed" onClick={handleCategoryClick}>
                {item.categoria}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const NavBar2 = () => {
  const btnLink =
    "block inline py-1 text-black hover:text-cuponRed cursor-pointer mr-4 font-montserrat";
  const activeLink = "block inline-blocl py-1 text-cuponRed mr-4 font-montserrat";
  return (
    <header className="text-gray-600 body-font">
      <div className="bg-white flex-grow flex py-0 flex-col md:flex-row items-center justify-center text-black border-b border-black ">
        <a className="flex title-font font-medium items-center text-white -900 mb-4 md:mb-0 py-0">
          <NavLink to="/inicio" className="text-white">
            Holaererffdddff
          </NavLink>
        </a>
        <nav className="md:ml-auto flex-grow py-0 space-x-10 flex items-center text-xl justify-center">
          <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            Home
          </NavLink>
          <NavLink to="/cercano" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            Cercano
          </NavLink>
          <NavLink to="/contactanos" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            Contactanos
          </NavLink>
          <Dropdown />
        </nav>
      </div>
    </header>
  );
};
export default NavBar2;
