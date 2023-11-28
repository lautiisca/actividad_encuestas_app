import React, { useState } from "react";
import "../App.css";

const Opciones = ({ opciones }) => {
  const [estadosBotones, setEstadosBotones] = useState(
    opciones.map(() => "NoSelect")
  );

  const actualizarBoton = (index) => {
    setEstadosBotones((estadosBotones) =>
      estadosBotones.map((estado, i) =>
        i === index ? (estado === "NoSelect" ? "Select" : "NoSelect") : estado
      )
    );
  };

  return (
    <div className="ListaOpciones">
      {opciones.map((opcion, index) => (
        <button
          key={index}
          className={`OpcBtn ${estadosBotones[index]}`}
          onClick={() => actualizarBoton(index)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
};

export default Opciones;
