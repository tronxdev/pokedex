import { Wrapper, Text } from "./styled";
import { TYPES } from "../../utils/constants";
import { IBaseType } from "../../types/pokemon/type";

interface ITypeProps {
  data: IBaseType;
}

export default function Type({ data }: ITypeProps) {
  return (
    <Wrapper bg={TYPES[data].bg}>
      <Text color={TYPES[data].color}>
        {data.charAt(0).toUpperCase() + data.slice(1)}
      </Text>
    </Wrapper>
  );
}
