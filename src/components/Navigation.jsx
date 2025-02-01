import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation();
  return (
    <div className='flex justify-between py-3'>
      <Link to="/home">
        <h1 className='font-bold text-3xl mb-4'>CupónManía</h1>
      </Link>
      {location.pathname === '/home' ? (
        <div>
          <button className="bg-indigo-500 px-3 py-2 rounded-lg mx-2">
            <Link to="/login">Iniciar Sesión</Link>
          </button>
          <button className="bg-indigo-500 px-3 py-2 rounded-lg mx-2">
            <Link to="/signup">Registrarme</Link>
          </button>
        </div>
      ) : location.pathname === '/home-empresa' ? (
        <div>
          <button className="bg-indigo-500 px-3 py-2 rounded-lg mx-2">
            <Link to="/home-empresa">Crear Formulario</Link>
          </button>
        </div>
      ) : location.pathname === '/home-cliente' ? (
        <div>
          <button className="bg-indigo-500 px-3 py-2 rounded-lg mx-2">
            <Link to="/home-cliente">Ver Perfil</Link>
          </button>
        </div>
      ) : location.pathname === '/login' ? (
        <div>
        </div>
      ) : location.pathname === '/signup' ? (
        <div>
        </div>
      ) : (
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
          <Link to="/cupon-create">Crear Cupón</Link>
        </button>
      )}
    </div>
  );
}
