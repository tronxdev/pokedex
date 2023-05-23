import {
  BodySpecs,
  BodySpec,
  BodySpecLabel,
  BodySpecValue,
  Columns,
  Column,
  Img,
  Wrapper,
  DetailSection,
  DetailTitle,
  DetailItems,
  DetailItem,
} from "./details.styled";
import { dmToInch, hgToLbs } from "../../../utils/helpers";
import { Type } from "../../../components";
import { IPokemon } from "../../../types/pokemon/pokemon";
import { IBaseType } from "../../../types/pokemon/type";

interface IDetailsProps {
  data: IPokemon;
}

export default function Details({ data }: IDetailsProps) {
  const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
    "00" + data.id
  ).slice(-3)}.png`;

  return (
    <Wrapper>
      <Columns>
        <Column>
          <Img alt={data.name} src={imgUrl} />
          <BodySpecs>
            <BodySpec>
              <BodySpecLabel>Height</BodySpecLabel>
              <BodySpecValue>{dmToInch(data.height)}</BodySpecValue>
            </BodySpec>
            <BodySpec>
              <BodySpecLabel>Weight</BodySpecLabel>
              <BodySpecValue>{hgToLbs(data.weight)}</BodySpecValue>
            </BodySpec>
          </BodySpecs>
        </Column>
        <Column>
          <DetailSection>
            <DetailTitle>Abilities ({data.abilities.length})</DetailTitle>
            <DetailItems variant="default">
              {data.abilities.slice(0, 2).map((e) => (
                <DetailItem key={e.ability.name}>
                  {e.ability.name.charAt(0).toUpperCase() +
                    e.ability.name.slice(1)}
                </DetailItem>
              ))}
            </DetailItems>
          </DetailSection>
          <DetailSection>
            <DetailTitle>Moves ({data.moves.length})</DetailTitle>
            <DetailItems variant="default">
              {data.moves.slice(0, 2).map((e) => (
                <DetailItem key={e.move.name}>
                  {e.move.name.charAt(0).toUpperCase() + e.move.name.slice(1)}
                </DetailItem>
              ))}
            </DetailItems>
          </DetailSection>
          <DetailSection>
            <DetailTitle>Species</DetailTitle>
            <DetailItems variant="default">
              <DetailItem>
                {data.species.name.charAt(0).toUpperCase() +
                  data.species.name.slice(1)}
              </DetailItem>
            </DetailItems>
          </DetailSection>
          <DetailSection>
            <DetailTitle>Types ({data.types.length})</DetailTitle>
            <DetailItems variant="no-bullet">
              {data.types.map((e) => (
                <DetailItem key={e.type.name}>
                  <Type data={e.type.name as IBaseType} />
                </DetailItem>
              ))}
            </DetailItems>
          </DetailSection>
        </Column>
      </Columns>
    </Wrapper>
  );
}
