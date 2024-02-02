import { useState } from "react"

export default function Evento(){
const [contador, setContador] = useState(0);

    function incrementar(){
        console.log(setContador(contador+1))
    }

    return(
        <button className={`
            h-72 w-72 bg-green-600
            flex justify-center items-center
            text-4xl
        `}onClick={incrementar}>
            {contador}
        </button>
    )
}