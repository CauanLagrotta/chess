import React, { useState } from 'react';
import peao from '../assets/images/peao.png';
import torre from '../assets/images/torre.png';
import cavalo from '../assets/images/cavalo.png';
import bispo from '../assets/images/bispo.png';
import rei from '../assets/images/rei.png';
import dama from '../assets/images/dama.png';

//testando 

const images = [peao, torre, cavalo, bispo, rei, dama];

export function ContainerComojogar() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const next = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previous = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className="w-72 border-b border-slate-600 flex justify-center text-center ml-auto mr-auto pt-7">
                <h1 className="text-5xl font-bold text-gray-600 mb-3">Como jogar</h1>
            </div>

            <section className="w-full h-screen flex items-center">
                <div className="flex h-1/2 items-center relative bg-black">
                    <div className="absolute flex h-full items-center">
                        <button type="button" className="bg-white px-2 py-4 ml-1" onClick={previous}>
                            Anterior
                        </button>
                    </div>

                    <div className="w-full flex justify-center items-center overflow-hidden">
                        <img src={images[currentImageIndex]} alt="peça de xadrez" className="object-contain h-96" />
                    </div>    

                    <div className="absolute right-0 flex h-full items-center">
                        <button type="button" className="bg-white px-2 py-4 mr-1" onClick={next}>
                            Próximo
                        </button>
                    </div>                
                </div>
            </section>
        </div>
    );
}
