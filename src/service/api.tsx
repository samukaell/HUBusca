import axios from "axios";

async function getUserData(username: string) {
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

async function getRepoByUser(login: string) {
  const apiUrl = `https://api.github.com/users/${login}/repos`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error: any) {
    throw new Error(
      "Erro ao buscar os repositorios do usuário: " + error.message
    );
  }
}

export { getUserData, getRepoByUser };
