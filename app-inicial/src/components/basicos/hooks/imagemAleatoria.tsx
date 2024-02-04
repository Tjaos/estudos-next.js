import { useState } from "react";
import Image from "next/image";
export default function ImagemAleatoria() {
    const url = "https://source.unsplash.com/featured/";
    const[tamanho, setTamanho] = useState<number>(300);
    const [pesquisa, setPesquisa] = useState<string>('abstract');

    function renderizarBotao(valor: string) {
        return (
            <button
                className={`
                bg-blue-500 px-4 py-2 
                  rounded-md`}
                onClick={() => {
                    setPesquisa(valor);
                    console.log(valor);
                }}
            >
                {valor}
            </button>
        );
    }

    return (
        <div
            className={`
            flex flex-col gap-3 p-7 border-x-2 border-y-2
            rounded-md`}>
                <div className="flex justify-center gap-7 mb-5">
                    <span>{pesquisa}</span>
                    <span>{tamanho} x {tamanho}</span>
                </div>
            <Image 
                src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
                height={300} width={300} 
                alt='Imagem'
                className="rounded-md"/>
            <div className={`flex gap-5 justify-between `}>
                
                {renderizarBotao("abstract")}
                {renderizarBotao("city")}
                {renderizarBotao("person")}
                {renderizarBotao("animal")}
            </div>
            <div>
                <input 
                    className=" p-2 rounded-md w-full" 
                    type="number"
                    value={tamanho} 
                    onChange={e =>{
                        setTamanho(+e.target.value)
                    }}
                    />
            </div>
        </div>
    );
}
