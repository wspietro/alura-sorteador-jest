import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export const Rodape = () => {

  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  function handleInciarBrincadeira() {
    navegarPara('/sorteio')
  }

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={handleInciarBrincadeira}>Iniciar brincadeira</button>
    </footer>
  );
};