# Página: Capacitação Técnica e Formação Profissional em Ornitologia (Serviço)

Status: **implementada** — build passa. Aguarda troca de imagem provisória e conexão do card no hub.

## Frames Figma

- Mobile: `Celular_Monitoramento de aves e estudos de avifauna` (`2611:847`), 360 × 3808.
- Desktop: `Desktop_Monitoramento de aves e estudos de avifauna` (`2620:940`), 1024 × 2614.

NOTA: Ambos os frames têm títulos enganosos ("Monitoramento de aves") mas o conteúdo real é "CAPACITAÇÃO TÉCNICA E FORMAÇÃO PROFISSIONAL EM ORNITOLOGIA" (confirmado no selection-analysis.md frames 33/37).

Screenshots:
- `design-assets/figma-exports/selection/mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2611_847.png`
- `design-assets/figma-exports/selection/desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_940.png`

## Rota

- `src/pages/consultoria/capacitacao-tecnica.astro`
- Rota: `/consultoria/capacitacao-tecnica`

## Conteúdo-chave do Figma

Título: `CAPACITAÇÃO TÉCNICA E FORMAÇÃO PROFISSIONAL EM ORNITOLOGIA`

Serviços:
> Treinamento em métodos de coleta de dados; Treinamento em análise de mudas e classificação de idade; Formação para guias e condutores de observação de aves; Cursos e oficinas em ornitologia e ecologia das aves; Assistência técnica para coleta de dados de campo para projetos de pesquisa (iniciação científica, mestrado e doutorado).

Diferenciais do OAMa:
> Instrutores habilitados e certificados nacional e internacionalmente; Sistema padronizado de ensino-aprendizagem; Práticas realizadas seguindo ética profissional; Formação baseada em atividades práticas supervisionadas; Integração entre teoria e campo.

Público potencial:
> Estudantes e profissionais da área ambiental; Observadores de aves e da natureza; Universidades e institutos de pesquisa; Administração pública e organizações do terceiro setor; Empresas de consultoria ambiental.

## Arquivos permitidos

- `src/pages/consultoria/capacitacao-tecnica.astro`
- `docs/implementation/pages/capacitacao-tecnica-servico.md`

Não altere: Sanity, package.json, astro.config, Nav, Footer, BaseLayout, WaveDark, outras páginas.

## Decisões de implementação

- **Padrão visual:** Espelho fiel de `src/pages/consultoria/monitoramento-de-aves.astro` e `src/pages/consultoria/educacao-ambiental.astro`. Mesma sequência de seções, mesmo ritmo cromático (#5ba4d9 → #dfb553 → #fbf5e6 → #5ba4d9 → #dfb553 → #fbf5e6) e mesmos `WaveDark` entre seções. Garante consistência entre as três páginas-irmãs sob `/consultoria/*`.
- **Tipografia:** Mesma escala usada nas irmãs (Oswald uppercase para títulos, Montserrat para corpo), tokens `text-oama-yellow` / `text-oama-ink` reutilizados.
- **Quebra de título no hero:** "Capacitação Técnica e Formação Profissional em Ornitologia" é mais longo que os títulos irmãos. Aplicado `<br class="md:hidden" />` antes de "Profissional em Ornitologia" para evitar overflow no mobile (~360px) e ficar em uma única linha no desktop (`md:text-[40px]`).
- **Ícones do Público potencial:** Reaproveitados os cinco ícones SVG já presentes no padrão (building, shield, flask, industry, tree). Mapeamento usado:
  - Estudantes e profissionais da área ambiental → `flask` (pesquisa/formação científica).
  - Observadores de aves e da natureza → `tree` (natureza/observação).
  - Universidades e institutos de pesquisa → `building` (instituições acadêmicas).
  - Administração pública e organizações do terceiro setor → `shield` (proteção/poder público).
  - Empresas de consultoria ambiental → `industry` (setor empresarial).
- **CTAs:** Botão amarelo `Falar por e-mail` usa `mailto:contato@oama.eco.br` com `subject` URL-encoded específico desta frente ("Capacitação Técnica e Formação Profissional em Ornitologia - Orçamento"). Link textual alternativo também direciona para o mesmo e-mail.
- **Newsletter:** Mantido como demonstração visual — `<form method="post" onsubmit="event.preventDefault();">` sem `action="#"`, com aviso explícito "Formulário ilustrativo". Idêntico ao das páginas irmãs para preparar integração futura.
- **Voltar:** Link "Voltar para Prestação de Serviços" aponta para `/consultoria` (rota válida existente, não usa `href="#"`).
- **Sem dependências novas:** apenas `BaseLayout` + `WaveDark`, ambos pré-existentes. Sem alteração de `package.json`, `astro.config.mjs`, `sanity.config.ts`, Nav ou Footer.
- **Sem `href="#"` e sem `action="#"`:** auditado — todos os links são `mailto:` válidos ou rotas internas reais.

## Imagem do hero (provisória)

- URL atual: `https://images.unsplash.com/photo-1444930694458-01babe71870e?auto=format&fit=crop&w=1600&q=80`.
- Motivo: as páginas irmãs também usam Unsplash como placeholder até o material definitivo do OAMa entrar.
- `alt`: "Pessoas em campo observando aves com binóculos durante atividade de capacitação".
- **Substituir por:** foto real de curso/oficina do OAMa (de preferência um treinamento prático em campo, anilhamento ou análise de mudas), idealmente >= 1600px de largura, formato WebP via Sanity.

## Critérios de aceite

- [x] Rota `/consultoria/capacitacao-tecnica` criada.
- [x] Seguir padrão de `consultoria/monitoramento-de-aves.astro`.
- [x] Hero com eyebrow "Prestação de Serviços".
- [x] Seções: Serviços, Diferenciais, Público potencial.
- [x] CTA "Fale conosco" via `mailto:contato@oama.eco.br`.
- [x] Newsletter visual sem `action="#"`.
- [x] Link "Voltar para Prestação de Serviços" → `/consultoria`.
- [x] Sem `href="#"` ou `action="#"`.
- [x] Layout responsivo (mobile-first, breakpoint `md`).
- [x] Build passa.

## Resultado do build

Comando executado:

```bash
PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado:

```
15:01:46 ▶ src/pages/consultoria/capacitacao-tecnica.astro
15:01:46   └─ /consultoria/capacitacao-tecnica/index.html (+3ms)
...
15:01:46 [build] 18 page(s) built in 10.72s
15:01:46 [build] Complete!
```

Build verde. Página entra junto das irmãs `consultoria/monitoramento-de-aves` e `consultoria/educacao-ambiental` na geração estática. Warnings restantes são pré-existentes e não relacionados (chunk size do Sanity Studio e deprecation de `@sanity/image-url`).

## Pendências

- **Imagem provisória do hero:** substituir foto Unsplash por foto autoral do OAMa (curso/oficina real). Atualizar `alt` se necessário.
- **Conectar card do hub:** em `src/pages/consultoria.astro`, a terceira frente "Capacitação Técnica e Formação Profissional em Ornitologia" ainda não tem `href`. Adicionar `href: "/consultoria/capacitacao-tecnica"` ao item correspondente do array `frentes` (fora do escopo desta tarefa — depende de revisão do Hermes do arquivo `consultoria.astro`).
- **Integração da newsletter:** o formulário continua ilustrativo. Conectar com provedor (Mailchimp/Brevo/Sanity) quando definido.
- **Conteúdo via Sanity:** se no futuro o time quiser editar serviços / diferenciais / público sem mexer no código, migrar os arrays `servicos`, `diferenciais` e `publico` para um schema Sanity (`servicoConsultoria`) compartilhado pelas três páginas-irmãs.
- **Acessibilidade adicional:** considerar `aria-labelledby` nas `<section>` usando o `id` da `<h2>` quando o time padronizar; manter consistência com as irmãs primeiro.
