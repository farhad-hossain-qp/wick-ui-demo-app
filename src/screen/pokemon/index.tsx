import { WuButton, WuDataTable } from "@npm-questionpro/wick-ui-lib";
import { IWuTableColumnDef } from "@npm-questionpro/wick-ui-lib/dist/src/components/table/types/IWuTableColumnDef";
import React from "react";
import "./index.css";
import Modal from "./ui/Modal";
import { getPokemonList } from "./utils/service";
import { IPokeList } from "./utils/types";

const Pokemon: React.FC = () => {
  // State management
  const [list, setList] = React.useState<IPokeList[]>([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(false);

  // Define table columns
  const columns: IWuTableColumnDef<IPokeList>[] = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      {
        accessorKey: "url",
        header: "Details",
        cell: ({ row }) => (
          <WuButton
            variant="iconOnly"
            icon={<span className="wi-logo"></span>}
            onClick={() => handleShowModal(row.original.name)}
            aria-label={`View details of ${row.original.name}`}
          />
        ),
      },
    ],
    []
  );

  // Fetch Pokémon list
  const [pagination, setPagination] = React.useState({ offset: 0, limit: 5 });
  React.useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setIsLoading(true);
        const data = await getPokemonList(pagination);
        setList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      }
    };
    fetchPokemonList();
  }, [pagination]);

  // Modal handlers
  const handleShowModal = (pokemonName: string) => {
    setSelectedPokemon(pokemonName);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container">
      <h1>Pokédex</h1>
      <div className="space"></div>
      <WuDataTable
        className="table"
        columns={columns}
        data={list}
        pagination={{
          enabled: true,
          initialPage: 0,
          initialPageSize: 5,
          totalRows: 300,
          onPageChange: (e) => setPagination((p) => ({ ...p, offset: e })),
          onPageSizeChange: (e) => setPagination((p) => ({ ...p, limit: e })),
        }}
        isLoading={isLoading}
      />
      {selectedPokemon && (
        <Modal
          open={!!selectedPokemon}
          name={selectedPokemon}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Pokemon;
