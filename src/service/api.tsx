import axios from "axios";

async function getUserData(username: string) {
  const accessToken = "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"; // Substitua pelo seu token de acesso pessoal
  const apiUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("Data->", response);
    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao buscar dados do usuário: " + error.message);
  }
}

export { getUserData };

//const accessToken =
//"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";
//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
