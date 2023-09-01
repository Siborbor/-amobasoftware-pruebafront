import React from "react";
import Qr from "../assets/img/qr.svg"

const CuerpoFactura = () => {
  return (
    <section className="cuerpo-factura tarjeta">
      <div className="title-cuerpoFactura">
        <h3>Cuerpo de factura</h3>
        <div className="contenedor-cantidad-precio">
          <p>Cantidad</p>
          <p>Precio</p>
        </div>
      </div>
      <section className="contenedor-botones-newitemQr">
        <button className="button-newitem">
            Add nuevo item a la factura
        </button>
        <button className="button-codigoQr">
            <img src={Qr} alt="boton codigoqr" />
        </button>
      </section>
    </section>
  );
};

export default CuerpoFactura;
