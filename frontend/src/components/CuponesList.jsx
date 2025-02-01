import { useEffect, useState } from "react"
import { getAllCupones } from '../api/cupones.api'
import { CuponCard } from '../components/CuponCard'
import { useNavigate } from "react-router-dom";

export function CuponesList() {
    //Petición al backend
    const [cupones, setCupones] = useState([]);

    useEffect(() => {
        async function loadCupones() {
            const res = await getAllCupones()
            setCupones(res.data)
        }
        loadCupones();
    }, []);

    const navigate = useNavigate();

    const handleCuponClick = (id) => {
        navigate(`/cupones/${id}`);
    };

    return (
        <div className="grid grid-cols-3 gap-3">
            {
                cupones.map(cupon => (
                    <div key={cupon.id} className="relative" onClick={() => handleCuponClick(cupon.id)}>
                        <img src="/assets/cuponAzulLargo.png" alt={cupon.nombre} className="w-full" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
                            <CuponCard key={cupon.id} cupon={cupon} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
