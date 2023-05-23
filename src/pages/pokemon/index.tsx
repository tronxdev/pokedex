import { useParams } from "react-router-dom";

export default function Page() {
  const { slug } = useParams();

  return <div>Pokemon {slug}</div>;
}
