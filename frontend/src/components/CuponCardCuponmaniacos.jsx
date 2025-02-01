import { useNavigate, useNavigationType } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export function CuponCardCuponManiacos({ cupon }) {

    const navigate = useNavigate()

    return (
        <>
            <NavLink to={'/cupon/' + cupon.id} className="text-white hover:text-black text-xl text-center items-center justify-center">
                <h1 className="font-bold uppercase">{cupon.titulo}</h1>
                <p className="text-slate-400">{cupon.descuento.toString().slice(0, 2)}%</p>
            </NavLink>
        </>
    )

}