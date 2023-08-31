import React from "react";
import Search from "../components/Search"

const Factura = ({ factura = "0011000000014", nombre="Steven", apellido="Borbor", correoElectronico = "steven@gmail.com" }) => {
  return (
    <section className="bill-container">
      <h3>Factura N: {factura}</h3>
      <p>Detalles del cliente</p>
      <div className="search-newclient">
        <Search/>
        <div>
            <button> Agregar Nuevo Cliente</button>
            <div>
                <p>Nombre:{nombre}</p>
                <p>Apellido:{apellido}</p>
                <p>Correo electronico:{correoElectronico}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Factura;
