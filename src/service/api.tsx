import axios from "axios";

async function getUserData(username: string) {
  const accessToken = ""; // Substitua pelo seu token de acesso pessoal
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

export { getUserData };
