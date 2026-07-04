#!/usr/bin/env python3
import json
import os
import re
import subprocess
from collections import Counter
from pathlib import Path
from typing import Any, Optional

BIN = "/Users/anhinga/.npm/_npx/3e663f8be2a04660/node_modules/@vkhanhqui/figma-mcp-go/bin/darwin-arm64/figma-mcp-go"
PORT = "1994"
IP = "127.0.0.1"
ROOT = Path("/Users/anhinga/Projetos/oama-web2")
OUT = ROOT / "design-assets" / "figma-analysis"
EXPORTS = ROOT / "design-assets" / "figma-exports" / "selection"
OUT.mkdir(parents=True, exist_ok=True)
EXPORTS.mkdir(parents=True, exist_ok=True)


def call_tool(name: str, arguments: Optional[dict[str, Any]] = None) -> Any:
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tools/call",
        "params": {
            "name": name,
            "arguments": arguments or {},
        },
    }
    proc = subprocess.run(
        [BIN, "--port", PORT, "--ip", IP],
        input=(json.dumps(payload) + "\n").encode(),
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        timeout=60,
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"tool {name} failed: rc={proc.returncode}\nSTDERR:\n{proc.stderr.decode(errors='ignore')}\nSTDOUT:\n{proc.stdout.decode(errors='ignore')}")
    raw = proc.stdout.decode(errors="ignore").strip()
    data = json.loads(raw)
    text = data["result"]["content"][0]["text"]
    try:
        return json.loads(text)
    except Exception:
        return text


def sanitize(name: str) -> str:
    s = name.lower().strip()
    s = re.sub(r"[^a-z0-9à-ÿ]+", "-", s, flags=re.I)
    s = re.sub(r"-+", "-", s).strip("-")
    return s[:80] or "node"


def classify_width(width: float) -> str:
    if width <= 430:
        return "mobile"
    if width <= 820:
        return "tablet"
    return "desktop"


def walk(node: Any):
    if isinstance(node, list):
        for item in node:
            yield from walk(item)
        return
    if isinstance(node, dict):
        yield node
        for child in node.get("children", []) or []:
            yield from walk(child)


def text_snippets(node: dict, limit: int = 8) -> list[str]:
    snippets = []
    for item in walk(node):
        text = item.get("characters")
        if text:
            clean = re.sub(r"\s+", " ", text).strip()
            if clean and clean not in snippets:
                snippets.append(clean)
            if len(snippets) >= limit:
                break
    return snippets


def infer_page(node: dict, snippets: list[str]) -> str:
    name = (node.get("name", "") or "").lower()
    text = " ".join([node.get("name", "")] + snippets).lower()

    name_checks = [
        ("home", ["homepage"]),
        ("sobre", ["sobre", "história do oama"]),
        ("missão", ["missão"]),
        ("proaves", ["ações pró-aves", "pro-aves"]),
        ("realizações", ["realizações"]),
        ("programas-e-projetos", ["programas e projetos", "projetos de pesquisa"]),
        ("serviços-monitoramento", ["consultoria", "monitoramento de aves", "estudos de avifauna"]),
        ("serviços-educacao", ["educação ambiental e comunicação científica"]),
        ("serviços-capacitacao", ["cursos", "treinamento", "capacitação técnica"]),
        ("campanhas", ["jacuçara", "fft"]),
        ("menu-mobile", ["menu"]),
    ]
    for label, needles in name_checks:
        if any(n in name for n in needles):
            return label

    checks = [
        ("home", ["conservação com ciência", "nossas ações em números", "nossas áreas de atuação"]),
        ("sobre", ["quem somos", "plano de voo", "história do oama", "membros"]),
        ("missão", ["missão", "objetivos de desenvolvimento sustentável"]),
        ("proaves", ["ações pró-aves", "colisão de aves", "pró-aves"]),
        ("serviços-monitoramento", ["monitoramento de aves", "estudos de avifauna"]),
        ("serviços-educacao", ["educação ambiental e comunicação científica"]),
        ("serviços-capacitacao", ["capacitação técnica e formação profissional"]),
        ("blog/mídia", ["novo website do programa ações pró-aves", "festival de aves", "congresso brasileiro de ornitologia"]),
        ("apoie/contato", ["não sou robô", "doar agora", "toda ajuda faz a diferença"]),
    ]
    for label, needles in checks:
        if any(n in text for n in needles):
            return label
    return "indefinida"


def is_major_root(item: dict[str, Any]) -> bool:
    area = (item.get("width") or 0) * (item.get("height") or 0)
    if item.get("type") not in {"FRAME", "GROUP"}:
        return False
    if (item.get("total_nodes") or 0) >= 10:
        return True
    if area >= 700 * 1200:
        return True
    return False


def summarize_root(node: dict) -> dict[str, Any]:
    bounds = node.get("bounds", {})
    all_nodes = list(walk(node))
    counts = Counter(item.get("type", "UNKNOWN") for item in all_nodes)
    snippets = text_snippets(node)
    return {
        "id": node.get("id"),
        "name": node.get("name"),
        "type": node.get("type"),
        "width": bounds.get("width"),
        "height": bounds.get("height"),
        "x": bounds.get("x"),
        "y": bounds.get("y"),
        "viewport": classify_width(bounds.get("width", 0) or 0),
        "total_nodes": len(all_nodes),
        "node_type_counts": dict(counts),
        "text_snippets": snippets,
        "inferred_page": infer_page(node, snippets),
    }


def markdown_report(metadata: dict, roots: list[dict], screenshots: list[dict], repo_notes: dict) -> str:
    lines = []
    lines.append("# Análise do Figma — abas-website-oama")
    lines.append("")
    lines.append("## Passos executados")
    for step in [
        "Conectado ao arquivo Figma via figma-mcp-go com o plugin no Figma Desktop.",
        "Lido o metadata do arquivo e confirmada a página ativa.",
        "Capturada a seleção atual do usuário no Figma.",
        "Gerado resumo estrutural de cada nó raiz selecionado (tipo, dimensões, contagem de nós, snippets de texto).",
        "Exportados screenshots dos nós raiz exportáveis para `design-assets/figma-exports/selection/`.",
        "Comparado o conteúdo do Figma com as páginas Astro já existentes no repositório.",
        "Salvos artefatos brutos e relatório nesta pasta para referência futura.",
    ]:
        lines.append(f"1. {step}")
    lines.append("")
    lines.append("## Metadata do arquivo")
    lines.append("")
    lines.append(f"- **Arquivo:** {metadata.get('fileName')}")
    lines.append(f"- **Página atual:** {metadata.get('currentPageName')} ({metadata.get('currentPageId')})")
    lines.append(f"- **Total de páginas no arquivo:** {metadata.get('pageCount')}")
    lines.append(f"- **Frames/grupos principais analisados:** {len(roots)}")
    lines.append("")
    lines.append("## Comparação rápida com o Astro atual")
    lines.append("")
    for item in repo_notes["implemented"]:
        lines.append(f"- ✅ **{item}** já aparece implementado ou parcialmente implementado no Astro.")
    for item in repo_notes["missing"]:
        lines.append(f"- 🆕 **{item}** aparece no Figma e ainda não existe como página dedicada no Astro atual.")
    lines.append("")
    lines.append("## Nós raiz selecionados")
    lines.append("")
    for i, root in enumerate(roots, start=1):
        lines.append(f"### {i}. {root['name']}")
        lines.append("")
        lines.append(f"- **ID:** `{root['id']}`")
        lines.append(f"- **Tipo:** {root['type']}")
        lines.append(f"- **Viewport inferido:** {root['viewport']}")
        lines.append(f"- **Dimensões:** {root['width']} × {root['height']}")
        lines.append(f"- **Posição:** x={root['x']}, y={root['y']}")
        lines.append(f"- **Página inferida:** {root['inferred_page']}")
        lines.append(f"- **Total de nós internos:** {root['total_nodes']}")
        lines.append(f"- **Contagem por tipo:** `{json.dumps(root['node_type_counts'], ensure_ascii=False)}`")
        lines.append("- **Snippets de texto relevantes:**")
        for txt in root["text_snippets"]:
            lines.append(f"  - {txt}")
        lines.append("")
    lines.append("## Screenshots exportados")
    lines.append("")
    for shot in screenshots:
        lines.append(f"- `{shot['outputPath']}` ← {shot['nodeId']}")
    lines.append("")
    lines.append("## Leitura geral")
    lines.append("")
    lines.append("- O arquivo mistura versões **desktop/tablet/mobile** e também várias páginas/abas dentro de uma única página do Figma.")
    lines.append("- A home está claramente presente, com hero, bloco institucional, números, áreas de atuação, agenda/mídia e CTA de apoio.")
    lines.append("- Há também páginas de **serviços/áreas** com estrutura mais editorial: hero, blocos de serviços, diferenciais e público potencial.")
    lines.append("- O Figma mostra um design system relativamente consistente em **Oswald + Montserrat**, amarelo OAMa, azul OAMa, fundo creme e ondas como separadores.")
    lines.append("- Alguns elementos do Figma parecem rascunhos, variantes duplicadas ou cards isolados fora dos frames principais; esses pontos precisam ser filtrados na implementação.")
    lines.append("")
    lines.append("## Próximos passos sugeridos")
    lines.append("")
    lines.append("1. Escolher um frame/página prioritário para análise detalhada.")
    lines.append("2. Cruzar esse frame com o que já existe em `src/pages/` e `src/components/sections/`.")
    lines.append("3. Decidir o que será hardcoded versus Sanity, seguindo o `AGENT.md`.")
    lines.append("4. Implementar ou refatorar a página no Astro com base no screenshot exportado e na estrutura textual capturada.")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    metadata = call_tool("get_metadata")
    selection = call_tool("get_selection")

    (OUT / "metadata.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2))
    (OUT / "selection-raw.json").write_text(json.dumps(selection, ensure_ascii=False, indent=2))

    roots = [summarize_root(node) for node in selection]
    major_roots = [root for root in roots if is_major_root(root)]
    (OUT / "selection-summary.json").write_text(json.dumps(roots, ensure_ascii=False, indent=2))
    (OUT / "selection-major-summary.json").write_text(json.dumps(major_roots, ensure_ascii=False, indent=2))

    exportable = []
    for root in major_roots:
        if root["type"] in {"FRAME", "GROUP"} and (root.get("width") or 0) >= 200 and (root.get("height") or 0) >= 200:
            filename = f"{classify_width(root['width'] or 0)}-{sanitize(root['name'])}-{root['id'].replace(':', '_')}.png"
            exportable.append({
                "nodeId": root["id"],
                "outputPath": str(EXPORTS / filename),
                "format": "PNG",
                "scale": 1,
            })
    screenshots = []
    for i in range(0, len(exportable), 8):
        batch = exportable[i:i+8]
        batch_result = call_tool("save_screenshots", {"items": batch})
        if isinstance(batch_result, dict) and "results" in batch_result:
            screenshots.extend(batch_result.get("results") or [])
        elif isinstance(batch_result, list):
            screenshots.extend(batch_result)
    (OUT / "screenshots.json").write_text(json.dumps(screenshots, ensure_ascii=False, indent=2))

    repo_notes = {
        "implemented": [
            "Home (`src/pages/index.astro`)",
            "Sobre (`src/pages/sobre.astro`)",
            "Missão (`src/pages/missao.astro`)",
        ],
        "missing": [
            "Páginas de serviços/áreas específicas",
            "Página editorial/listagem de mídia ou notícias mais robusta",
            "Páginas extras presentes como variantes no Figma e ainda ausentes no Astro",
        ],
    }

    md = markdown_report(metadata, major_roots, screenshots, repo_notes)
    (OUT / "selection-analysis.md").write_text(md)

    print(json.dumps({
        "metadata_path": str(OUT / "metadata.json"),
        "selection_raw_path": str(OUT / "selection-raw.json"),
        "selection_summary_path": str(OUT / "selection-summary.json"),
        "screenshots_path": str(OUT / "screenshots.json"),
        "report_path": str(OUT / "selection-analysis.md"),
        "screenshots_exported": len(exportable),
        "roots": len(roots),
        "major_roots": len(major_roots),
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
