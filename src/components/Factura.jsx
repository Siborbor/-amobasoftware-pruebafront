import React from "react";
import Search from "../components/Search";

const Factura = ({
  factura = "0011000000014",
  nombre = "Steven",
  apellido = "Borbor",
  correoElectronico = "steven@gmail.com",
}) => {
  return (
    <section className="bill-container tarjeta">
      <h3>Factura N: {factura}</h3>
      <p>Detalles del cliente</p>
      <div className="search-newclient">
        <Search />
        <div className="newClient-client">
          <button> Agregar nuevo cliente</button>
          <div className="contenedorDatoCliente">
            <p>
              <strong>Nombre: </strong>
              {nombre}
            </p>
            <p>
              <strong>Apellido: </strong>
              {apellido}
            </p>
            <p>
              <strong>Correo electronico: </strong>
              {correoElectronico}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factura;
