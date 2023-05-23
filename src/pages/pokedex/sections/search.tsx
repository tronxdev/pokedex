import { useCallback, useState } from "react";
import { Popover } from "react-tiny-popover";
import { useDebouncedCallback } from "use-debounce";
import { SearchPopover } from "../../../components";
import {
  Wrapper,
  Title,
  Input,
  InputWrapper,
  Instruction,
} from "./search.styled";
import RAW_POKEMONS from "../../../assets/json/pokemons.json";
import { INamedApiResource } from "../../../types/api";

const POKEMONS = RAW_POKEMONS.map((p, index) => ({ id: index + 1, ...p }));

export default function Search() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [candidates, setCandidates] = useState<
    Array<INamedApiResource & { id: number }>
  >([]);

  const handleSearchInputFocus = useCallback(() => {
    setIsPopoverOpen(true);
  }, []);

  const handlePopoverOutsideClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);

  const handleDebouncedQueryChange = useDebouncedCallback((value: string) => {
    if (!value) {
    } else if (value.length < 3) {
      setCandidates([]);
    } else {
      setCandidates(
        POKEMONS.filter((p) => p.name.startsWith(value.toLowerCase()))
      );
    }
  }, 1000);

  return (
    <Wrapper>
      <InputWrapper>
        <Title>Name or Number</Title>
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom"]}
          clickOutsideCapture={true}
          onClickOutside={handlePopoverOutsideClick}
          content={
            <SearchPopover
              data={candidates}
              onSelect={(d) => {
                console.log(d);
              }}
            />
          }
        >
          <Input
            onChange={(e) => handleDebouncedQueryChange(e.target.value)}
            onFocusCapture={handleSearchInputFocus}
          />
        </Popover>
      </InputWrapper>
      <Instruction>
        Search for a Pokémon by name or using its National Pokédex number.
      </Instruction>
    </Wrapper>
  );
}
