import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  let query = `q=${username ? `${username}+` : ''}`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;


  const response = await axios.get(`${BASE_URL}/search/users?${query}&page=${page}`);
  return response.data;
};
