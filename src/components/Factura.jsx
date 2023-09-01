import React from "react";
import Search from "../components/Search";
import { searchClientStore } from "../store/client";
const Factura = ({ factura = "0011000000014" }) => {
  
  const oneClientData = searchClientStore(state => state.oneclientData);
  return (
    <section className="bill-container tarjeta">
      <h3>Factura N: {factura}</h3>
      <p>Detalles del cliente</p>
      <div className="search-newclient">
        <Search />
        <div className="newClient-client">
          <button> Agregar nuevo cliente</button>
          {oneClientData !== undefined ? (
            <div className="contenedorDatoCliente">
              <p>
                <strong>Nombre:{oneClientData.name} </strong>
              </p>
              <p>
                <strong>Apellido:{oneClientData.name} </strong>
              </p>
              <p>
                <strong>Correo electronico:{oneClientData.email} </strong>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Factura;
