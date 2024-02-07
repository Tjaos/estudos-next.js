import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }

  return (
    <div
      className={`
            flex flex-col gap-2
            w-[90%] md:w-3/5
        `}
    >
      <Pergunta
        indice={0}
        aberta={ativo===0}
        pergunta="Quem descobriu o Brasil?"
        resposta="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo===1}
        indice={1}
        pergunta="O que é React.js?"
        resposta="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo===2}
        indice={2}
        pergunta="Quais os pontos positivos de utilizar Next.js?"
        resposta="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo===3}
        indice={3}
        pergunta="Quem criou o primeiro computador da história?"
        resposta="Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
}
