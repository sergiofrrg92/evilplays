import { Api } from "./ApiHandler"

export const api = new Api({
    //baseUrl: "https://around.nomoreparties.co/v1/group-12",
    //baseUrl: "https://api.sergiofrrg.students.nomoreparties.sbs",
    baseUrl: "http://localhost:3000",
    headers: {
      authorization: "",
      "Content-Type": "application/json"
    }
  });

export default api;
  