import React from 'react'
import mainimg2 from '../../images/mainimg2.jfif'
import './container.css'

function Container2() {
  return (
    <div className='flex'>

        <div className='ml-10 mt-10'>
            <img id='containerImage2' src={mainimg2} alt="idoso jogando xadrez" />
        </div>

        <div className='tracking-wider mt-10 ml-10 mr-10' > 
            <p className='text-base text-justify'>Além de ser um passatempo divertido e desafiador, o xadrez também é conhecido por seus benefícios cognitivos. Estudos mostraram que jogar xadrez regularmente pode melhorar habilidades como pensamento crítico, tomada de decisão, concentração e memória.</p><br />
            <p className='text-base text-justify'>Em termos de estatísticas, o xadrez é um dos jogos de tabuleiro mais populares do mundo, com milhões de jogadores em todo o globo. Existem federações internacionais de xadrez, como a FIDE (Federação Internacional de Xadrez), que regulamentam competições e mantêm rankings de jogadores. Grandes mestres como Garry Kasparov, Bobby Fischer e Magnus Carlsen se destacaram como alguns dos melhores jogadores da história, inspirando gerações de entusiastas do xadrez a aprimorar suas habilidades e explorar as complexidades deste jogo fascinante.</p><br />
            <p className='text-base text-justify'>Com o advento da tecnologia, o xadrez se adaptou ao mundo digital, permitindo que jogadores de diferentes localidades se enfrentem online. Plataformas como Chess.com e Lichess oferecem partidas, torneios, aulas e análises por inteligência artificial.</p>
        </div> 


    </div>
  )
}

export default Container2