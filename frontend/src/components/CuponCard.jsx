import { useNavigate, useNavigationType } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export function CuponCard({ cupon }) {

    const navigate = useNavigate()

    return (
        <>
            <NavLink to={'/cupones/' + cupon.id} className="text-white hover:text-black text-3xl text-center items-center justify-center">
                <h1 className="font-bold uppercase">{cupon.titulo}</h1>
            </NavLink>
        </>
    )

}