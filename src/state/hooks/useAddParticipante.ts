import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom";

export const useAddParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  return (nomeDoParticipante: string) => {
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  };
};