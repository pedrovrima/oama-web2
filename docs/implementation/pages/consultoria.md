# Página: Consultoria / Prestação de Serviços

Status: **revisada e encurtada pela PED-32**.

## Rota final escolhida

- `src/pages/consultoria.astro`

O menu principal (`Nav.astro`) e o footer foram atualizados para apontar “Prestação de Serviços” para `/consultoria`. A rota antiga/candidata `/servicos` fica como possível alias/redirect futuro, se necessário.

## Leitura operacional atual

- O entendimento do Figma para `/consultoria` é de **hub visual relativamente curto**, com:
  - hero forte;
  - bloco introdutório em azul;
  - 3 cards principais de frentes;
  - grade de diferenciais;
  - grade de clientes/logos;
  - formulário de contato.
- A versão anterior do Astro expandia demais o conteúdo detalhado dentro do hub.
- A PED-32 reorientou a rota para o papel correto de hub, deixando o detalhamento principal para as páginas filhas.

## Resultado da PED-32

- `src/pages/consultoria.astro` foi reescrita.
- O hub agora contém:
  - hero com título simples;
  - bloco introdutório curto;
  - 3 cards principais de navegação;
  - bloco “Por que escolher o OAMa?”;
  - bloco de clientes;
  - formulário/CTA de contato.
- O conteúdo longo por frente foi removido desta rota e mantido para as páginas filhas.

## Decisões de implementação

- **Stack:** Astro + Tailwind v4, sem dependências novas.
- **Conteúdo:** hardcoded nesta fase, sem schema Sanity novo.
- **Padrão visual:** hero + bloco azul + cards + blocos modulares + formulário.
- **Tipografia:** Oswald para títulos; Montserrat para corpo.
- **Frentes exibidas no hub:**
  - monitoramento de aves e estudos de avifauna
  - educação ambiental e comunicação científica
  - capacitação técnica e formação profissional em ornitologia
- **Cursos** continuam como página filha existente, mas não como card principal do hub, seguindo melhor a leitura visual do Figma desktop.
- **Clientes e logos** foram representados de forma simplificada/hardcoded nesta rodada.
- **Formulário** foi implementado como bloco visual local, com submissão neutra (`preventDefault`) até definição de integração real.

## Arquivos alterados

- `src/pages/consultoria.astro` (criado)
- `docs/implementation/pages/consultoria.md` (este doc)
- `src/components/nav/Nav.astro` (link “Prestação de Serviços” atualizado para `/consultoria`)
- `src/components/sections/Footer.astro` (links de Áreas, Programas e Prestação de Serviços atualizados para rotas existentes)

## Pendências

1. **Refino visual fino.** Ajustar imagens, logos e microespaçamento caso o arquivo Figma completo exija correspondência mais específica.
2. **Formulário real.** Definir integração real de envio quando o canal oficial estiver decidido.
3. **Sanity.** Quando o conteúdo for gerenciado por CMS, modelar `consultoria` + `frenteDeAtuacao`.
4. **Páginas filhas.** A próxima frente operacional é revisar as páginas filhas na `PED-34`.

## Resultado do build

Verificar rodando:

```bash
PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" \
  npm run build
```

O resultado concreto do build (sucesso/erros) deve ser registrado na seção
abaixo após a execução.

### Execução

- Comando: `PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build`
- Resultado: **sucesso** em ~7,8s. 7 páginas geradas, incluindo
  `src/pages/consultoria.astro → /consultoria/index.html`. Único alerta
  existente (chunks > 500 kB) já estava presente antes desta task e não
  está relacionado a `consultoria.astro`.
