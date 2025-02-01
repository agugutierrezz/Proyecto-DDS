import { NavLink } from "react-router-dom";
import { PiNewspaperClippingThin } from "react-icons/pi";

export const NavBarCuponero = () => {
  const btnLink = "block inline py-1 text-black hover:text-cuponBlue cursor-pointer mr-4";
  const activeLink = "block inline-blocl py-1 text-cuponBlue mr-4";
  return (
    <header className="text-gray-600 body-font">
      <div className="bg-white flex flex-wrap py-0 flex-col md:flex-row items-center text-black border-b border-black">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NavLink to="/inicioCuponero" className={({ isActive }) => (isActive ? activeLink : btnLink)} >
            <img src="/assets/logoCuponero2.png" fill="none" className="w-64 h-17 p-2" viewBox="0 0 24 24" />
          </NavLink>
        </a>
        {/* Buscador */}
        <div className="flex-grow flex justify-start ml-44">
          <div className="group">
            <input
              type="text"
              placeholder="Buscar Cupones"
              className="w-[200px] sm:w-[600px] text-black rounded-full border border-black px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-cuponBlue focus:border-transparent text-center text-xl font-montserrat"
            />
          </div>
        </div>
        <NavLink to="/cuponesFormPage" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
          <PiNewspaperClippingThin className="w-12 h-12 p-0 mr-4 text-black hover:text-cuponBlue stroke-[0px]" />
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-right">
          <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            {({ isActive }) => (
              <img src={isActive ? "/assets/profileBlue.png" : "/assets/profile.png"}
                className="w-12 h-12 p-0"
                onMouseOver={(e) => (e.currentTarget.src = "/assets/profileBlue.png")
                }
                onMouseOut={(e) =>
                (e.currentTarget.src = isActive
                  ? "/assets/profileBlue.png"
                  : "/assets/profile.png")
                }
              />
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default NavBarCuponero;
