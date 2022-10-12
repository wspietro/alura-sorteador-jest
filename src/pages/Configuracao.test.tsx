import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import { Configuracao } from "./Configuracao";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
});

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    // teste de snapshoot para uma tela apenas visual
    expect(container).toMatchInlineSnapshot(`
<div>
  <form>
    <input
      placeholder="Insira os nomes dos participantes"
      type="text"
      value=""
    />
    <button
      disabled=""
    >
      Adicionar
    </button>
    
  </form>
  <ul />
  <footer>
    <button
      disabled=""
    >
      Iniciar brincadeira
    </button>
  </footer>
</div>
`);
  });
});