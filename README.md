<h1 align="center">Rocket.Q - PT-BR</h1>

<div align="center">
  <img src="https://i.imgur.com/Jy4x9Cn.gif" >
</div>

<h2>Do que se trata a aplicação?</h2>
<p>Rocket.Q foi uma aplicação desenvolvida durante a NLW - together, juntamente com a Rocketseat. </p>
<p>Ela tem o ofício de criar salas com senha para que quaquer pessoa, ao copiar o código da sala, possa entrar e fazer perguntas anônimas, mas apenas o dono da sala, ou outra pessoa que tenha a senha, possa marcar a pergunta como lida ou deletá-la.</p>

<hr>

<h3>Como a aplicação foi desenvolvida?</h3>
   
<p> A aplicação foi desenvolvida inteiramente com EJS, CSS, Javascript - usando Node, Express - e SQLite como banco de dados.</p> 

<hr>

### Como funciona a aplicação?

+ A aplicação funciona da seguinte forma. Assim que o usuário entra, ele é mandado diretamente para a rota de "home", onde ele terá duas opções de caminhos.

+ Ou ele tem um código de sala, copia e cola ele na parte de 'entrar em uma sala', ou ele pode criar a sala de maneira bastante simples, em uma página diferente.

+ Os códigos das salas são gerados aleatoriamente por meio de um algoritmo, ao passo que a senha da sala é escolhida pelo usuário ao realizar a criação dela.

+ Uma sala, assim que é criada, não possui nenhuma pergunta, portanto, é colocado, no template do EJS, uma interface de 'sem nenhuma pergunta'. Quando uma pergunta é adicionada, a interface é trocada dinamicamente pela pergunta e as perguntas subsequentes.

+ Quando o botão de 'marcar como lida' é acionado, o programa pede para o usuário digitar a senha da sala, impedindo que qualquer um tenha acesso ás mudanças nas perguntas.

+ Se o usuário escrever a senha corretamente, então a pergunta ficará com um tema acinzentado e será enviada para as últimas posições do queue de perguntas.

+ O processo de exluir é semelhante ao de marcar como lida. Contudo, ao excluir uma pergunta, ele irá, de fato, retirá-la do banco de dados e ela sumirá da interface da aplicação.

+ Quando todas as perguntas são removidas, a interface de 'sem nenhuma pergunta' volta a aparecer, até que uma pergunta seja escrita.

### Sobre a experiência:

+ A experiência de construir essa aplicação junto com o pessoal da Rocketseat foi única. A aplicação é extremamente util e foi de grande aprendizado.

+ Foi possível aprender sobre padrões front-end, integração do backend com o front-end e interação do node com o banco de dados para buscar, setar ou deletar informações.

+ Também foi de grande valia o aprendizado acerca do dinamismo na geração de interfaces com o EJS, que, por aceitar dentro de sua estrutura códigos Javascript, também é capaz de alterar o seu conteúdo de acordo com diferentes condições.

+ Em suma, a NLW foi de extremo valor e, certamente, ninguém que participou dela saiu da mesma forma que entrou! 


