import React from "react";
import LogoAmoba from "../assets/img/logo-amoba.png";
import UserAvatar from "../assets/img/usuario.png";
import IconMenuTop from "../assets/img/icon-menu.png";
import IconPersona from "../assets/img/icon-personas.png";
import IconProducto from "../assets/img/icon-producto.png";

const Root = () => {
  return (
    <>
      <section className="topBar">
        <img src={LogoAmoba} alt="logo-amoba" />
        <img src={UserAvatar} alt="avatar de usuario" />
      </section>
      <section className="layout">
        <div id="sidebar">
          <nav>
            <div>
              <img src={IconMenuTop} alt="icono del menu top" />
              <p>Menu Top</p>
            </div>
            <ul>
              <li>
                <img src="" alt="" />
                <p>Ventas</p>
                <ul>
                  <li>
                    <a>Facturacion</a>
                  </li>
                  <li>
                    <a>Proforma</a>
                  </li>
                </ul>
              </li>
              <li>
                <img src={IconProducto} alt="icono de productos y servicios" />
                <p>Productos y Servicios</p>
                <ul>
                  <li>
                    <a>item1</a>
                  </li>
                  <li>
                    <a>item2</a>
                  </li>
                </ul>
              </li>
              <li>
                <img src={IconPersona} alt="icono de personas" />
                <p>Personas</p>
                <ul>
                  <li>
                    <a>item1</a>
                  </li>
                  <li>
                    <a>item2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"><p>Hola Mundo</p></div>
      </section>
    </>
  );
};

export default Root;
