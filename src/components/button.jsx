// function Button() {
//    const name = 'Alonso'
//    return  (
//        <>
//           <button className="bg-cuponRed px-5 py-2 text-white">{name}</button>
//        </>
//    )
//}

const Button  = (props) => { //Props: Propiedades para que podamos trabajar con objetos
    
    const { name } = props
    return  (
        <>
           <button className="bg-gray-800 px-5 py-2 text-white">{name}</button>
        </>
    )
}
export default Button;