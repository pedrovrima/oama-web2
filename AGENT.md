# AGENT.md — Instruções para Implementação do OAMA Website 2

> **Idioma:** Código/documentação = Português (site brasileiro). Commits em português.
> **Prioridade:** O agente deve perguntar antes de assumir decisões de design.

---

## 📁 Estrutura de Assets do Figma

```
design-assets/
├── figma-exports/       # Export direto do Figma (SVG, PNG)
├── screenshots/
│   ├── mobile/          # Prints mobile (375px ou 390px)
│   └── desktop/         # Prints desktop (1440px)
└── imagens-baixadas/    # Imagens de conteúdo exportadas do Figma
```

---

## 🧩 Regra: Hardcoded vs Sanity CMS

### Hardcoded (texto no código)
- Textos de UI que NÃO mudam (botões, labels, placeholders)
- Textos de SEO (title, meta description por página)
- Textos de navegação (menu, footer links)
- Textos de erro/estado vazio

### Sanity CMS (conteúdo gerenciável)
- Títulos de seções que podem mudar ("Quem Somos", "Nosso Plano de Voo")
- Parágrafos descritivos longos
- Nomes de parceiros/colaboradores
- Depoimentos
- Cards de blog/notícias
- Conteúdo da página "ProAves" e "POI" (dados dinâmicos)
- Imagens que podem ser trocadas (hero, fotos de projeto)

### Dúvida? → Perguntar ao usuário

---

## 🛠️ Stack

- **Framework:** Astro 5 (React islands quando necessário)
- **CSS:** Tailwind CSS v4
- **CMS:** Sanity (schemas em `sanity.config.ts`)
- **Deploy:** Vercel
- **Fontes:** Montserrat, Oswald (`@fontsource`)

---

## 📄 Páginas Existentes

| Página | Status | Arquivo | Observação |
|--------|--------|---------|------------|
| Home | ✅ Feita | `src/pages/index.astro` | Verificar mobile |
| Sobre | 🔄 Em andamento | `src/pages/sobre.astro` | Tem mudanças não commitadas |

---

## 📄 Páginas a Fazer

### Prioridade 1 — Site Principal
- [ ] Blog / Notícias
- [ ] Página de Projeto (template)
- [ ] Contato
- [ ] Doação / Apoie
- [ ] Equipe / Voluntários

### Prioridade 2 — Migração do Site Antigo
- [ ] ProAves
- [ ] POI (Pontos de Interesse)

### Prioridade 3 — E-commerce (use-oama)
> ⚠️ Loja separada — ver projeto `use-oama`. NÃO implementar aqui.

---

## 🎯 Workflow do Agente

1. **Receber screenshot** (mobile + desktop) da próxima página
2. **Analisar componentes reutilizáveis** — usar os já existentes (WaveDark, etc.)
3. **Decidir Hardcoded vs Sanity** — seguir regra acima
4. **Implementar página** — mobile-first, responsivo
5. **Testar build** (`npm run build`) antes de commitar
6. **Commitar** com mensagem descritiva em português
7. **Marcar como feito** no AGENT.md

---

## ⚠️ Notas Importantes

- **O Figma foi feito por voluntário não-designer** — pode haver inconsistências. Perguntar se algo parecer estranho.
- **Mobile e desktop são designs separados** — não apenas resize. Componentes podem reorganizar.
- **Sanity schemas:** verificar `sanity.config.ts` antes de criar novo schema. Reutilizar quando possível.
- **Imagens:** preferir formatos modernos (WebP/AVIF). Usar `@sanity/image-url` para otimização.
