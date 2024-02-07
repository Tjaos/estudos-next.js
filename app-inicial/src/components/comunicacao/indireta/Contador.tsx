import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";


export default function Contador(){

    const[getValor, setValor] = useState<number>(0)

    function incrementar( valor:number){
        setValor(getValor+valor)
    }
    function decrementar(valor:number){
        setValor(getValor-valor)
    }

    return(
        <div className={`
        flex flex-col p-2 w-72 h-72
        border border-zinc-400 rounded-md
        `}>
            <Display valor={+getValor}/>
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>
    )
}