import { get, post } from "./api.js";


 export const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",

};

export async function login(email, password) {
  const user = await post(endpoints.login, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
  document.dispatchEvent(new Event("userLoggedIn"));
}


export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
  document.dispatchEvent(new Event("userLoggedIn"));
}


export async function logout() {
  get(endpoints.logout);
  sessionStorage.removeItem("user");
  document.dispatchEvent(new Event("userLoggedOut"));
  location.reload();
}



