import * as api from "./api.js";



const endpoints = {
  listFacts: "/data/facts?sortBy=_createdOn%20desc",
};

export async function getFacts() {
  return api.get(endpoints.listFacts);
}

export async function getFactData(factId) {
  const getEndpoint = "/data/facts/" + factId;
  return api.get(getEndpoint)
}
export async function delFact(factId) {
  const endpoint = "/data/facts/" + factId;
  return api.del(endpoint)
};
export async function likeFact(factId) {
  return api.post("/data/likes",{factId})
  
}
export async function addFact(factData) {
  return api.post("/data/facts", factData)
}
export async function hasUserLikedFact(factId, userId) {
  const endpoint = `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
  try {
    const response = await api.get(endpoint);
    return response === 1;
  } catch (error) {
    console.error("Error checking if user has liked fact:", error);
    throw error;
  }
}
export async function getFactLikes(factId) {
  const endpoint = `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`;
  try {
    const response = await api.get(endpoint);
    console.log(`Likes for fact ${factId}:`, response);
    return response;
  } catch (error) {
    console.error("Error getting fact likes:", error);
    throw error;
  }
}

export async function updateFact(factId, factData) {
  try {
    const updatedFact = await api.put("/data/facts/" + factId, {
      ...factData
    });
    return updatedFact;
  } catch (error) {
    console.error("Error updating fact:", error);
    throw error;
  }
}
