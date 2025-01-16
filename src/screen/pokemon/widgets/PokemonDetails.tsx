import { IPokemonDetails } from "../utils/types";
import "./PokemonDetails.css";

const Details = ({ data }: { data: IPokemonDetails }) => {
  if (!data) return <p className="loading">Loading Pokémon details...</p>;

  return (
    <div className="details-container">
      {/* Header */}
      <div className="header">
        <h1 className="capitalize pokemon-name">{data.name}</h1>
        <div className="sprites">
          <img
            src={data.sprites.front_default}
            alt={`${data.name} front`}
            className="sprite"
          />
          <img
            src={data.sprites.front_shiny}
            alt={`${data.name} shiny`}
            className="sprite"
          />
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Abilities */}
        <Section title="Abilities">
          <ul>
            {data.abilities.map((ability) => (
              <li key={ability.ability.name} className="capitalize">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </Section>

        {/* Types */}
        <Section title="Types">
          <div className="types">
            {data.types.map((type) => (
              <span
                key={type.type.name}
                className={`type-badge ${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </Section>

        {/* Height and Weight */}
        <Section title="Height">
          <p>{(data.height / 10).toFixed(1)} m</p>
        </Section>
        <Section title="Weight">
          <p>{(data.weight / 10).toFixed(1)} kg</p>
        </Section>

        {/* Base Stats */}
        <Section title="Base Stats">
          <ul className="stats-list">
            {data.stats.map((stat) => (
              <li key={stat.stat.name} className="stat">
                <span className="capitalize stat-name">{stat.stat.name}</span>
                <span className="stat-value">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Moves */}
        <Section title="Moves">
          <div className="moves">
            {data.moves.slice(0, 20).map((move) => (
              <span key={move.move.name} className="move">
                {move.move.name}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Details;
