import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const btnLink = "block inline py-1 text-black hover:text-cuponRed cursor-pointer mr-4";
  const activeLink = "block inline-blocl py-1 text-cuponRed mr-4";
  return (
    <header className="text-gray-600 body-font">
      <div className="bg-white flex flex-wrap py-0 flex-col md:flex-row items-center text-black border-b border-black ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeLink : btnLink)} >
            <img src="/assets/logo.png" fill="none" className="w-64 h-17 p-2" viewBox="0 0 24 24" />
          </NavLink>
        </a>
        {/* Buscador */}
        <div className="flex-grow flex justify-center">
          <div className="group">
            <input
              type="text"
              placeholder="Buscar Cupones"
              className="w-[200px] sm:w-[600px] text-black rounded-full border border-black px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-cuponRed focus:border-transparent text-center text-xl font-montserrat"
            />
          </div>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-right">
          <NavLink to="/favoritos" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            {({ isActive }) => (
              <img src={isActive ? "/assets/favoritosRojo.png" : "/assets/favoritos.png"}
                className="w-11 h-11 p-0"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/assets/favoritosRojo.png")
                }
                onMouseOut={(e) =>
                (e.currentTarget.src = isActive
                  ? "/assets/favoritosRojo.png"
                  : "/assets/favoritos.png")
                }
              />
            )}
          </NavLink>
          <NavLink to="/cuponera" className={({ isActive }) => (isActive ? activeLink : btnLink)} >
            {({ isActive }) => (
              <img src={isActive ? "/assets/CuponeraRoja.png" : "/assets/Cuponera.png"}
                className="w-12 h-12 p-0"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/assets/CuponeraRoja.png")
                }
                onMouseOut={(e) =>
                (e.currentTarget.src = isActive
                  ? "/assets/CuponeraRoja.png"
                  : "/assets/Cuponera.png")
                }
              />
            )}
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
            {({ isActive }) => (
              <img src={isActive ? "/assets/profileRojo.png" : "/assets/profile.png"}
                className="w-12 h-12 p-0"
                onMouseOver={(e) => (e.currentTarget.src = "/assets/profileRojo.png")
                }
                onMouseOut={(e) =>
                (e.currentTarget.src = isActive
                  ? "/assets/profileRojo.png"
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
export default NavBar;
