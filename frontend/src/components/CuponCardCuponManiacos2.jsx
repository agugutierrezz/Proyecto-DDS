import { useNavigate, useNavigationType } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export function CuponCardCuponManiacos2({ cupon }) {

    const navigate = useNavigate()

    return (
        <>
            <NavLink to={'/cupon/' + cupon.id} className="text-white hover:text-black text-xl text-center items-center justify-center">
                <p className="text-slate-400 text-3xl">{cupon.descuento.toString().slice(0, 2)}%</p>
            </NavLink>
        </>
    )

}