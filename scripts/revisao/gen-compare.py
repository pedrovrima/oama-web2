#!/usr/bin/env python3
"""Gera composições lado a lado (Figma | implementação) fatiadas verticalmente."""
import os
from PIL import Image

FIGMA = "/Users/anhinga/Projetos/oama-web2/design-assets/figma-exports/selection"
IMPL_D = "/tmp/rev/desktop"
IMPL_M = "/tmp/rev/mobile"
OUT = "/tmp/rev/compare"
os.makedirs(OUT, exist_ok=True)

# rota -> (figma desktop png, figma mobile png)
MAP = {
    "home": ("desktop-desktop-homepage-28_383.png", "mobile-celular-homepage-2212_678.png"),
    "sobre": ("desktop-desktop-sobre-2263_24.png", "mobile-celular-sobre-2263_140.png"),
    "missao": (None, "mobile-celular-missão-2215_156.png"),
    "areas-de-atuacao": ("desktop-desktop-áreas-de-atuação-2349_350.png", "mobile-celular-áreas-de-atuação-2330_176.png"),
    "realizacoes": ("desktop-desktop-realizações-2581_454.png", "mobile-celular-realizações-2560_450.png"),
    "consultoria": ("desktop-desktop-consultoria-2612_1124.png", "mobile-celular-consultoria-2592_573.png"),
    "consultoria__monitoramento-de-aves": ("desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_831.png", "mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2610_569.png"),
    "consultoria__educacao-ambiental": ("desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_878.png", "mobile-celular-educação-ambiental-e-comunicação-científica-2611_730.png"),
    "consultoria__capacitacao-tecnica": ("desktop-desktop-monitoramento-de-aves-e-estudos-de-avifauna-2620_940.png", "mobile-celular-monitoramento-de-aves-e-estudos-de-avifauna-2611_847.png"),
    "consultoria__cursos": ("desktop-desktop-cursos-2513_501.png", "mobile-celular-cursos-2465_298.png"),
    "programas-e-projetos": ("desktop-desktop-programas-e-projetos-2497_419.png", "mobile-celular-programas-e-projetos-2423_234.png"),
    "programas-e-projetos__monitoramento-de-avifauna": ("desktop-desktop-monitoramento-2498_638.png", "mobile-celular-monitoramento-2431_492.png"),
    "programas-e-projetos__treinamento-monitoramento-avifauna": ("desktop-desktop-monitoramento-2502_668.png", "mobile-celular-treinamento-2446_326.png"),
    "programas-e-projetos__acoes-pro-aves": ("desktop-desktop-ações-pró-aves-2512_624.png", "mobile-celular-ações-pró-aves-2462_618.png"),
    "programas-e-projetos__projetos-de-pesquisa": ("desktop-desktop-projetos-de-pesquisa-2514_766.png", "mobile-celular-projetos-de-pesquisa-2473_389.png"),
    "programas-e-projetos__campanha-jacucara": ("desktop-desktop-jacuçara-2517_1052.png", "mobile-celular-jacuçara-2479_433.png"),
    "programas-e-projetos__fundraising-field-trip": ("desktop-desktop-ações-pró-aves-2517_1092.png", "mobile-celular-fft-2479_525.png"),
}

COLW = {"d": 620, "m": 330}   # largura de cada coluna
SLICE_H = 1250                 # altura de cada fatia

def scaled(path, colw):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    nh = int(h * colw / w)
    return im.resize((colw, nh), Image.LANCZOS)

def compose(route, fig_path, impl_path, tag):
    colw = COLW[tag]
    fig = scaled(fig_path, colw) if fig_path else None
    imp = scaled(impl_path, colw)
    H = max(fig.size[1] if fig else 0, imp.size[1])
    canvas = Image.new("RGB", (colw * 2 + 30, H), (40, 40, 40))
    if fig:
        canvas.paste(fig, (0, 0))
    canvas.paste(imp, (colw + 30, 0))
    n = (H + SLICE_H - 1) // SLICE_H
    for i in range(n):
        top = i * SLICE_H
        sl = canvas.crop((0, top, canvas.size[0], min(top + SLICE_H, H)))
        sl.save(f"{OUT}/{route}--{tag}{i:02d}.png", optimize=True)
    print(f"{route} [{tag}]: figmaH={fig.size[1] if fig else '-'} implH={imp.size[1]} fatias={n}")

for route, (figd, figm) in MAP.items():
    impl_d = os.path.join(IMPL_D, f"{route}.png")
    impl_m = os.path.join(IMPL_M, f"{route}.png")
    if figd and os.path.exists(impl_d):
        compose(route, os.path.join(FIGMA, figd), impl_d, "d")
    if figm and os.path.exists(impl_m):
        compose(route, os.path.join(FIGMA, figm), impl_m, "m")
