import { useState } from "react";
import ListadoProductos from "./ListadoProductos";

const TabItemFactura = ({onSelecProductsChange}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSelecProductsChange = (updatedSelecProducts) => {
    onSelecProductsChange(updatedSelecProducts);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Seleccionar producto
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Seleccionar servicio
        </div>
      </div>
      <div className="search-tabs">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <ListadoProductos onSelecProductsChange={handleSelecProductsChange}/>}
        {activeTab === "tab2" && <p>Contenido de la pestaña Servicio</p>}
      </div>
    </div>
  );
};

export default TabItemFactura;
