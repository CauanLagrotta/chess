export function Card({paragrafo, title, subtitle, description, button, handleOpen}){
    return(
        <div
            onClick={handleOpen}
            id="card1"
            className="w-64 h-64 bg-slate-600"
          >
            {open ? (
              <p
                id="textoHover"
                className={
                   " text-sm font-bold text[#fff] text-justify"
                }
              >
                {paragrafo}
              </p>
            ) : (
              <>
                <h2 className="text-1xl font-bold text-white pl-6 pt-3">
                  {title}
                </h2>
                <div className="pt-10 pl-6">
                  <p className="text-1xl font-bold text-gray-400">{subtitle}: </p>
                  <i className=" text-gray-400">
                    {description}
                  </i>
                </div>
                <p className="text-1xl font-bold text-[#18B3E9] text-center pt-10">
                  {button}
                </p>
              </>
            )}
          </div>
    )
}