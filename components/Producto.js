import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}) {
    const {handleSetProducto, handleChangeModal} = useQuiosco()
  return (
    <div className="border p-3">
       <Image src={`/assets/img/${producto.imagen}.jpg`}
        width={400} height={500} 
        alt={producto.nombre}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{producto.nombre}</h3>
            <p className="mt-5 font-bold text-4xl text-amber-500">{formatearDinero(producto.precio)}</p>
            
            <button 
            type="button"
            className="bg-amber-500 hover:bg-amber-800 text-white w-full mt-3 p-3 uppercase font-bold"
            onClick={() => {
                handleChangeModal();
                handleSetProducto(producto)}}>
                Agregar 
            </button>
        </div>
    </div>
  )
}
