import { Name, ID, Wrapper } from "./header.styled";
import { IPokemon } from "../../../types/pokemon/pokemon";

interface IHeaderProps {
  data: IPokemon;
}

export default function Header({ data }: IHeaderProps) {
  return (
    <Wrapper>
      <Name>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Name>
      <ID>#{("000" + data.id).slice(-4)}</ID>
    </Wrapper>
  );
}
