import React from 'react';
import peao from '../assets/images/peao.png';
import torre from '../assets/images/torre.png';
import cavalo from '../assets/images/cavalo.png';
import bispo from '../assets/images/bispo.png';
import dama from '../assets/images/dama.png';
import rei from '../assets/images/rei.png';
import { Link } from 'react-router-dom';

import './container.css';

export function ContainerComojogar() {
    return (
        <div className='bg-slate-100'>
            <div className="w-60 border-b border-slate-600 flex justify-center text-center ml-auto mr-auto pt-7">
                <h1 className="text-4xl font-bold text-gray-600">Como jogar</h1>
            </div>
   

            {[
                { id: 'peao', img: peao, nome: 'Peão', descricao: 'Movimenta-se apenas uma casa para frente, depois de um ou mais passos, e depois de um ou mais passos.' },
                { id: 'torre', img: torre, nome: 'Torre', descricao: 'Movimenta-se em linha reta horizontal ou verticalmente.' },
                { id: 'cavalo', img: cavalo, nome: 'Cavalo', descricao: 'Movimenta-se em forma de L.' },
                { id: 'bispo', img: bispo, nome: 'Bispo', descricao: 'Movimenta-se em linha reta diagonalmente.' },
                { id: 'dama', img: dama, nome: 'Dama', descricao: 'Movimenta-se em linha reta horizontal, vertical ou diagonalmente.' },
                { id: 'rei', img: rei, nome: 'Rei', descricao: 'Movimenta-se uma casa em qualquer direção.' },
            ].map(piece => (
                <div key={piece.id} id={piece.id} className="bg-[#fff] w-96 h-60 mt-20 ml-auto mr-auto p-4 shadow-2xl rounded-lg">
                    <div>
                        <h2 className="text-2xl font-bold text-[#000]">{piece.nome}</h2>
                    </div>
                    <div className="flex items-center space-x-4 pt-16">
                        <img className='w-20 h-20' src={piece.img} alt={piece.nome} />
                        <p className="text-1xl font-bold text-justify text-[#000]">{piece.descricao}</p>
                    </div>
                </div>
            ))}

            

            <div className='flex justify-center mt-12 mb-12'>
                <Link to="/jogar">
                    <button className="bg-[#363636] text-[#18B3E9] font-bold text-2xl text-center w-36 h-16 rounded-2xl shadow-2xl">
                        JOGAR
                    </button>
                </Link>
            </div>
        </div>
    );
}
