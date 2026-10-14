# Mobile Shop 2026 — Aulas

Repositório didático do projeto **Mobile Shop / MobileTech 2026** para a disciplina de Programação Mobile — 3ª Série.

## Objetivo
Construir, aula a aula, um protótipo funcional em React + Vite, preservando a sequência pedagógica trabalhada em sala.

## Sequência
- Aula 05 — Do Produto ao Carrinho
- Aula 06 — Carrinho Ganha Vida
- Aula 07 — Carrinho Inteligente
- Aula 08 — Calculando o Carrinho
- Aula 09 — Organização e acabamento
- Aula 10 — Checkpoint / Etapa 2

## Escopo 2026
O projeto final é um **protótipo funcional de front-end**. API, banco de dados, backend, autenticação e pagamento real não são requisitos desta etapa.

## Padrão de nomenclatura
Os materiais didáticos usam nomes em português, como `Carrinho.jsx`, `carrinho`, `preco`, `quantidade` e `adicionarProduto`, para manter correspondência direta entre os slides e o código.

## Versões por aula
Cada etapa é mantida em uma branch própria:
- `aula-05`
- `aula-06`
- `aula-07`
- `aula-08`
- `aula-09`
- `aula-10`

Assim o professor pode abrir exatamente a versão correspondente à aula sem antecipar conteúdos posteriores.

## Uso em sala
Antes de iniciar uma aula, selecione a branch correspondente. Exemplo:

```bash
git switch aula-05
```

Depois, nas aulas seguintes, troque apenas para a próxima branch:

```bash
git switch aula-06
git switch aula-07
git switch aula-08
git switch aula-09
git switch aula-10
```

Não é necessário recriar o projeto a cada aula; basta trocar para a branch correta e executar o projeto.
