import React, { useState } from 'react';
import peao from '../assets/images/peao.png';
import torre from '../assets/images/torre.png';
import cavalo from '../assets/images/cavalo.png';
import bispo from '../assets/images/bispo.png';
import rei from '../assets/images/rei.png';
import dama from '../assets/images/dama.png';
import 'boxicons/css/boxicons.min.css';

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

            <section className="w-full h-screen flex items-center justify-center">
                <div className="flex h-1/2 items-center relative w-auto">

                    <button type="button" className="absolute left-0 px-2 py-4" onClick={previous}>
                        <i className='bx bx-chevron-left bx-lg'></i>
                    </button>

                    
                <div className="w-auto flex border-solid border-2 gap-12 border-[#000]">
                    <div className="w-96 flex  ">
                        
                        
                    </div>
                    <div className="w-full flex justify-center overflow-hidden border-solid">
                        <img src={images[currentImageIndex]} alt="peça de xadrez" className="object-contain h-96" />
                    </div>
                </div>
                    

                    <button type="button" className="absolute right-0 px-2 py-4" onClick={next}>
                        <i className='bx bx-chevron-right bx-lg'></i>
                    </button>

                </div>
            </section>
        </div>
    );
}
