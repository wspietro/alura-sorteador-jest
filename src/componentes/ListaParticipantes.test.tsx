import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { ListaParticipantes } from "./ListaParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
});

describe('Uma lista inicialmente vazia de participantes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  });

  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  })
});

describe('Uma lista preenchida de participantes', () => {
  const participantes = ["Participante 1", "Participante 2"]
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  });

  test('deve ser renderizada com elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantes.length);
  })
});