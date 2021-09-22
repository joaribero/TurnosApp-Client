import axios from "axios";

console.log(process.env.REACT_APP_BACKEND_URL);

//configuro axios para no tener que copiar siempre el endpoint del backend y además siempre enviar credenciales.
const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true
});

export default clientAxios;