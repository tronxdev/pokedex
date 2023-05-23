import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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

// redux
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { addHistory } from "../../../redux/slices/pokedex";

import { INamedApiResource } from "../../../types/api";
import RAW_POKEMONS from "../../../assets/json/pokemons.json";

const POKEMONS = RAW_POKEMONS.map((p, index) => ({ id: index + 1, ...p }));

export default function Search() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { data: searchHistory } = useSelector(
    (state: RootState) => state.pokedex.searchHistory
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [candidates, setCandidates] =
    useState<Array<INamedApiResource & { id: number }>>(searchHistory);

  const handleSearchInputFocus = useCallback(() => {
    setIsPopoverOpen(true);
  }, []);

  const handlePopoverOutsideClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);

  const handleDebouncedQueryChange = useDebouncedCallback((value: string) => {
    if (!value) {
      setCandidates(searchHistory);
    } else if (value.length < 3) {
      setCandidates([]);
    } else {
      setCandidates(
        POKEMONS.filter((p) => p.name.startsWith(value.toLowerCase()))
      );
    }
  }, 1000);

  const handleSelect = useCallback(
    (d: INamedApiResource & { id: number }) => {
      dispatch(addHistory(d));
      navigate(`/pokemon/${d.name}`);
    },
    [dispatch, navigate]
  );

  return (
    <Wrapper>
      <InputWrapper>
        <Title>Name or Number</Title>
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom"]}
          clickOutsideCapture={true}
          onClickOutside={handlePopoverOutsideClick}
          content={<SearchPopover data={candidates} onSelect={handleSelect} />}
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
