import React, { useEffect, useState } from "react";
import {
  fetchUserRepos,
  fetchRepoLanguages,
  RepoInfo,
  LanguageInfo,
} from "../../service/api";

interface RepoWithLanguages extends RepoInfo {
  languages?: LanguageInfo[];
}

interface RepoProps {
  login: string;
  accessToken: string;
}

function Repo({ login, accessToken }: RepoProps) {
  const [repos, setRepos] = useState<RepoWithLanguages[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReposAndLanguages() {
      setLoading(true);
      setError(null);
      try {
        const userRepos = await fetchUserRepos(login, accessToken);

        const reposWithLang = await Promise.all(
          userRepos.map(async (repo) => {
            const languages = await fetchRepoLanguages(
              repo.languages_url,
              accessToken
            );
            return { ...repo, languages };
          })
        );

        setRepos(reposWithLang);
      } catch (err: any) {
        setError("Erro ao carregar dados: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    loadReposAndLanguages();
  }, [login, accessToken]);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && repos.length === 0 && <p>Nenhum repositório encontrado.</p>}
      {!loading &&
        repos.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            {repo.languages && repo.languages.length > 0 ? (
              <div style={{ display: "flex" }}>
                {repo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      flex: lang.percent,
                      backgroundColor: getColorForLanguage(lang.name),
                      height: 20,
                      position: "relative",
                      borderRadius: 4,
                      marginRight: 4,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 4,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {lang.name} {lang.percent.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>Nenhuma linguagem detectada.</p>
            )}
          </div>
        ))}
    </div>
  );
}

function getColorForLanguage(lang: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    Go: "#00ADD8",
    PHP: "#4F5D95",
  };
  return colors[lang] || "#999";
}

export default Repo;
