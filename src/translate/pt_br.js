const PT_BR = {
  translation: {
    http: {
      connect: {
        title: 'Connect',
        paragraph: [
          'Inicia uma comunicação de dois sentidos com o servidor, é utilizado para abrir um tunel entre a requisição e o servidor.',
          'Podendo ser utilizado para acessar websites que usam SSL(HTTPS).'
        ]
      },
      delete: {
        title: 'Delete',
        paragraph: ['Deleta um recurso específico do banco.']
      },
      get: {
        title: 'Get',
        paragraph: [
          'São utilizados para requisitar informações ao servidor, porém não incluem um body na requisição.'
        ]
      },
      head: {
        title: 'Head',
        paragraph: [
          'Ele pega apenas o header de uma requisição para ver seu conteúdo, por exemplo, se uma URL fosse produzir um download grande, o HEAD conseguiria ler esta requisição sem necessáriamente fazer o download do conteúdo, apenas vendo o Content-Length.'
        ]
      },
      options: {
        title: 'Options',
        paragraph: ['Especifica as opções de permissão de comunicação da URL ou servidor.']
      },
      patch: {
        title: 'Patch',
        paragraph: [
          'É como o "put" ou "update" de um CRUD, porém diferente do PUT que atualiza uma entrada inteira no servidor, o patch é considerado um set de instruções de como modificar um recurso no banco de dados e aplicar modificações parciais ao recurso do banco.'
        ]
      },
      post: {
        title: 'Post',
        paragraph: [
          'É o método utilizado para enviar informação para o servidor. O tipo do body da solicitação é indicado pelo cabeçalho Content-Type.',
          'A diferença entre PUT e POST é que PUT é idempotente: chamá-lo uma ou várias vezes sucessivamente tem o mesmo efeito (que não é efeito colateral), onde POST idênticos sucessivos podem ter efeitos adicionais, como passar um pedido várias vezes.',
          'Normalmente requisições POST são feitas por forms HTML, gerando assim um carregamento no banco de dados, nesse caso o tipo de content é definido colocando atributo endtype no <form> ou no fornenctype nos elesmentos <input> ou <button>.'
        ]
      },
      put: {
        title: 'Put',
        paragraph: ['Cria um novo recurso ou apenas atualiza um já existente.']
      },
      trace: {
        title: 'Trace',
        paragraph: ['Ajuda a debugar o request fazendo um loop-back pela URL.']
      }
    }
  }
};

export default PT_BR;
