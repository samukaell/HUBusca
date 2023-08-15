import { useParams } from "next/navigation";
import { RepoComponent } from "./styles";
import { getLanguagesRepo } from "@/service/api";
import { useEffect, useState } from "react";
export default function Repo(props: any) {
  //conts
  const { name, description, html_url, pushed_at, created_at } = props;
  const [languages, setLanguages] = useState<string[]>([]);
  const { params } = useParams();
  //funções
  function handleLinkClick() {
    window.open(html_url, "_blank");
  }
  async function getLanguages() {
    if (name !== null && name !== undefined && name !== "") {
      const response = await getLanguagesRepo(params.toString(), name);
      const arrayLanguages = Object.keys(response);
      setLanguages(arrayLanguages);
    }
  }
  function dateFormat(data: string) {
    const partes = data.split("T")[0].split("-");
    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0];
    return `${dia}/${mes}/${ano}`;
  }
  //inicialização
  useEffect(() => {
    getLanguages();
  }, []);
  return (
    <RepoComponent onClick={handleLinkClick}>
      <p className="title">{name}</p>
      <p>{description}</p>
      <div className="date-box">
        <div className="date">
          <p className="text">Criado:</p>
          <p className="date-info">{dateFormat(created_at)}</p>
        </div>
        <div className="date">
          <p className="text">Ultimo push:</p>
          <p className="date-info">{dateFormat(pushed_at)}</p>
        </div>
      </div>
      <div className="container-lang">
        <p className="title-languages">Linguagens: </p>
        <div className="languages-box">
          {languages.map((lang, index) => [<p key={index}>| {lang} |</p>])}
        </div>
      </div>
    </RepoComponent>
  );
}
