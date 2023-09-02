import { useState } from "react";
import MetodoDePago from "./MetododePago";

const SelectFormaPago = () => {
  const [metodosDePago, setMetodosDePago] = useState([
    { id: 0, deleted: false }, 
  ]);
  const [nextId, setNextId] = useState(1);

  const agregarMetodoDePago = () => {
    setMetodosDePago((prevMetodos) => [
      ...prevMetodos,
      { id: nextId, deleted: false },
    ]);
    setNextId(nextId + 1);
  };

  const eliminarMetodoDePago = (id) => {
    setMetodosDePago((prevMetodos) =>
      prevMetodos.map((metodo) =>
        metodo.id === id ? { ...metodo, deleted: true } : metodo
      )
    );
  };

  return (
    <section className="content-selectpago">
      <h4>Seleccione Forma de pago</h4>
      <p>Metodo de pago</p>
      {metodosDePago.map((metodo) =>
        !metodo.deleted ? (
          <div key={metodo.id}>
            <MetodoDePago onDelete={() => eliminarMetodoDePago(metodo.id)} />
          </div>
        ) : null
      )}
      <button onClick={agregarMetodoDePago} className="boton-agregarOtroPago">
      + Agregar otro pago
      </button>
    </section>
  );
};

export default SelectFormaPago;
