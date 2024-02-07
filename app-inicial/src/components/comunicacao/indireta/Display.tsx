interface DisplayProps{
    valor:number
}

export default function Display(props:DisplayProps){

    
    return(
        <div className={`
            text-5xl font-black text-white p-5
            bg-zinc-800 rounded-md flex-1
            flex justify-center items-center
        `}>
            {props.valor}
        </div>
    )
}