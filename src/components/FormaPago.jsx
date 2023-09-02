import { useState } from "react";
import Modal from "./Modal";
import SelectFormaPago from "./SelectFormaPago";

const FormaPago = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {};

  return (
    <section className="cuerpo-factura tarjeta">
      <div className="title-cuerpoFactura">
        <h3>Forma de pago</h3>
        <div className="contenedor-cantidad-precio">
          <p>Monto</p>
        </div>
      </div>
      <section className="contenedor-botones-newitemQr">
        <button className="button-newitem" onClick={openModal}>
          Add nuevo item a la factura
        </button>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <SelectFormaPago/>
        <button onClick={() => [handleClick(), closeModal()]}>
          Agregar
        </button>
      </Modal>
    </section>
  );
};

export default FormaPago;
