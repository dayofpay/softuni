const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }

  try {

    const response = await fetch(host + url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  } catch (error) {
    // document.getElementById('error').textContent = error.message;

    alert(`We ran into error :/ : ${error.message}`)

    if(document.getElementById('error')){
      document.getElementById('error').textContent = error.message;
    }
    throw error;
  }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");