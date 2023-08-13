import { RepoComponent } from "./styles";
export default function Repo(props: any) {
  const { name, description, html_url } = props;
  function handleLinkClick() {
    window.open(html_url, "_blank");
  }
  return (
    <RepoComponent onClick={handleLinkClick}>
      <p className="title">{name}</p>
      <p>{description}</p>
    </RepoComponent>
  );
}
