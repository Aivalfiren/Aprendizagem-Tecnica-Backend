
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(usuariosCadastrados: TUsuario[], novoUsuario: TUsuario): TUsuario[] | string {

  for (let usuario of usuariosCadastrados) {
    if (usuario.email === novoUsuario.email) {
      return 'E-MAIL INVALIDO';
    }
  }
  usuariosCadastrados.push(novoUsuario);
  return usuariosCadastrados;

}


export default solucao;
