import { get, post } from "./api.js";
import { updateNav } from "../utils.js";
const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
  createCatalog: "/data/catalog",
  editCatalog: "/data/catalog/"
};

export async function login(email, password) {
  const user = await post(endpoints.login, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function createFurniture(make,price,model,image,year,material,description){
  post(endpoints.createCatalog,{make,price,model,image,year,material,description});
}
export async function editFurniture(id, furnitureData) {
  const endpoint = endpoints.editCatalog + id;
  put(endpoint, furnitureData);
}


export async function logout() {
  get(endpoints.logout);
  sessionStorage.removeItem("user");
  updateNav();
}