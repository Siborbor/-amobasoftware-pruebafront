import LogoAmoba from "../assets/img/logo-amoba.png";
import UserAvatar from "../assets/img/usuario.png";
import IconMenuTop from "../assets/img/icon-menu.png";
import MenuAcordeon from "../components/MenuAcordeon";
import itemsMenu from "../data/itemsMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <>
      <section className="topBar">
        <img src={LogoAmoba} alt="logo-amoba" />
        <img src={UserAvatar} alt="avatar de usuario" />
      </section>
      <section className="layout">
        <div id="sidebar">
          <nav>
            <div className="element-sidebar">
              <img src={IconMenuTop} alt="icono del menu top" />
              <p>Menu Top</p>
            </div>
            <MenuAcordeon itemsMenu={itemsMenu}/>
          </nav>
        </div>
        <div id="detail">
          <Outlet/>
        </div>
      </section>
    </>
  );
};

export default Layout;
