import { Wrapper, Item, Name, ID } from "./styled";
import { INamedApiResource } from "../../types/api";

interface ISearchPopoverProps {
  data: Array<INamedApiResource & { id: number }>;
  onSelect: (item: INamedApiResource & { id: number }) => void;
}

export default function SearchPopover({ data, onSelect }: ISearchPopoverProps) {
  return (
    <Wrapper>
      {data.map((d, index) => (
        <Item
          key={d.id}
          ending={index === data.length - 1 ? "ending" : ""}
          onClick={() => onSelect(d)}
        >
          <Name>{d.name.charAt(0).toUpperCase() + d.name.slice(1)}</Name>
          <ID>(#{("000" + d.id).slice(-4)})</ID>
        </Item>
      ))}
    </Wrapper>
  );
}
