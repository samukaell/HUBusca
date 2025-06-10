import axios from "axios";

const accessToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function getUserData(username: string) {
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 404) {
      return "404";
    } else {
      throw new Error("Erro ao buscar dados do usuário: " + error.message);
    }
  }
}

async function getRepoByUser(login: string) {
  const apiUrl = `https://api.github.com/users/${login}/repos`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

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
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao buscar os dados do repositorio: " + error.message);
  }
}

export { getUserData, getRepoByUser, getLanguagesRepo };
