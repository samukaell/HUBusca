import axios from "axios";

const accessToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

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
    console.log("Token", accessToken);
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error: any) {
    throw new Error(
      "Erro ao buscar os repositorios do usuário: " + error.message
    );
  }
}

async function getLanguagesRepo(login: string, repo: string) {
  const apiUrl = `https://api.github.com/repos/${login}/${repo}/languages`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao buscar os dados do repositorio: " + error.message);
  }
}

export { getUserData, getRepoByUser, getLanguagesRepo };
