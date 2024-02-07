interface BotoesProps{
    inc:(valor:number)=> void
    dec:(valor:number)=> void
}

export default function Botoes(props:BotoesProps){

    
    return(
        <div className="flex justify-between items-center">
            <button className={`botao bg-red-500 flex-1`}
                onClick={() => props.dec(2)}>
                -2
            </button>

            <button className={`botao bg-blue-500 flex-1`}
                onClick={()=> props.inc(4)}>
                +4
            </button>
        </div>
    )
}