import { useState } from "react";
import "./container.css";
import { data } from "../data";
import { Card } from "./card";

export function ContainerBeneficios() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div id="container-beneficios" className="h-full min-h-full p-10">
      <div className="w-64 border-b border-slate-600 flex justify-center text-center ml-auto mr-auto  pt-7">
        <h1 className="text-5xl font-bold text-gray-600">Benefícios</h1>
      </div>

      <div id="cards" className="">
        <div
          id="first-line"
          className="grid grid-cols-4 mt-20 ml-auto mr-auto gap-8"
        >
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              button={item.button}
              paragrafo={item.paragrafo}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
