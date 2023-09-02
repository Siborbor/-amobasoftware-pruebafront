import { useEffect, useState } from "react";
import { getProducts } from "../api/clientes";
import { useProdutStore } from "../store/client";

const ListadoProductos = ({ onSelecProductsChange }) => {
  const setProductData = useProdutStore((state) => state.setProductData);
  const productData = useProdutStore((state) => state.productData);
  const [selecProducts, setSelecProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const restGetProduct = await getProducts();
      setProductData(restGetProduct.data);
    })();
  }, []);

  const handleCheckboxChange = (event, product) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelecProducts((prevSelected) => [...prevSelected, product]);
    } else {
      const updatedSelection = selecProducts.filter(
        (selectedProduct) => selectedProduct.id !== product.id
      );
      setSelecProducts(updatedSelection);
    }
  };

  useEffect(() => {
    onSelecProductsChange(selecProducts);
  }, [selecProducts]);

  return (
    <div className="listado-producto">
      <div className="contenedor-title-product">
        <p style={{ width: "30%" }}>Codigo</p>
        <p style={{ width: "70%" }}>Descripcion</p>
      </div>
      <div className="contenedor-listProduct">
        {productData !== undefined &&
          productData.map((product, index) => (
            <div key={index} className="contenedor-itemProduct">
              <p style={{ width: "30%" }}>{product.code}</p>
              <p style={{ width: "60%" }}>{product.name}</p>
              <input
                type="checkbox"
                style={{ width: "4%" }}
                onChange={(event) => handleCheckboxChange(event, product)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListadoProductos;
