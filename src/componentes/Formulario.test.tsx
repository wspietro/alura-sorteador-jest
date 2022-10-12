import { fireEvent, render, screen } from "@testing-library/react";
import { Formulario } from "./Formulario"
// Jest
// 'test' -> função fornecida pela jest que aceita 2 argumentos: Uma string dizendo o que o teste irá fazer e uma função onde fazemos a implementeção do teste

// Precisamos encontrar o Input e o Botão na DOM;
// Garantir que o Input esteja no documento e que o botão esteja desabilitado;
test('quando o input está vazio, novos participantes não podem ser adicionados', () => {

  render(<Formulario />);

  // Econtrar input na DOM (por placeholder)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  // Econtrar botao na DOM (por responsabilidade)
  const button = screen.getByRole('button');


  // Garantir que input esteja no documento
  expect(input).toBeInTheDocument();
  // Garantir que o botão esteja desabilitado
  expect(button).toBeDisabled();
});


test('adicionar participante caso exista um nome preenchido', () => {
  render(<Formulario />);

  // Econtrar input na DOM (por placeholder)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  // Econtrar botao na DOM (por responsabilidade)
  const button = screen.getByRole('button');


  // inserir valor no input
  fireEvent.change(input, {
    target: {
      value: 'Nome do Participante'
    }
  });
  // clicar no botao de submeter
  fireEvent.click(button);


  // garantir que o input esteja limpo e com o foco ativo
  expect(input).toHaveValue("");
  expect(input).toHaveFocus();

})
