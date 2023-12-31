import { useState } from "react";
import { getOneCustomer } from "../api/clientes";
import { searchClientStore } from "../store/client";

const Search = () => {
  const setOneclient = searchClientStore((state) => state.setOneClientData);

  const [identificacion, setIdentificacion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const restOneCustomer = await getOneCustomer(identificacion);
    if (restOneCustomer != undefined) {
      setLoading(false);
      setOneclient(restOneCustomer);
    }
  };


  const handleChange = (e) => {
    setIdentificacion(e.target.value);
  };

  return (
    <div className="search">
      <label className="label">Identificación</label>
      <div className="search-box">
        <div className="search-field">
          <input
            placeholder="Ingrese la identificacion"
            className="input"
            value={identificacion}
            onChange={handleChange}
            type="text"
          />
          <div className="search-box-icon">
            <button className="btn-icon-content" onClick={handleClick} disabled={identificacion.length > 0 ? false : true}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <i className="search-icon">
                  <svg
                    xmlns="://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#6C727F
                    "
                    ></path>
                  </svg>
                </i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
