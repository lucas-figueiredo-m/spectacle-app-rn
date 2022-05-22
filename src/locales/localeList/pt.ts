export default {
  common: {
    continue: 'Continuar',
    email: 'E-mail',
    password: 'Senha',
    confirmPassword: 'Confirme sua senha'
  },
  screens: {
    signIn: {
      enter: 'Entrar',
      or: 'ou',
      newUser: 'Novo por aqui?',
      register: ' Cadastre-se!',
      invalidEmail: 'Insira um e-mail válido'
    },
    signUp: {
      title: 'Cadastrar',
      register: 'Cadastrar',
      invalidEmail: 'Insira um e-mail válido',
      passwordUnmatch: 'As senhas devem ser iguais'
    }
  },

  components: {},

  tabNames: {
    movies: 'Meus Filmes',
    musics: 'Minhas Músicas',
    settings: 'Ajustes'
  },

  error: {
    wifi: {
      title: 'Voce está desconectado!',
      message: 'Não se preocupe. Tudo será sincronizado ao conectar-se novamente'
    },
    firebase: {
      register: {
        title: 'E-mail em uso',
        message: 'Este e-mail já consta em nossa base. Por favor, utilize outro e-mail'
      },
      login: {
        title: 'Erro ao fazer login',
        message: 'Usuário ou senha inválidos'
      }
    }
  },

  success: {
    firebase: {
      register: {
        title: 'Cadastro realizado',
        message: 'Seu cadastro foi realizado com sucesso!'
      }
    }
  }
}
