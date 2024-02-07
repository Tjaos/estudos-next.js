import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import If from "./If";

interface perguntaProps {
  indice:number;
  pergunta: string;
  resposta: string;
  aberta: boolean;
  alternarVisibilidade:(indice:number) => void;
}

export default function Pergunta(props: perguntaProps) {

  return (
    <div
      className={`
           border border-black rounded-md overflow-hidden
        `}
    >
      <div
        className="bg-zinc-500 p-5 cursor-pointer select-none flex justify-between"
        onClick={()=>props.alternarVisibilidade(props.indice)}
      >
        <span>{props.pergunta}</span>
        {props.aberta? <IconChevronUp />:<IconChevronDown />}
        

      </div>
      <div>
        {/*O componente criado para verificar se a questão está aberta ou
            fechada, e em seguida executar a exibição ou não do seu Filho(children:any)
        */}
        <If teste={props.aberta}>
          <div className="p-5 bg-slate-200">{props.resposta}</div>
        </If>
      </div>
    </div>
  );
}
