import {
  WuLoader,
  WuModal,
  WuModalClose,
  WuModalContent,
  WuModalFooter,
  WuModalHeader,
} from "@npm-questionpro/wick-ui-lib";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../utils/service";
import { IPokemonDetails } from "../utils/types";
import PokemonDetails from "../widgets/PokemonDetails";

interface IModalProps {
  name: string;
  open: boolean;
  onClose: (open: boolean) => void;
}
export default function Modal({ name, open, onClose }: IModalProps) {
  const [data, setData] = useState<IPokemonDetails>();

  useEffect(() => {
    const fetchData = async () => {
      const d = await getPokemonDetails(name);
      setData(d);
    };
    fetchData().catch((e) => console.log(e));
  }, [name]);
  return (
    <>
      <WuModal open={open} onOpenChange={(open) => onClose(open)}>
        <WuModalHeader>
          {data?.name?.toUpperCase() || "Loading..."}
        </WuModalHeader>
        <WuModalContent>
          {!data ? <WuLoader /> : <PokemonDetails data={data} />}
        </WuModalContent>
        <WuModalFooter>
          <WuModalClose>Close</WuModalClose>
        </WuModalFooter>
      </WuModal>
    </>
  );
}
