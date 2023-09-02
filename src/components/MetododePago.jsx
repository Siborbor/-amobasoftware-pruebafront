import React from "react";
import iconeDelet from "../assets/img/icono-eliminar.svg";

const MetododePago = ({ onDelete }) => {
  return (
    <div className="contenedor-metodopago">
      <div className="contenedor-selectboton-metodopago">
        <select>
          <option>opcion1</option>
          <option>opcion2</option>
        </select>
        <input placeholder="$0"/>
        <button className="boton-eliminar" onClick={onDelete}>
          <img src={iconeDelet} alt="icono de eliminar" />
        </button>
      </div>
    </div>
  );
};

export default MetododePago;
