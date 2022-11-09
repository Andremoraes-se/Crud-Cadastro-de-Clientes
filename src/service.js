import axios from "axios";

//Configuração do axios para realizar requisição para a API.
const person = axios.create({
    baseURL: 'http://jonas.dev.br'
});
export default person;
