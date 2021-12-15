---
title: Como usar o useState na prática
description: Aprenda da forma mais fácil e prática possivel dominar esse Hook do
  React fazendo um contador simples
date: 2021-12-15 04:17:35
thumbnail: https://miro.medium.com/max/3000/1*-Ijet6kVJqGgul6adezDLQ.png
category: react
background: "#5ed3f3"
---
Vamos aprender na prática como usar o useState e manipular o state **fazendo um simples contador no qual você aperta um botão e o valor muda na tela sem precisar atualizar nada**, apenas com **algumas linhas de códigos.**

![Contador](assets/img/cont.gif "Contador")

Segundo a documentação do React:

**O que o `useState` faz?** Ele declara um variável state. Nossa variável é chamada de `count` mas poderíamos chamar de qualquer coisa, como `banana`. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções — `useState` é uma nova maneira de usar as mesmas capacidades que o `this.state` tem em uma classe. Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.

Após da um `npx react-create-app my-app,` vamos abrir o App.Js e importar o useState e fazer uma simples interface:

```javascript
import React, { useState } from 'react'
//importando o useState

import './App.css';

function App() {


  return (
    <div className="App">
      
      <p>Contador = <b>0</b></p>
      <button>Add +1</button>

    </div>
  );
}

export default App;
```

Tendo esse resultado: 

![Contador](assets/img/cont.gif "Contador")

Ao declarar o useState:

```javascript
const [variavel, funcao] = useState(0)

//vamos declarar a variavel com quantProd
//vamos declarar a funcao com setProd
//o 0 é definido para o state
```

Ficando assim:

```javascript
import React, { useState } from 'react'
import './App.css';

function App() {

  const [quantProd, setProd] = useState(0);

  return (
    <div className="App">

      <p>Contador = <b>0</b></p>
      <button>Add +1</button>

    </div>
  );
}

export default App;
```

Agora vamos definir a funcão `setProd`e trocar os valores estáticos pelas variaveis no restante do codigo, assim como atribuir o `onClick` ao `button` com a função correspondente:

```javascript
import React, { useState } from 'react'
import './App.css';

function App() {
  const [quantProd, setProd] = useState(0);
  //variavel 
  function addProd(){
    setProd(quantProd + 1)
  }
  //funcao adicionando +1 para variavel
  return (
    <div className="App">
      <p>Contador = <b>{quantProd}</b></p>
      //variavel do state
      <button onClick={addProd}>Add +1</button>
      //funcao ao clicar
    </div>
  );
}

export default App;
```

Resultado:

![Resultado ](assets/img/cont.gif "Resultado")