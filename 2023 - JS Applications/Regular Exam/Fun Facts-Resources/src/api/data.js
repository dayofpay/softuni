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
    console.log(`Likes for fact ${factId}:`, response); // Add this line for debugging
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
// export async function getFruits() {
//   return api.get(endpoints.listFruints);
// }

// export async function getFruitData(fruitId) {
//   const getEndpoint = endpoints.fruitData + fruitId;
//   return api.get(getEndpoint);
// }
// export async function delFruit(fruitid) {
//   const endpoint = `/data/fruits/${fruitid}`;
//   return api.del(endpoint)
// };

// export async function addFruit(fruitData){
//   console.log(fruitData);
//   return api.post(endpoints.fruitData,fruitData)
// }
// export async function getFruitsByQuery(query) {
//   const endpoint = endpoints.fruitData + `?where=name%20LIKE%20%22${query}%22`;
//   return api.get(endpoint);
// }
// export async function updateFruit(fruitId, fruitData) {
//   try {
//     const updatedtFruit = await api.put(`/data/fruits/${fruitId}`, {
//       ...fruitData
//     });
//     return updatedtFruit;
//   } catch (error) {
//     console.error("Error updating fruit:", error);
//     throw error;
//   }
// }

// EXAMPLE FUNCTIONS FROM OTHERS TASKS
// export async function getAllTeams() {
//   return api.get(endpoints.listTeams);
// }

// export async function getTeamMembers(team) {
//   const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team)}%22`;
//   return api.get(endpoint);
// }
// export async function getAllMembershipsForTeam(teamId) {
//   const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(teamId)}%22&load=user%3D_ownerId%3Ausers`;
//   return api.get(endpoint);
// }
// export async function getTeamData(teamId) {
//   return api.get(`/data/teams/${teamId}`);
// }

// export async function createTeam(teamData) {
//   try {
//     const createdTeam = await api.post(endpoints.listTeams, { ...teamData });
//     const teamId = createdTeam._id;
//     await api.post(endpoints.listMembers, { teamId });
//     return createdTeam;
//   } catch (error) {
//     console.error("Error creating team:", error);
//     throw error;
//   }
// }

// export async function updateTeam(teamId, teamData) {
//   try {
//     const updatedTeam = await api.put(`/data/teams/${teamId}`, { ...teamData });
//     return updatedTeam;
//   } catch (error) {
//     console.error("Error updating team:", error);
//     throw error;
//   }
// }
// export async function removeUserFromTeam(membershipData) {
//   const endpoint = `/data/members/${membershipData.teamId}`;
//   return api.del(endpoint, membershipData);
// }
// export async function requestToJoinTeam(team, user) {
//   // const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team.teamId)}%22`;
//   const endpoint = "/data/members";
//   const teamId = team.teamId
//   console.log(team);
//   return api.post(endpoint, {teamId});
// }