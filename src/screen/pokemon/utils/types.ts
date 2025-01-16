export interface IPokemonDetails {
  name: string;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { front_default: string; front_shiny: string };
  moves: { move: { name: string } }[];
}
export interface IPokeList {
  name: string;
  url: string;
}
