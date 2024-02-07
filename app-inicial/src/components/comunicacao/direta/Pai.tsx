import Filho from "./Filho";

interface PaiProps{
    Nome:string
    sobrenome: string
}

export default function Pai(props:PaiProps){
    return(
        <div className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-blue-500 text-black border border-black
            items-center justify-center

        `}>
            <div className={`
                flex gap-2 text-2xl
            `}>
                <span className="font-bold">Pai:</span>
                <span>{props.Nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className={`
                flex gap-5
            `}>
                <Filho Nome="Júlia" sobrenome={props.sobrenome}/>
                <Filho Nome="Amanda" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}