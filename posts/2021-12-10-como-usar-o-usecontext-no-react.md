---
title: Como usar o useContext no React
description: Um breve tutorial com dicas praticas de uso no useContext
date: 2021-12-10 11:58:05
thumbnail: assets/img/usecontext-hook-twitter.png
category: react
background: "#B31917"
image: "/assets/img/desert.jpg"

---
# **Comparações**

Poucos sabem mais o React já teve uma “[API de context](https://pt-br.reactjs.org/docs/legacy-context.html)o” antes da implementação dos hooks. O contexto era “embutido” no this do componente, que disponibilizava métodos auxiliares para acessar o mesmo.\
A principal dificuldade em utilizar essa forma de contexto era gerenciar como ele era passado entre os componentes, por isso essa API nunca foi muito utilizada, sempre que havia necessidade de usar uma forma de “state global” optávamos por implementações como [redux](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwi36PKVvdToAhVrHLkGHS9FBcMQFjABegQIAxAB&url=https%3A%2F%2Fredux.js.org%2Fintroduction%2Fgetting-started&usg=AOvVaw3poOhKKu-c0Wtpt9_zhNLR), [effector](https://effector.now.sh/), etc …

Aqui segue um exemplo simples de como era sua implementação

Antiga API de contexto — [gist completo](https://gist.github.com/dev-jpnobrega/e880a4cd935bd76beed8a0e5a9670451)

Note que dentro do componente **MessageList** temos o método `getChildContext` que define o contexto que será passado para os filhos, `childContextTypes` e `contextTypes` definem os tipos das propriedades esperadas dentro do contexto.

![UseContext](assets/img/usecontext-hook-twitter.png "ReactHooks")

Dentro da nova API de contexto cada objeto *context* vem com dois componentes `Provider`e `Consumer;
Provider` permite componentes consumidores assinarem mudanças no contexto.\
`Consumer`é utilizado nos componentes que precisam consumir o valor daquele contexto.

Está segregação nos permite utilizar o `Consumer` só nos componentes que terão necessidade de consumir aquele contexto.

Nota, um consumidor já mais altera o estado do contexto, se você tem componentes alinhados que precisam atualizar o contexto a partir de componentes filhos, você pode passar uma função dentro do contexto permitindo que, componentes filhos atualizem o contexto (o exemplo abaixo mostra essa implementação).

Vou deixar um exemplo simples de como utilizar a nova API (deixei alguns comentários no código para mostrar o passo a passo).