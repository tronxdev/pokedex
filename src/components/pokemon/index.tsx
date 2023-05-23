import { Img, ID, Name, Types, Content, Wrapper } from "./styled";
import Type from "../type";
import { IPokemon } from "../../types/pokemon/pokemon";
import { IBaseType } from "../../types/pokemon/type";

interface IPokemonProps {
  data: IPokemon;
  variant: "mini" | "detailed";
}

export default function Pokemon({ data, variant }: IPokemonProps) {
  const imgUrl =
    variant === "mini"
      ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
          "00" + data.id
        ).slice(-3)}.png`
      : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
          "00" + data.id
        ).slice(-3)}.png`;

  return (
    <Wrapper href={`/pokemon/${data.name}`}>
      <Img alt={data.name} src={imgUrl} />
      <Content>
        <ID>#{("000" + data.id).slice(-4)}</ID>
        <Name>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Name>
        <Types>
          {data.types.map((t) => (
            <Type key={t.type.name} data={t.type.name as IBaseType} />
          ))}
        </Types>
      </Content>
    </Wrapper>
  );
}
