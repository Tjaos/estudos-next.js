
interface FilhoProps{
    Nome:string
    sobrenome: string
}

export default function Filho(props:FilhoProps){


    return(
        <div className={`
            flex justify-center items-center border border-black
            bg-green-500 rounded-md p-5
        `}>
            <div className={`
                flex gap-2 text-2xl
            `}>
                <span className="font-bold">Filho:</span>
                <span>{props.Nome}</span>
                <span>{props.sobrenome}</span>
            </div>

        </div>
    )
}