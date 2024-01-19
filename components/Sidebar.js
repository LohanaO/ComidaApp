import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {
const { categorias } = useQuiosco()
  return (
   <>
    <Image src="/assets/img/logo.svg"
     width={200} height={100} 
     alt=" imagen logotipo" 
     />

     <nav className="mt-10">
        {categorias?.map(categoria => (
            <Categoria key={categoria.id} categoria={categoria} />
        ))}
     </nav>
   </>
  )
}

