import { useEffect, useState } from "react";
import { getAllCupones } from '../api/cupones.api';
import { CuponCardCuponManiacos } from '../components/CuponCardCuponmaniacos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const btnLink = "block inline py-1 text-black hover:text-cuponRed cursor-pointer mr-4";
const activeLink = "block inline-blocl py-1 text-cuponRed mr-4";

export function CuponesListCuponManiaco() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    //Petición al backend
    const [cupones, setCupones] = useState([]);

    useEffect(() => {
        async function loadCupones() {
            try {
                const res = await getAllCupones();
                setCupones(res.data);
            } catch (error) {
                console.error("Failed to load cupones:", error);
            }
        }
        loadCupones();
    }, []);

    const handleCuponClick = (id) => {
        navigate(`/cupon/${id}`);
    };

    return (
        <Slider {...settings}>
            {cupones.map(cupon => (
                <div key={cupon.id} className="relative overflow-hidden px-4" onClick={() => handleCuponClick(cupon.id)}>
                    <div className="relative w-full max-w-[1200px] h-[145px] mx-auto">
                        <img src="/assets/CuponRojoHorizontal.png" alt={cupon.nombre} className="w-full h-full " />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-center overflow-hiddenm " >
                        <CuponCardCuponManiacos cupon={cupon} />
                    </div>
                </div>
            ))}
        </Slider>
    );
}