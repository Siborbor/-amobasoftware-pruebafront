import React from "react";
import Factura from "../components/Factura"
import GenerarFactura from "../components/GenerarFactura"

const Facturacion = () => {
  return (
    <div className="billing-container">
      <section>
      <Factura/>
      <Factura/>
      <Factura/>
      </section>
      <GenerarFactura/>
    </div>
  );
};

export default Facturacion;
