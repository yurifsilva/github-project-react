import axios from "axios";

async function getRepositoriesByName(Name, Page = 1, PageSize = 20) {
  try {
    const result = await axios.get(
      `https://api.github.com/users/${Name}/repos?page=${Page}&per_page=${PageSize}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getCommitsByName(Name, User, Page = 1, PageSize = 10) {
  try {
    const result = await axios.get(
      `https://api.github.com/repos/${User}/${Name}/commits?page=${Page}&per_page=${PageSize}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getUserByName(Name) {
  try {
    const result = await axios.get(`https://api.github.com/users/${Name}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default {
  getRepositoriesByName,
  getCommitsByName,
  getUserByName
};
