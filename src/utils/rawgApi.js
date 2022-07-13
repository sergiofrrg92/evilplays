import { Api } from "./apiManager";

export const api = new Api({
    baseUrl: "https://api.rawg.io/api",
    headers: {
      "Content-Type": "application/json"
    },
    token:"742478c169e44a6e8235427272dbeead"
  });

export default api;
  