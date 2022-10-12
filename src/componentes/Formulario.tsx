import { useRef, useState } from "react";
import { useAddParticipante } from "../state/hooks/useAddParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemErro";

export function Formulario() {
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const adicionarParticipante = useAddParticipante();
  const mensagemDeErro = useMensagemDeErro();


  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const changedValue = e.target.value;
    setNome(changedValue)
  };

  function addParticipante(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    adicionarParticipante(nome);
    setNome('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipante}>
      <input
        type="text"
        placeholder='Insira os nomes dos participantes'
        value={nome}
        onChange={handleFormChange}
        ref={inputRef}
      />
      <button disabled={!nome}>Adicionar</button>
      {console.log(mensagemDeErro)}
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
};