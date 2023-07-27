import * as api from "./api.js";



const endpoints = {
  listTeams: "/data/teams",
  listMembers: "/data/members?",
  listMembersPerTeam: "/data/members?",
};

export async function getAllTeams() {
  return api.get(endpoints.listTeams);
}

export async function getTeamMembers(team) {
  const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team)}%22`;
  return api.get(endpoint);
}
export async function getAllMembershipsForTeam(teamId) {
  const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(teamId)}%22&load=user%3D_ownerId%3Ausers`;
  return api.get(endpoint);
}
export async function getTeamData(teamId) {
  return api.get(`/data/teams/${teamId}`);
}

export async function createTeam(teamData) {
  try {
    const createdTeam = await api.post(endpoints.listTeams, { ...teamData });
    const teamId = createdTeam._id;
    await api.post(endpoints.listMembers, { teamId });
    return createdTeam;
  } catch (error) {
    console.error("Error creating team:", error);
    throw error;
  }
}

export async function updateTeam(teamId, teamData) {
  try {
    const updatedTeam = await api.put(`/data/teams/${teamId}`, { ...teamData });
    return updatedTeam;
  } catch (error) {
    console.error("Error updating team:", error);
    throw error;
  }
}
export async function removeUserFromTeam(membershipData) {
  const endpoint = `/data/members/${membershipData.teamId}`;
  return api.del(endpoint, membershipData);
}
export async function requestToJoinTeam(team, user) {
  // const endpoint = endpoints.listMembers + `where=teamId%3D%22${encodeURIComponent(team.teamId)}%22`;
  const endpoint = "/data/members";
  const teamId = team.teamId
  console.log(team);
  return api.post(endpoint, {teamId});
}

