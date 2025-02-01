import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { createCupon, deleteCupon, getCuponById, updateCupon } from '../api/cupones.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import NavBarCuponero from '../components/navbarCuponero'

function CuponesFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const navigate = useNavigate()

    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        try {
            if (params.id) {
                await updateCupon(params.id, data);
                toast.success('Cupón editado');
            } else {
                await createCupon({
                    codigo: data.codigo,
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    descuento: parseFloat(data.descuento),
                    fecha_expiracion: data.fecha_expiracion
                });
                toast.success('Cupón creado');
            }
            navigate('/cupones');
        } catch (error) {
            toast.error('Error al guardar el cupón');
            console.error(error);
        }
    })

    useEffect(() => {
        async function loadCupon() {
            if (params.id) {
                const res = await getCuponById(params.id)
                console.log(res)
                setValue('codigo', res.data.codigo)
                setValue('titulo', res.data.titulo)
                setValue('descripcion', res.data.descripcion)
                setValue('descuento', res.data.descuento)
                setValue('fecha_expiracion', res.data.fecha_expiracion)
            }
        }
        loadCupon();
    }, [params.id, setValue])


    return (
        <div className="bg-cuponBlue min-h-screen flex flex-col items-center">
            <div className="w-full">
                <NavBarCuponero />
            </div>
            <div className='max-w-xl w-full bg-white rounded-2xl mt-28 ml-10 border-black border-2'>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="codigo"
                        {...register("codigo", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-black '
                    />

                    <input
                        type="text"
                        placeholder="titulo"
                        {...register("titulo", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-black'
                    />
                    {errors.titulo && <span>el titulo es requerido</span>}

                    <textarea
                        rows="3"
                        placeholder="descripcion"
                        {...register("descripcion", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-black'
                    ></textarea>
                    {errors.descripcion && <span>la descripcion es requerida</span>}

                    <input
                        type="number"
                        step="0.01"
                        placeholder="descuento"
                        {...register("descuento", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-black'
                    />
                    {errors.descuento && <span>el descuento es requerido</span>}

                    <input
                        type="date"
                        placeholder="fecha expiracion"
                        {...register("fecha_expiracion", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-black'
                    />
                    {errors.fecha_expiracion && <span>la fecha de expiracion es requerida</span>}

                    <div className="flex justify-center">
                        <button className="bg-indigo-500 p-3 rounded-lg block w-1/2 mb-3">Guardar</button>
                    </div>
                </form>
            </div>
            {params.id && (
                <div className='max-w-xl w-full rounded-2xl mt-10 ml-10'>
                    <div className='flex justify-center'>
                        <button
                            className="bg-cuponRed p-3 rounded-lg block w-full mb-3"
                            onClick={async () => {
                                const accepted = window.confirm('seguro?');
                                if (accepted) {
                                    await deleteCupon(params.id);
                                    toast.success('Cupón eliminado');
                                    navigate("/cupones");
                                }
                            }}>
                            Borrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CuponesFormPage