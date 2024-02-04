import ImagemAleatoria from "@/components/basicos/hooks/imagemAleatoria";

export default function PaginaImagens(){
    return(
        <div className={`
        flex justify-center items-center h-screen gap-5
        `}>
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />
            <ImagemAleatoria />

        </div>
    )
}