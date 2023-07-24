// import { showError } from "./errors.js";

// export async function registerUser(userData) {
//     let userSettings = {
//         email: userData.email,
//         password: userData.password,
//     }

//     let requestSettings = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userSettings)
//     }

//     try {
//         // Send Post Data
//         let request = await fetch('http://localhost:3030/users/register', requestSettings);
//         console.log(`--- Debug Data ---`);
//         console.log(userSettings);
//         console.log(`--- Debug Data ---`);

//         let response = await request.json();
//         if (!showError(response.code)) {
//             sessionStorage.setItem('_createdOn', response._createdOn);
//             sessionStorage.setItem('_id', response._id);
//             sessionStorage.setItem('accessToken', response.accessToken);
//             console.log(sessionStorage);
//         } else {
//             return showError(response.code)
//         }

//         return response;
//     } catch (error) {
//         console.error(error);
//         return error;
//     }
// }
// export function loginUser(userData){

// }
import { get, post } from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  const user = await post(endpoints.login, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function logout() {
  get(endpoints.logout);
  sessionStorage.removeItem("user");
}