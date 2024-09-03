"use client";

import { Tutorial } from "@/components/Tutorial/Tutorial";
import image1 from "@/TUTORIAL2/1.png"
import image2 from "@/TUTORIAL2/2.png"
import image3 from "@/TUTORIAL2/3.png"
import image4 from "@/TUTORIAL2/4.png"
import image5 from "@/TUTORIAL2/5.png"
import image6 from "@/TUTORIAL2/6.png"
import image7 from "@/TUTORIAL2/7.png"
import image8 from "@/TUTORIAL2/8.png"
import image9 from "@/TUTORIAL2/9.png"
import image10 from "@/TUTORIAL2/10.png"
import image11 from "@/TUTORIAL2/11.png"
import image12 from "@/TUTORIAL2/12.png"
import image13 from "@/TUTORIAL2/13.png"
import image14 from "@/TUTORIAL2/14.png"
import image15 from "@/TUTORIAL2/15.png"
import image16 from "@/TUTORIAL2/16.png"
import image17 from "@/TUTORIAL2/17.png"
import image18 from "@/TUTORIAL2/18.png"
import image19 from "@/TUTORIAL2/19.png"
import image20 from "@/TUTORIAL2/20.png"
import image21 from "@/TUTORIAL2/21.png"
import image22 from "@/TUTORIAL2/22.png"
import image23 from "@/TUTORIAL2/23.png"
import image24 from "@/TUTORIAL2/24.png"
import image25 from "@/TUTORIAL2/25.png"
import image26 from "@/TUTORIAL2/26.png"
import image27 from "@/TUTORIAL2/27.png"
import image28 from "@/TUTORIAL2/28.png"
import image29 from "@/TUTORIAL2/29.png"
import image30 from "@/TUTORIAL2/30.png"
import image31 from "@/TUTORIAL2/31.png"


export default function Home() {

  const textImage1 = "Abaixo temos uma aula com quatro alunos e um instrutor."
  const textImage2 = "No item destacado, podemos ativar/desativar o audio."
  const textImage3 = "No item destacado, podemos ativar/desativar a câmera."
  const textImage4 = "No item destacado, podemos compartilhar uma aba/janela ou tela do computador."
  const textImage5 = "Neste item, podemos abrir ao lado esquerdo, o chat de conversas da aula."
  const textImage6 = "No item destacado, podemos visualizar ao lado direito os participantes da sala."
  const textImage7 = "No item destacado, temos o 'compartilhar video', esse item será utilizado para podermos mostrar aos demais participantes videos do youtube e/ou qualquer video que conter um link direto ao mesmo."
  const textImage8 = "Ao passar o mouse em um aluno, veremos alguns botões, o botão destacado servirá para acionar algumas funções para aquele aluno."
  const textImage9 = "Após clicar no ITEM 1, veremos à direita os participantes da sala. No ITEM 2, podemos consultar a lista de alunos presentes na sala."
  const textImage10 = "No item destacado, podemos buscar um participante através do seu nome."
  const textImage11 = "No item destacado, pediremos ao participante ativar o audio para conversar na sala."
  const textImage12 = "Neste item podemos acionar as funções igual mencionado no PASSO 8"
  const textImage13 = "Funções para manipular o participante e/ou manipular todos os participantes exceto o mesmo."
  const textImage14 = "Neste botão destacado, faremos a ação de desabilitar o audio de todos os participantes da sala incluindo o instrutor."
  const textImage15 = " Abaixo podemos destacar algumas funções que afetaria em todos os participantes incluindo o instrutor."
  const textImage16 = "Na imagem abaixo podemos observar uma lista de alunos que estão presentes na sala. Podemos diferenciar os alunos presentes/ausentes atraves da fonte da letra."
  const textImage17 = "Nesta imagem podemos observar que um aluno esta ausente na sala. Os alunos ausentes serão destacados com a cor vermelha em seu nome. "
  const textImage18 = "Na imagem abaixo, selecionamos o compartilhamento de tela."
  const textImage19 = "Escolha uma aba para compartilhar com os participantes, caso for um conteudo sem video, desabilitar o item conforme mencionado abaixo."
  const textImage20 = "Segue o exemplo abaixo para desabilitar o audio do compartilhamento."
  const textImage21 = "Abaixo selecionamos o tipo de compartilhamento de janela, esse item permite compartilhar telas de aplicativos fora do navegador. "
  const textImage22 = "Abaixo selecionamos o tipo de compartilhamento de tela cheia, esse item permite compartilhar tela do computador."
  const textImage23 = "No item destacado abaixo, iremos inserir o link direto do video."
  const textImage24 = "Usaremos o YouTube como exemplo. Na imagem abaixo, o item destacado irá fornecer um link direto para a reprodução do video."
  const textImage25 = "Após clicar em 'compartilhar', clicaremos no item destacado 'Copiar'."
  const textImage26 = "Colaremos esse link no campo destacado e, iremos clicar em 'Compartilhar'"
  const textImage27 = "Ao clicar em 'Silenciar todos', no ITEM 1, mutaremos todos da sala incluindo o instrutor. No ITEM 2, iremos permitir ou não a reativação do audio dos participantes na sala."
  const textImage28 = "Se caso inativado, todos os participantes exceto instrutor, não poderão reativar o audio."
  const textImage29 = "Nos itens destacados abaixo, podemos observar que, a reativação do audio e video esta ativa para os participantes"
  const textImage30 = "Quando desmarcamos a reativação do audio, podemos observar que o icone de audio do participante fica destacado em vermelho."
  const textImage31 = "Quando desmarcamos a reativação do video, podemos observar que o icone de video do participante fica destacado em vermelho."
  const textImage32 = ""
  const textImage33 = ""
  const textImage34 = ""
  const textImage35 = ""
  const textImage36 = ""
  return (
    <>
      <div className="h-fi image={image}t bg-gray-700 bg-opacity-100 flex flex-col gap-12  justify-center items-center ">

        <Tutorial image={image1} text={textImage1} value="1" />
        <Tutorial image={image2} text={textImage2} value="2" />
        <Tutorial image={image3} text={textImage3} value="3" />
        <Tutorial image={image4} text={textImage4} value="4" />
        <Tutorial image={image18} text={textImage18} value="4-1" />
        <Tutorial image={image19} text={textImage19} value="4-2" />
        <Tutorial image={image20} text={textImage20} value="4-3" />
        <Tutorial image={image21} text={textImage21} value="4-4" />
        <Tutorial image={image22} text={textImage22} value="4-5" />
        <Tutorial image={image5} text={textImage5} value="5" />
        <Tutorial image={image6} text={textImage6} value="6" />
        <Tutorial image={image7} text={textImage7} value="7" />
        <Tutorial image={image23} text={textImage23} value="7-1" />
        <Tutorial image={image24} text={textImage24} value="7-2" />
        <Tutorial image={image25} text={textImage25} value="7-3" />
        <Tutorial image={image26} text={textImage26} value="7-4" />
        <Tutorial image={image8} text={textImage8} value="8" />
        <Tutorial image={image9} text={textImage9} value="9" />
        <Tutorial image={image16} text={textImage16} value="9-1" />
        <Tutorial image={image17} text={textImage17} value="9-2" />
        <Tutorial image={image10} text={textImage10} value="10" />
        <Tutorial image={image11} text={textImage11} value="11" />
        <Tutorial image={image12} text={textImage12} value="12" />
        <Tutorial image={image13} text={textImage13} value="13" />
        <Tutorial image={image14} text={textImage14} value="14" />
        <Tutorial image={image27} text={textImage27} value="14-1" />
        <Tutorial image={image28} text={textImage28} value="14-2" />
        <Tutorial image={image15} text={textImage15} value="15" />
        <Tutorial image={image29} text={textImage29} value="16" />
        <Tutorial image={image30} text={textImage30} value="17" />
        <Tutorial image={image31} text={textImage31} value="18" />
        {/* <Tutorial image={image32} text={textImage32} value="32" />
        <Tutorial image={image33} text={textImage33} value="33" />
        <Tutorial image={image34} text={textImage34} value="34" /> */}
        {/* <Tutorial image={image35} text={textImage35} value="35" /> */}
        {/* <Tutorial image={image36} text={textImage36} value="36" /> */}

      </div>
    </>
  );
}
