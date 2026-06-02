// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:3001",
// });


import axios from "axios";

export const api = axios.create({
  // Troca o localhost fixo pela variável que criamos no .env.local
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});