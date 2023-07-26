import * as api from "./api.js";

const endpoints = {
  listTeams: "/data/teams",
  listMembers: "/data/members?", // Insert user query after the question mark (example GET ?where=status="member")
  listMembersPerTeam: "/data/members?", // Insert user query after the question mark (example GET where=teamId IN ("{id1}","{id2}","{id3}",…) AND status="member")

};








export async function getAllTeams(){
  return api.get(endpoints.listTeams);
}
// Example API Usage from other tasks : 




// export async function getAllFurniture() {
//   return api.get(endpoints.allFurniture);
// }

// export async function getFurnitureById(id) {
//   return api.get(endpoints.furnitureById + id);
// }

// export async function updateFurniture(id, data) {
//   return api.put(endpoints.updateFurniture + id, data);
// }

// export async function deleteFurniture(id) {
//   return api.del(endpoints.deleteFurniture + id);
// }