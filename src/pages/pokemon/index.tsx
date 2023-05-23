import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import Header from "./sections/header";
import Details from "./sections/details";
import { IPokemon } from "../../types/pokemon/pokemon";

const POKEAPI_URL = process.env.REACT_APP_POKEAPI_URL;

export default function Page() {
  const { slug } = useParams();

  const [page, setPage] = useState<{
    pokemon?: IPokemon;
    loading: boolean;
    error?: string;
  }>({
    loading: false,
  });

  useEffect(() => {
    async function fetchPokemon(name: string) {
      setPage({
        loading: true,
      });

      const res = await fetch(`${POKEAPI_URL}/pokemon/${name}`);

      if (res.ok) {
        const p = await res.json();
        setPage({
          pokemon: p,
          loading: false,
        });
      } else {
        setPage({
          loading: false,
          error: res.statusText,
        });
      }
    }

    fetchPokemon(slug!);
  }, [slug]);

  if (page.loading) {
    return <div>Loading...</div>;
  }
  if (page.error) {
    return <div>{page.error}</div>;
  }
  if (!page.pokemon) {
    return <div>Not found</div>;
  }

  return (
    <Layout>
      <Header data={page.pokemon} />
      <Details data={page.pokemon} />
    </Layout>
  );
}
