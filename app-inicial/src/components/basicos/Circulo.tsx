interface CirculoProps {
    texto: string
    quasePerfeito?:boolean
}

export default function Circulo(props:CirculoProps){
    console.log(props)
    return(
        <div className={`
            h-64 w-64 bg-cyan-500
            flex justify-center items-center
            text-black font-black text-3xl
            ${props.quasePerfeito ? 'rounded-2xl': 'rounded-full' }
            rounded-full
        `}>
            {props.texto}
        </div>
    )
}