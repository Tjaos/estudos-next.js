import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa(){
    return(
        <div className="flex gap-7 p-7">
            <Caixa>Caixa 1</Caixa>
            <Caixa>Caixa 2</Caixa>
            <Caixa>
                <ul className="list-disc">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>

            </Caixa>
        </div>
    )
}