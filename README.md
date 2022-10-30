# React Hooks Custom Typescript

Lista com react hooks customizados para se usar no dia a dia

Foi usado no projeto o vite + typescript com eslint, prettier, husky e lint-staged.

## Antes de mais nada!

Contribua mandando uma PR para nos ajudar a corrigir ou melhorar algum código ou ainda incluir um novo hook na lista.

## Lista de todos os **29** Hooks: (em construção)

### **useArray**

Hook que permite trabalhar com arrays lhe retornando funções úteis como: push, filter, update, remove e clear.

### **useAsync**

Hook que permite controlar uma promise, ou seja, algo assincrono, obtendo metodos como loading, error e o valor.

### **useClickOutside**

Hook muito necessário para quando queremos garantir que ocorreu um clique fora do elemento que esta em foco no momento, como por exemplo um modal.

### **useCookie**

Hook criado para salvar, retornar e até deletar de forma mais simples um cokie em sua aplicação.

### **useCopyToClipboard**

É um hook especial para copiarmos o conteúdo da área de transferência.

### **useDarkMode**

Um simples hook que te permite criar facilmente um toggle para alternar entra modo claro e escuro de sua aplicação.

### **useDebounce**

Um dos hooks mais utilizados, feito com objetivo de, onde for adicionado, aguardar um tempo antes de executar chamadas o que é perfeito para evitar chamadas necessárias a aplicações e ao banco de dados.

### **useDebuginformation**

Hook criado para trazer informações de debug referentes aos hooks utilizados em sua aplicação.

### **useDeepCompareEffect**

É um hook selemelhante ao useEffect, inclusive em seu uso, porém tem o objetivo de fazer uma comparação profunda de referências, ou seja, os valores reais que são passados pra ele.

### **useEffectOnce**

Um simples hook feito para executar de fato apenas uma vez durante o ciclo de visa de sua aplicação.

### **useEventListener**

Um hook que torna mais facil ouvir eventos de elementos a que se tem interesse e ja removelo, tornando isso super direto.

### **useFetch**

Como seu nome já sugere, é um hook focado em cuidar de uma chamada http utilizando a lib fetch e permitindo ter acesso ao clico de vida da chamada, como por exemplo saber se ainda esta sendo carregada.

### **useGeolocalization**

Hook simples para retornar as informações de localicazação (longitude e latitude) com base no navegador do usuário, com estado de loading e até erro caso ocorra.

### **useHover**

Hook baseado na escuta do passar do mouse dentro e fora de elementos o que permite executar uma ação de forma simples nestes casos.

### **useLongPress**

Hook que permite capiturar de forma simples se um elemento esta sendo clicado de fato por muito tempo. Muito útil também em aplicações executadas em dispositivos móveis.

### **useMediaQuery**

Hook que permite de fato estilizar e/ou renderizar componentes baseados em media queries dentro do jsx.

### **useOnlineStatus**

Hook simples para checar se um usuário esta online ou offline.

### **useOnScreen**

Hook que permite identificar se o elemento na tela com base em sua referência esta visível ao usuário.

### **usePrevious**

Hook criado para que seja possível salvar e voltar a um estado anterior do seu componente como de um contador por exemplo.

### **useRenderCount**

Hook simples criado para rastrear quantas vezes ocorre renderização na tela.

### **useScript**

Um hook com foco em permitir carregar um script externo dentro de seu projeto, como por exemplo o famigerado JQuery.

### **useSize**

Hook que retorna todos os detalhes referente ao tamanho e posição de um elemento na tela e o atualiza conforme o seu tamanho altere.

### **useStateWithHistory**

Este hook lida de uma forma simples com a utilização e navegação de componentes com histórico.

### **useStateWithValidation**

Um hook simples para controlar o estado de validação de um input.

### **useStorage**

Um hook essencial que facilita e permite salvar, pegar e até remover dados no storage do browser, escolhendo entre localStorage e sessionStorage.

### **useTimeout**

Como seu nome sugere, é um hook baseado na função do javascript setTimeOut, porém de forma mais simples o permitindo criar, limpar e resetar o valor, além de claramente executar após a sua configuração sua função de callback.

### **useToggle**

Simples hook para controlar componentes toggle onde precisamos saber se esta ativo ou inativo, ou até mesmo leva-lo para o valor não sendo só o caso de alterar entre eles.

### **useTranslation**

Um hook como o nome sugere, focado em tradução, que permite que facilmente seja setado a linguagem em sua aplicação e todos os pontos sejam alterados de forma simples.

### **useUpdateEffect**

Hook simples e que executa apenas sua função de callback quando de fato algo é atualizado, ao contrario do useEffect que sempre é executado.

### **useWindowSize**

Como fica claro em seu nome, este hook, é um simples hook que retorna de forma atualizada a largura e altura da janela.

### **useAuth** (em progresso (beta))

Hook criado para abstrair a complexidade de criar e gerir autenticação no projeto. Ele é baseado na context-api.
