import {
  Wrapper,
  Title,
  Input,
  InputWrapper,
  Instruction,
} from "./search.styled";

export default function Search() {
  return (
    <Wrapper>
      <InputWrapper>
        <Title>Name or Number</Title>
        <Input />
      </InputWrapper>
      <Instruction>
        Search for a Pokémon by name or using its National Pokédex number.
      </Instruction>
    </Wrapper>
  );
}
