import { useCallback, useEffect, useState } from "react";

const POKEAPI_URL = process.env.REACT_APP_POKEAPI_URL;

export default function Page() {
  const [nextUrl, setNextUrl] = useState(`${POKEAPI_URL}/pokemon`);

  const fetchPokemons = useCallback(async () => {
    const res = await fetch(nextUrl);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  }, [nextUrl]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return <div>Pokedex</div>;
}
