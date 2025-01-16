import { IPokeList, IPokemonDetails } from "./types";

export const getPokemonList = async ({ offset = 0, limit = 10 }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  const list = data.results as IPokeList[];
  return list;
};

export const getPokemonDetails = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data as IPokemonDetails;
};
