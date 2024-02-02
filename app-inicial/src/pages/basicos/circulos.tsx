import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return(
        <div className="flex justify-around h-screen items-center">
            <Circulo texto = "Circ #1"/>
            <Circulo texto = "Circ #2"/>
            <Circulo texto = "Circ #3"/>
            <Circulo texto = "Circ #4" quasePerfeito/>
        </div>
    )
}