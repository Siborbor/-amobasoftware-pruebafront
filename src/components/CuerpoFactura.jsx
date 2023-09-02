import { useState } from "react";
import Qr from "../assets/img/qr.svg";
import Modal from "./Modal";
import TabItemFactura from "./TabItemFactura.jsx";
import { useProdutSelected } from "../store/client";
import IconDelete from "../assets/img/icono-eliminar.svg";

const CuerpoFactura = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selecProducts, setSelecProducts] = useState([]);

  const setproductSelected = useProdutSelected(
    (state) => state.setProductDataSelected
  );

  const productSelected = useProdutSelected(
    (state) => state.productDataSelected
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelecProductsChange = (updatedSelecProducts) => {
    setSelecProducts(updatedSelecProducts);
  };

  const handleClick = () => {
    if (productSelected === undefined) {
      setproductSelected(selecProducts);
    } else {
      setproductSelected([...productSelected, ...selecProducts]);
    }
  };

  const handleDeleteItem = (indexToDelete) => {
    const updatedProductSelected = productSelected.filter(
      (_, index) => index !== indexToDelete
    );
    setproductSelected(updatedProductSelected);
  };

  return (
    <section className="cuerpo-factura tarjeta">
      <div
        className="title-cuerpoFactura"
        style={{
          width:
            productSelected === undefined
              ? "calc(100% - 90px)"
              : "calc(100% - 35px)",
        }}
      >
        <h3>Cuerpo de factura</h3>
        <div className="contenedor-cantidad-precio">
          <p>Cantidad</p>
          <p>Precio</p>
        </div>
      </div>
      {productSelected !== undefined &&
        productSelected.map((product, index) => (
          <div key={index} className="descripcion-cuerpoFactura">
            <p>{product.name}</p>
            <div className="contenedor-cantidad-precio">
              <input type="text" placeholder="0"></input>
              <input type="text" placeholder="0"></input>
              <button
                className="eliminar-item-factura"
                onClick={() => handleDeleteItem(index)}
              >
                <img src={IconDelete} alt="" />
              </button>
            </div>
          </div>
        ))}

      <section className="contenedor-botones-newitemQr">
        <button className="button-newitem" onClick={openModal}>
          Add nuevo item a la factura
        </button>
        <button className="button-codigoQr">
          <img src={Qr} alt="boton codigoqr" />
        </button>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <TabItemFactura onSelecProductsChange={handleSelecProductsChange} />
        <button onClick={() => [handleClick(), closeModal()]}>
          Seleccionar
        </button>
      </Modal>
    </section>
  );
};

export default CuerpoFactura;
