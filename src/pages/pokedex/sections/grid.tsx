import { useCallback, useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroller";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Pokemon } from "../../../components";
import { Wrapper, Footer, LoadMore } from "./grid.styled";

import { INamedApiResource, INamedApiResourceList } from "../../../types/api";
import { IPokemon } from "../../../types/pokemon/pokemon";

const POKEAPI_URL = process.env.REACT_APP_POKEAPI_URL;

interface IGridProps {
  query: string;
}

export default function Grid({ query }: IGridProps) {
  const [page, setPage] = useState<
    INamedApiResourceList<IPokemon> & { loading: boolean }
  >({
    count: 0,
    next: POKEAPI_URL + "/pokemon",
    previous: null,
    results: [],
    loading: false,
  });

  const fetchPokemons = useCallback(async () => {
    if (!page.next) return;

    setPage({ ...page, loading: true });

    const pageRes = await fetch(page.next);
    if (pageRes.ok) {
      const data =
        (await pageRes.json()) as INamedApiResourceList<INamedApiResource>;

      const pokemons = (await Promise.all(
        data.results.map(async (r) => {
          const res = await fetch(r.url);
          return await res.json();
        })
      )) as Array<IPokemon>;

      setPage({
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: [...page.results, ...pokemons],
        loading: false,
      });
    }
  }, [page.next]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {}}
        hasMore={!!page.next}
        useWindow={true}
        threshold={100}
      >
        <ResponsiveMasonry>
          <Masonry gutter="32px">
            {page.results.map((r) => (
              <Pokemon key={r.id} variant="mini" data={r} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
      <Footer>
        <LoadMore onClick={fetchPokemons} disabled={page.loading || !page.next}>
          Load more
        </LoadMore>
      </Footer>
    </Wrapper>
  );
}
