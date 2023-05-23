import { Wrapper, Text } from "./styled";
import { TYPES } from "../../utils/constants";
import { IBaseType } from "../../types/pokemon/type";

interface ITypeProps {
  data: IBaseType;
  variant?: "default" | "mini";
}

export default function Type({ data, variant = "default" }: ITypeProps) {
  return (
    <Wrapper bg={TYPES[data].bg} variant={variant}>
      <Text color={TYPES[data].color} variant={variant}>
        {data.charAt(0).toUpperCase() + data.slice(1)}
      </Text>
    </Wrapper>
  );
}
