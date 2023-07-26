import * as api from "./api.js";

const endpoints = {
  listTeams: "/data/teams",
  listMembers: "/data/members?", // Insert user query after the question mark (example GET ?where=status="member")
  listMembersPerTeam: "/data/members?", // Insert user query after the question mark (example GET where=teamId IN ("{id1}","{id2}","{id3}",…) AND status="member")

};








export async function getAllTeams(){
  return api.get(endpoints.listTeams);
}

export async function getTeamMembers(team) {
  const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team)}%22`;
  return api.get(endpoint);
}

export async function createTeam(teamData) {
  try {
    // Make the API call to create the team
    const createdTeam = await api.post(endpoints.listTeams, { ...teamData });

    // Get the newly created team ID
    const teamId = createdTeam._id;

    // Get the current user's ID
    //const userId = JSON.parse(sessionStorage.getItem("user"))["_id"]

    // Make the API call to request membership for the current user
    await api.post(endpoints.listMembers, { teamId });

    // Return the created team
    return createdTeam;
  } catch (error) {
    console.error("Error creating team:", error);
    throw error;
  }
}





export async function requestToJoinTeam(user,team){
  const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team)}%22`;
  return api.post(endpoint);
}
