import React from "react";

const FormaPago = () => {
  return (
    <section className="cuerpo-factura tarjeta">
      <div className="title-cuerpoFactura">
        <h3>Forma de pago</h3>
        <div className="contenedor-cantidad-precio">
          <p>Monto</p>
        </div>
      </div>
      <section className="contenedor-botones-newitemQr">
        <button className="button-newitem">Add nuevo item a la factura</button>
      </section>
    </section>
  );
};

export default FormaPago;
