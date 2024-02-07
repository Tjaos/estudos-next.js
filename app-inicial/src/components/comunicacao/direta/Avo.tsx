import Pai from "./Pai";

interface AvoProps{
    Nome:string
    sobrenome: string
}

export default function Avo(props:AvoProps){
    return(
        <div className={`
            flex gap-5 p-5 rounded-md
            bg-purple-500 text-black border border-black
            flex-col justify-center items-center
        `}>
            <div className={`
                flex gap-2 text-2xl
            `}>
                <span className="font-bold">Avô:</span>
                <span>{props.Nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className={`
                flex gap-5
            `}>
                <Pai Nome="João" sobrenome={props.sobrenome}/>
                <Pai Nome="José" sobrenome={props.sobrenome}/>
                <Pai Nome="Pedro" sobrenome={props.sobrenome}/>
            </div>

          
        </div>
    )
}