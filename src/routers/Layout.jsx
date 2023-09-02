import { useEffect, useState } from "react";
import LogoAmoba from "../assets/img/logo-amoba.png";
import UserAvatar from "../assets/img/usuario.png";
import IconMenuTop from "../assets/img/icon-menu.png";
import MenuAcordeon from "../components/MenuAcordeon";
import itemsMenu from "../data/itemsMenu";
import { Outlet } from "react-router-dom";
import { loginRequest, userProfileRequest } from "../api/autenticacion";
import { useAuthStore, userProfileStore } from "../store/auth";

const Layout = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUserData = userProfileStore((state) => state.setUserData);
  
  useEffect(() => {
    (async () => {
      try {
        const restLogin = await loginRequest("test", "123456");
        setToken(restLogin.access_token);
        const restUserProfile = await userProfileRequest();
        setUserData(restUserProfile);
      } catch (error) {
        console.error("Error en la solicitud de inicio de sesión:", error);
      }
    })();
  }, []);
  
  return (
    <>
      <section className="topBar">
        <img src={LogoAmoba} alt="logo-amoba" />
        <div>
          <img src={UserAvatar} alt="avatar de usuario" />
        </div>
      </section>
      <section className="layout">
        <div id="sidebar">
          <nav>
            <div className="element-sidebar">
              <img src={IconMenuTop} alt="icono del menu top" />
              <p>Menu Top</p>
            </div>
            <MenuAcordeon itemsMenu={itemsMenu} />
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
