import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCuponById } from '../api/cupones.api';
import { CuponCardCuponManiacos2 } from '../components/CuponCardCuponManiacos2';

export function Cupon() {
    const [cupon, setCupon] = useState(null);
    const { id } = useParams(); // Obtener el ID del cupón desde la URL

    useEffect(() => {
        async function loadCupon() {
            if (!id) {
                console.error("No ID provided");
                return;
            }
            try {
                console.log(`Fetching cupon with ID: ${id}`);
                const res = await getCuponById(id);
                console.log('API response:', res);
                if (res && res.data) {
                    setCupon(res.data);
                } else {
                    console.error("No data found for the given ID");
                }
            } catch (error) {
                console.error("Failed to fetch cupon:", error);
            }
        }
        loadCupon();
    }, [id]);

    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (cupon?.imagen_principal) {
            setMainImage(cupon.imagen_principal);
        }
    }, [cupon]);

    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    const [selectedCoupon, setSelectedCoupon] = useState(null); // 1 para el rojo y otro para el amarillo

    return (
        <div className="relative flex justify-end pr-8">
            <div className="w-full max-w-7xl">
                <h1 className="text-black text-center text-4xl mb-8 font-poppins py-5">
                    {cupon?.titulo}
                </h1>
                <div className="flex">
                    {/* Lado izquierdo con las imagenes */}
                    <div className="w-1/2 pr-8">
                        <div className="mb-4">
                            <img
                                src={mainImage || cupon?.imagen_principal || "/assets/default.png"}
                                className="w-96 h-96 object-cover rounded-lg"
                                alt="Imagen principal"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <div className="flex space-x-4">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <img
                                        key={index}
                                        src={cupon?.[`imagen_${index}`] || "/assets/default.png"}
                                        className="h-32 w-32 object-cover rounded-lg cursor-pointer hover:opacity-75"
                                        alt={`Imagen ${index}`}
                                        onClick={() => handleImageClick(cupon?.[`imagen_${index}`])}
                                    />
                                ))}
                            </div>
                        </div>
                        {cupon?.fecha_expiracion && (
                            <div className="mt-0 text-center">
                                <p className="text-white text-2xl rounded-3xl border-8 bg-cuponRed py-2 text-center">Expira el: {new Date(cupon.fecha_expiracion).toLocaleDateString()}</p>
                            </div>
                        )}
                    </div>
                    {/* Lado derecho con los detalles del cupon */}
                    <div className="w-1/3 ml-auto">
                        <div className="border-2 border-gray-300 rounded-lg p-6 shadow-lg space-y-6 px-10">
                            {cupon ? (
                                <div className="space-y-6">
                                    <div
                                        className="relative cursor-pointer"
                                        onClick={() => setSelectedCoupon(1)}
                                    >
                                        <img src="/assets/CuponRojoHorizontal.png" className="w-full" />
                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <CuponCardCuponManiacos2 cupon={cupon} />
                                        </div>
                                        {selectedCoupon === 1 && (
                                            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-30 border-4 border-cuponBlue rounded-lg"></div>
                                        )}
                                    </div>
                                    <div
                                        className="relative cursor-pointer"
                                        onClick={() => setSelectedCoupon(2)}
                                    >
                                        <img src="/assets/CuponYellow.png" className="w-full" />
                                        {selectedCoupon === 2 && (
                                            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-30 border-4 border-cuponBlue rounded-lg"></div>
                                        )}
                                    </div>
                                    <button
                                        className={`mt-6 w-full font-bold py-2 px-4 rounded ${selectedCoupon
                                            ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                        disabled={!selectedCoupon}
                                        onClick={() => {
                                            if (selectedCoupon) {
                                                // Agregar que se hace con el cupon seleccionado
                                                console.log(`Redeeming coupon type: ${selectedCoupon}`);
                                            }
                                        }}
                                    >
                                        Canjear Cupón
                                    </button>
                                </div>
                            ) : (
                                <p>No cupon found</p>
                            )}
                        </div>
                    </div>
                </div>
                <h2 className="text-black text-center text-4xl mb-8 font-poppins py-11">
                    Descripcion
                </h2>
                <h2 className="text-black text-center text-3xl mb-8 font-poppins ">
                    {cupon?.descripcion}
                </h2>
            </div>
        </div>
    );
}


export default Cupon;