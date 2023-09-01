import { useAuthStore } from "../store/auth";
const token = useAuthStore.getState().token;

const apiUrl = "https://contable.amobasoftware.com/api";

//para los servicios con headers (token)
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

//consumo del servicio login
export const loginRequest = async (username, password) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud de inicio de sesión");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud de inicio de sesión:", error);
    throw error;
  }
};

///consumo del servicio verify
export const userProfileRequest = async () => {
  try {
    if (!token) {
      throw new Error("No se encontró un token de autenticación");
    }

    const response = await fetch(`${apiUrl}/verify`, requestOptions);
    console.log(response);
    if (!response.ok) {
      throw new Error("Error en la solicitud del perfil de usuario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud del perfil de usuario:", error);
    throw error;
  }
};

