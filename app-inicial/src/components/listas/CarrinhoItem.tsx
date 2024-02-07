import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "../utils/Moeda";

export default function CarrinhoItem(props:ItemCarrinho){


    return(
        <div className={`flex rounded-full gap-2 bg-blue-500
            items-center
        `}>
            <span className={`
                w-7 h-7 rounded-full bg-blue-700 p-2
                flex items-center justify-center
            `}>
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span className="pr-5">
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>
        </div>
    )
}