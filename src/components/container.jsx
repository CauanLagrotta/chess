import React from 'react';
import mainimg from '../images/mainimg.jpg';
import './container.css'

const Container = () => {
  return (
    <div >
      <div className="w-64 border-b border-slate-400 flex justify-center text-center ml-auto mr-auto pt-7">
        <h1 className="text-3xl font-bold">O Que é Xadrez?</h1>
      </div>

      <div className="flex">
        <div className='mt-20 ml-10 ' >
          <img  src={mainimg} alt="mãe e filha jogando xadrez"/>
        </div>

      <div className='tracking-wider mt-20 ml-10 mr-10' >
        <p className='text-base text-justify'>O xadrez é um jogo de tabuleiro estratégico que envolve duas pessoas jogando em um tabuleiro quadrado dividido em 64 casas alternadamente claras e escuras. Cada jogador controla um conjunto de 16 peças, sendo elas um rei, uma rainha, dois bispos, dois cavalos, duas torres e oito peões. O objetivo do jogo é dar xeque-mate no rei adversário, o que significa colocar o rei inimigo em uma posição onde ele está sob ataque e não pode escapar.</p> <br />
        <p className='text-base text-justify'>A história do xadrez remonta a séculos atrás e sua origem exata é um tanto obscura. Acredita-se que o jogo tenha se originado na Índia por volta do século VI, onde era conhecido como "chaturanga". Ele então se espalhou para o mundo islâmico, onde recebeu o nome de "shatranj", e eventualmente chegou à Europa durante a Idade Média.</p> <br />
        <p className='text-base text-justify'>Ao longo dos anos, o xadrez evoluiu, suas regras foram refinadas e o jogo se tornou uma atividade popular em todo o mundo. Hoje em dia, o xadrez é jogado em diferentes níveis, desde jogadores amadores até grandes mestres internacionais que competem em torneios de prestígio.</p>
      </div>
                
      <div>

      </div>    

        {/* <div className='tracking-wider' > */}
          {/* <p>Além de ser um passatempo divertido e desafiador, o xadrez também é conhecido por seus benefícios cognitivos. Estudos mostraram que jogar xadrez regularmente pode melhorar habilidades como pensamento crítico, tomada de decisão, concentração e memória.</p> */}
          {/* <p>Em termos de estatísticas, o xadrez é um dos jogos de tabuleiro mais populares do mundo, com milhões de jogadores em todo o globo. Existem federações internacionais de xadrez, como a FIDE (Federação Internacional de Xadrez), que regulamentam competições e mantêm rankings de jogadores. Grandes mestres como Garry Kasparov, Bobby Fischer e Magnus Carlsen se destacaram como alguns dos melhores jogadores da história, inspirando gerações de entusiastas do xadrez a aprimorar suas habilidades e explorar as complexidades deste jogo fascinante.</p> */}
        {/* </div>  */}

      </div>
            

    </div>

  )
}

export default Container