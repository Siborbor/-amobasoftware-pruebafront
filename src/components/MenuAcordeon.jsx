import React, { useState } from "react";
import FlechaMenu from "../assets/img/flecha-menu.svg";
import { Link } from "react-router-dom";

const MenuAcordeon = ({ itemsMenu }) => {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <ul className="accordion-menu">
      {itemsMenu.map((item, index) => (
        <li
          key={index}
          className={`accordion-item ${isActive === index ? "active" : ""}`}
        >
          <div className="element-sidebar" onClick={() => handleClick(index)}>
            <div className="item-title">
              <img src={item.icon} />
              <p>{item.title}</p>
            </div>
            <div className="flecha-menu">
              <img src={FlechaMenu}></img>
            </div>
          </div>
          <div className="element-sidebar-content">
            {isActive === index &&
              item.content.map((submenu, index) => (
                <Link key={index} to={submenu.url}>
                  {submenu.title}
                </Link>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuAcordeon;
