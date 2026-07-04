#!/bin/zsh
# Captura full-page de todas as rotas em desktop e mobile
routes=(/ /sobre /missao /areas-de-atuacao /realizacoes /consultoria /consultoria/monitoramento-de-aves /consultoria/educacao-ambiental /consultoria/capacitacao-tecnica /consultoria/cursos /programas-e-projetos /programas-e-projetos/monitoramento-de-avifauna /programas-e-projetos/treinamento-monitoramento-avifauna /programas-e-projetos/acoes-pro-aves /programas-e-projetos/projetos-de-pesquisa /programas-e-projetos/campanha-jacucara /programas-e-projetos/fundraising-field-trip /programas-e-projetos/pro-aves)

shoot() {
  local width=$1 height=$2 dir=$3
  playwright-cli -s=rev resize $width $height >/dev/null 2>&1
  for r in $routes; do
    local name=$(echo "$r" | sed 's#^/$#home#; s#^/##; s#/#__#g')
    playwright-cli -s=rev goto "http://localhost:4321$r" >/dev/null 2>&1
    playwright-cli -s=rev eval "new Promise(res => setTimeout(res, 700))" >/dev/null 2>&1
    playwright-cli -s=rev screenshot --full-page --filename "/tmp/rev/$dir/$name.png" >/dev/null 2>&1
    echo "done $dir $name"
  done
}

shoot 1440 900 desktop
shoot 390 844 mobile
