import ItemCarrinho from "@/model/ItemCarrinho";
import { useState } from "react";
import CarrinhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";
import Moeda from "../utils/Moeda";


interface CarrinhoProps{
    itens:ItemCarrinho[]
}

export default function Carrinho(props:CarrinhoProps){
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)
    
    return(
        <div className={`
            flex flex-col border border-black 
            rounded-md overflow-hidden w-4/5
        `}>
            <div className=" flex justify-between items-center bg-zinc-800 text-white text-3xl p-3">
                <span>Carrinho </span>
                <span>{Moeda.formatar(total)}</span>

            </div>
           <div className="flex gap-5 p-5 ">
            {props.itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <div className="flex flex-row gap-2">
                    {props.itens.map((item, i) =>{
                    return(
                        <CarrinhoItem key={i} {...item}/>
                    )
                })}
                </div>
            )}
           
           </div>
        </div>
    )
}