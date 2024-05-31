import { useState } from "react";

export function Card({ paragrafo, voltar, title, subtitle, description, button }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div onClick={handleToggle} id="card1" className="w-64 h-64 bg-slate-600 cursor-pointer rounded-lg">
      {isOpen ? (
        <>
          <p id="textoClick" className="text-xs text-white text-justify mt-5 ml-5 mr-5 ">
            {paragrafo}
          </p>
          <p className="text-1xl font-bold text-[#18B3E9] text-center pt-2"> {voltar} </p>
        </>
        
      ) : (
        <>
          <h2 className="text-1xl font-bold text-white pl-6 pt-3">
            {title}
          </h2>
          <div className="pt-10 pl-6">
            <p className="text-1xl font-bold text-gray-400">
              {subtitle}:
            </p>
            <i className="text-gray-400 text-justify">
              {description}
            </i>
          </div>
          <p className="text-1xl font-bold text-[#18B3E9] text-center pt-10">
            {button}
          </p>
        </>
      )}
    </div>
  );
}
