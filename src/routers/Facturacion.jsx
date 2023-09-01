import React from "react";
import Factura from "../components/Factura"
import GenerarFactura from "../components/GenerarFactura"
import CuerpoFactura from "../components/CuerpoFactura";
import FormaPago from "../components/FormaPago";

const Facturacion = () => {
  return (
    <div className="billing-container">
      <section>
      <Factura/>
      <CuerpoFactura/>
      <FormaPago/>
      </section>
      <GenerarFactura/>
    </div>
  );
};

export default Facturacion;
