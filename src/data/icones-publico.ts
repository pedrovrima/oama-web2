// Ícones ilustrados de público, exportados do Figma (nós `Ellipse 117` a
// `Ellipse 132`, que reusam o mesmo conjunto de 9 desenhos). São círculos azuis
// #5ba4d9 com o desenho em branco, já achatados em PNG porque no Figma são
// preenchimento de imagem dentro da elipse — não há vetor a extrair.
//
// Usados em `/consultoria` (seção "Clientes") e no bloco "Público potencial"
// das três filhas de consultoria, via `ConsultoriaServico.astro`.
// Arquivos em `public/icones/publico/`; exportações em
// `design-assets/figma-exports/icones-clientes/`.

export interface IconePublico {
  /** Caminho servido a partir de `public/`. */
  src: string;
  /** Descreve o desenho — o rótulo ao lado já diz a categoria. */
  alt: string;
}

export const ICONES_PUBLICO = {
  "empresas-consultorias": {
    src: "/icones/publico/empresas-consultorias.webp",
    alt: "Prédios corporativos entre árvores",
  },
  "empreendimentos-impacto": {
    src: "/icones/publico/empreendimentos-impacto.webp",
    alt: "Escavadeira de esteira em obra",
  },
  "orgaos-publicos": {
    src: "/icones/publico/orgaos-publicos.webp",
    alt: "Prédio do Congresso Nacional",
  },
  "universidades-pesquisa": {
    src: "/icones/publico/universidades-pesquisa.webp",
    alt: "Monitor exibindo um frasco de laboratório e um átomo",
  },
  "estudantes-profissionais": {
    src: "/icones/publico/estudantes-profissionais.webp",
    alt: "Livro aberto",
  },
  "escolas-museus": {
    src: "/icones/publico/escolas-museus.webp",
    alt: "Parede de museu com quadros e luzes de destaque",
  },
  "sociedade-civil": {
    src: "/icones/publico/sociedade-civil.webp",
    alt: "Mão aberta com um coração na palma",
  },
  "unidades-conservacao": {
    src: "/icones/publico/unidades-conservacao.webp",
    alt: "Palmeira",
  },
  "observadores-aves": {
    src: "/icones/publico/observadores-aves.webp",
    alt: "Binóculo",
  },
} satisfies Record<string, IconePublico>;

export type ChaveIconePublico = keyof typeof ICONES_PUBLICO;
