"use client";

import { Tutorial } from "@/components/Tutorial/Tutorial";
import image001 from "@/TUTORIAL/001.png"
import image002 from "@/TUTORIAL/002.png"
import image003 from "@/TUTORIAL/003.png"
import image004 from "@/TUTORIAL/004.png"
import image005 from "@/TUTORIAL/005.png"
import image1 from "@/TUTORIAL/1.png"
import image2 from "@/TUTORIAL/2.png"
import image3 from "@/TUTORIAL/3.png"
import image4 from "@/TUTORIAL/4.png"
import image5 from "@/TUTORIAL/5.png"
import image6 from "@/TUTORIAL/6.png"
import image6_1 from "@/TUTORIAL/6-1.png"
import image7 from "@/TUTORIAL/7.png"
import image7_1 from "@/TUTORIAL/7-1.png"
import image7_2 from "@/TUTORIAL/7-2.png"
import image7_3 from "@/TUTORIAL/7-3.png"
import image8 from "@/TUTORIAL/8.png"
import image8_1 from "@/TUTORIAL/8-1.png"
import image9 from "@/TUTORIAL/9.png"
import image10 from "@/TUTORIAL/10.png"
import image10_1 from "@/TUTORIAL/10-1.png"
import image10_2 from "@/TUTORIAL/10-2.png"
import image11 from "@/TUTORIAL/11.png"
import image12 from "@/TUTORIAL/12.png"
import image13 from "@/TUTORIAL/13.png"
import image14 from "@/TUTORIAL/14.png"
import image15 from "@/TUTORIAL/15.png"
import image16 from "@/TUTORIAL/16.png"

export default function Home() {

  const textImage2 = "Clique não botão destacado abaixo para selecionar a aula desejada."
  const textImage1 = "Caso não exista um protocolo ativo para aquele veiculo, o botão 'SELECIONAR AULA' não aparecerá."
  const textImage3 = "Com a aula(s) selecionada, podemos observar que, o botão 'ABRIR AULA(s)' apareceu ao lado de 'LEGENDAS' "
  const textImage4 = "No campo destacado abaixo, iremos inserir o protocolo referente aquele veiculo."
  const textImage5 = "No campo destacado abaixo, iremos inserir a quilometragem inicial do veiculo."
  const textImage6 = "Siga o exemplo a seguir."
  const textImage6_1 = "Caso inserido um valor abaixo do esperado, o sistema irá notificá-lo com a mensagem mostrada no pop-up da imagem a seguir."
  const textImage7 = "A seguir coletaremos as biometrias do Aluno. Clique no botão destacado para iniciar a captura de imagem do Aluno."
  const textImage7_1 = "Em seguida, colete a biometria datiloscópica do Aluno."
  const textImage7_2 = "Siga o exemplo abaixo."
  const textImage7_3 = "Na imagem abaixo, uma biometria inserida e validada com sucesso."
  const textImage8 = "Abaixo coletaremos as biometrias do Instrutor. Clique no botão destacado para iniciar a captura de imagem do Instrutor."
  const textImage8_1 = "Caso inserido de forma incorreta, o sistema irá alerta-lo como exemplo abaixo."
  const textImage9 = "Após seguir todas as etapas, o botão 'INICIAR AULA' ficará disponivel como o exemplo abaixo. "
  const textImage10 = "Aula Iniciada em Contigencia"
  const textImage10_1 = "Na imagem a seguir, o botão destacado faz o cancelamento da aula."
  const textImage10_2 = "Na imagem a seguir, o botão destacado faz o fechamento da aula."
  const textImage11 = "Preencha os campos obrigatórios com os dados solicitados."
  const textImage12 = "Abaixo iremos inserir o rendimento."
  const textImage13 = "Abaixo iremos inserir a quilometragem final."
  const textImage14 = "Iremos inserir o fechamento do Aluno colocando os dados biometricos."
  const textImage15 = "Iremos inserir o fechamento do Instrutor colocando os dados biometricos."
  const textImage16 = "Aula Enviada para a Auditoria"

  const textImage001 = "Na Intranet, crie um 'Novo Atendimento'"
  const textImage002 = "Selecione a ocorrencia 'Verificação de equipamento defeituoso' "
  const textImage003 = "Com a ocorrencia selecionada, insira os dados do veiculo e dados do operador."
  const textImage004 = "Após a finalização da aula web em contigencia, a aula ficará aguardando a resolução do protocolo."
  const textImage005 = "Com o protocolo finalizado, faremos o aceite, recuso ou exclusão da aula contingenciada."
  return (
    <>
      <div className="h-fi image={image}t bg-white bg-opacity-100 flex flex-col gap-12  justify-center items-center ">

        <Tutorial image={image001} text={textImage001} value="001" />
        <Tutorial image={image002} text={textImage002} value="002" />
        <Tutorial image={image003} text={textImage003} value="003" />
        <Tutorial image={image004} text={textImage004} value="004" />
        <Tutorial image={image005} text={textImage005} value="005" />
        <Tutorial image={image2} text={textImage2} value="1" />
        <Tutorial image={image1} text={textImage1} value="2" />
        <Tutorial image={image3} text={textImage3} value="3" />
        <Tutorial image={image4} text={textImage4} value="4" />
        <Tutorial image={image5} text={textImage5} value="5" />
        <Tutorial image={image6} text={textImage6} value="6" />
        <Tutorial image={image6_1} text={textImage6_1} value="6-1" />
        <Tutorial image={image7} text={textImage7} value="7" />
        <Tutorial image={image7_1} text={textImage7_1} value="7-1" />
        <Tutorial image={image7_2} text={textImage7_2} value="7-2" />
        <Tutorial image={image7_3} text={textImage7_3} value="7-3" />
        <Tutorial image={image8} text={textImage8} value="8" />
        <Tutorial image={image8_1} text={textImage8_1} value="8-1" />
        <Tutorial image={image9} text={textImage9} value="9" />
        <Tutorial image={image10} text={textImage10} value="10" />
        <Tutorial image={image10_1} text={textImage10_1} value="10-1" />
        <Tutorial image={image10_2} text={textImage10_2} value="10-2" />
        <Tutorial image={image11} text={textImage11} value="11" />
        <Tutorial image={image12} text={textImage12} value="12" />
        <Tutorial image={image13} text={textImage13} value="13" />
        <Tutorial image={image14} text={textImage14} value="14" />
        <Tutorial image={image15} text={textImage15} value="15" />
        <Tutorial image={image16} text={textImage16} value="16" />
      </div>
    </>
  );
}
