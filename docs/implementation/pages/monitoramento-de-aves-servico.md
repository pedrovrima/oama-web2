# Página: Serviço de Monitoramento de Aves e Estudos de Avifauna

Status: **implementada** (versão inicial, sem novas dependências).

## Rota

- Arquivo: `src/pages/consultoria/monitoramento-de-aves.astro`
- URL: `/consultoria/monitoramento-de-aves`

## Frames Figma de referência

- Mobile: `Celular_Monitoramento de aves e estudos de avifauna` (`2610:569`), 360 × 3653.
- Desktop: `Desktop_Monitoramento de aves e estudos de avifauna` (`2620:831`), 1024 × 2614.
- Imagens de referência:
  - `design-assets/figma-exports/selection/mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2610_569.png`
  - `design-assets/figma-exports/selection/desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_831.png`

## Decisões de implementação

### Padrão seguido
A página segue o mesmo padrão das sub-páginas irmãs (`programas-e-projetos/acoes-pro-aves.astro`, `programas-e-projetos/monitoramento-de-avifauna.astro`):
- Hero com imagem, overlay escuro, eyebrow + título + faixa amarela inferior.
- Seções alternando cores (`#5ba4d9` azul, `#dfb553` amarelo, `#fbf5e6` cream) com transições `WaveDark`.
- Listas com marcador de check circular branco, igual ao padrão dos arquivos irmãos.
- CTA mailto + newsletter visual + link "Voltar".

### Paleta de cores
Diferente da consultoria.astro hub (que usa amarelo como cor principal do front "Monitoramento de Aves"), o Figma da sub-página usa **azul** como cor dominante (seção "Serviços") e amarelo na seção "Diferenciais". Mantida essa leitura visual do Figma:
- Hero: foto de campo com overlay preto.
- **Serviços**: fundo `#5ba4d9` (azul).
- **Diferenciais do OAMa**: fundo `#dfb553` (amarelo).
- **Público potencial**: fundo `#fbf5e6` (cream) com cards brancos e ícones azuis — interpretação da área com ícones circulares vista no Figma desktop.
- **Fale conosco**: fundo `#5ba4d9` (azul), botão mailto em amarelo.
- **Newsletter**: fundo `#dfb553` (amarelo), botão "Enviar" branco.
- **Voltar**: fundo `#fbf5e6` (cream).

### Seções implementadas
1. Hero — eyebrow "Prestação de Serviços" + título "MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA".
2. **Serviços** — lista com 6 itens (inventários; monitoramento de longo prazo; diagnósticos; manejo em conflitos; relatórios/pareceres; análise de dados).
3. **Diferenciais do OAMa** — lista com 3 itens (equipe qualificada; bem-estar animal; metodologias padronizadas).
4. **Público potencial** — 5 cards/badges (consultorias ambientais, órgãos ambientais, universidades/institutos, empreendimentos, unidades de conservação) com ícone SVG inline.
5. **Fale conosco** — CTA mailto (`contato@oama.eco.br?subject=...`) com assunto pré-preenchido sobre orçamento do serviço.
6. **Newsletter visual** — formulário ilustrativo com `method="post"` e `onsubmit="event.preventDefault();"` (sem `action="#"`).
7. **Voltar para Prestação de Serviços** — link para `/consultoria`.

### Imagens provisórias
- Foto do hero: `https://images.unsplash.com/photo-1591608971362-f08b2a75731a` (anilhador segurando ave). **PROVISÓRIA** — substituir por foto real de campo do OAMa quando disponível.

### Decisão de modelagem
Todo o conteúdo é **hardcoded** no frontmatter. Por se tratar de página de serviço com conteúdo estável e o briefing não solicitar modelagem Sanity, optou-se por manter como texto no código, seguindo o padrão das outras sub-páginas. A página hub `/consultoria` continua listando o serviço no card de navegação.

## Pendências
- [ ] Trocar a foto de hero provisória por uma foto real de campo do OAMa.
- [ ] Decidir modelagem Sanity para serviços (uma coleção `servicos` com referências às sub-páginas) — não urgente, página pode permanecer hardcoded.
- [ ] Conectar o card da sub-página ao hub `/consultoria` substituindo o `href="#monitoramento-de-aves"` pelo link real `/consultoria/monitoramento-de-aves` (alteração fora do escopo desta task).

## Critérios de aceite

- [x] Rota `/consultoria/monitoramento-de-aves` criada.
- [x] Hero com eyebrow "Prestação de Serviços" e título "MONITORAMENTO DE AVES E ESTUDOS DE AVIFAUNA".
- [x] Seções: Serviços, Diferenciais do OAMa, Público potencial.
- [x] CTA "Fale conosco" como `mailto:contato@oama.eco.br`.
- [x] Newsletter visual sem `action="#"` (usa `method="post"` + `onsubmit="event.preventDefault();"`).
- [x] Link "Voltar para Prestação de Serviços" apontando para `/consultoria`.
- [x] Layout responsivo, consistente com páginas irmãs.
- [x] Sem `href="#"` ou `action="#"` no código.
- [x] Build passa (ver resultado abaixo).

## Resultado do build

Comando:

```bash
PATH="/Users/anhinga/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" npm run build
```

Resultado: **sucesso**. 15 páginas geradas em 8.13s, sem erros. A nova rota foi emitida:

```
src/pages/consultoria/monitoramento-de-aves.astro
  └─ /consultoria/monitoramento-de-aves/index.html (+1ms)
```

Aviso pré-existente (não relacionado a esta task): chunks grandes no bundle do Sanity Studio / VideoPlayer; não impacta a página nova.
