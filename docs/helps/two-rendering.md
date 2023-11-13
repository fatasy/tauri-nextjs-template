# Entendendo o `reactStrictMode: true` no Next.js

Quando você utiliza `reactStrictMode: true` no Next.js, você ativa o `React.StrictMode`, uma funcionalidade do React que detecta problemas comuns durante o desenvolvimento da aplicação. O `StrictMode` envolve a árvore de componentes em um invólucro de erro, destacando práticas desencorajadas ou obsoletas.

Ao ativar o `StrictMode`, ocorrem duas renderizações de cada componente:

1. **Primeira Renderização:** Registra todos os efeitos colaterais (como `useEffect` e funções `render`).
2. **Segunda Renderização:** Compara os resultados com a primeira renderização e emite avisos se houver discrepâncias.

Essas renderizações duplas são específicas do ambiente de desenvolvimento e ajudam a identificar potenciais problemas antes que afetem a produção. Em produção, o `StrictMode` não causa renderizações duplas, sendo uma ferramenta valiosa para escrever código React mais seguro e eficiente.
