import Fig from "../fig";
import Image from "../legacy-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

import {
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";

import { H3, P, Carroussel } from "../components";

const accordeonFigs = [
  {
    number: 8,
    legend: (
      <p>
        Saíras-sete-cores <i>(Tangara seledon)</i> e benedito-de-testa-vermelha{' '}
        <i>(Melanerpes flavifrons)</i> se alimentando em um comedouro. Autoria:
        Maristela Camolesi Alcantara.
      </p>
    ),
  },
  {
    number: 9,
    legend: (
      <p>
        Comedouro feito com tronco de madeira recebendo a visita de vários
        periquitos-ricos <i>(Brotogeris tirica).</i> Autoria: Maristela Camolesi
        Alcantara.
      </p>
    ),
  },
  {
    number: 10,
    legend: (
      <p>
        Tiê-sangue <i>(Ramphocelus bresilia)</i> se alimentando em um comedouro.
        Autoria: Maristela Camolesi Alcantara.
      </p>
    ),
  },
  {
    number: 11,
    legend: (
      <p>
        Bebedouro recebendo a visita do Beija-flor-tesoura{' '}
        <i>(Eupetomena macroura).</i> Autoria: Maristela Camolesi Alcantara.
      </p>
    ),
  },
];

export default function Comedouro() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#F0CE71]  p-6'>
        <DialogTitle className='text-3xl font-bold text-gray-800 '>
          Uso correto de comedouros e bebedouros de aves
        </DialogTitle>
      </DialogHeader>
      <div className='px-6 pt-4 text-gray-600'>
        <Fig
          section='intro'
          number={1}
          legend={
            <p>
              Casal de saíras-sete-cores <i>(Tangara seledon)</i> se alimentando
              em um comedouro. Autoria: Maristela Camolesi Alcantara.
            </p>
          }
        ></Fig>
        <H3>Por que investir em atrair a vida silvestre para perto de si?</H3>

        <P>
          O crescimento desenfreado dos centros urbanos, o desmatamento e a
          correria do dia a dia têm dificultado nosso contato direto com a
          natureza. Como consequência, acentua-se a distância entre o homem e a
          vida selvagem e reduzem-se as vantagens que um convívio mais próximo
          com a natureza proporciona. O contato direto com a natureza tem sido
          associado a inúmeros benefícios, como sensação de bem-estar¹ e redução
          dos níveis de estresse² e de ansiedade³. Dessa maneira, muitas pessoas
          estão buscando formas de se reaproximarem da natureza. Uma das
          estratégias mais simples é atrair a natureza para perto de si, a
          partir da instalação de comedouros e bebedouros de aves, por exemplo⁴
          ⁵ ⁶.
        </P>

        <H3>
          A oferta de recursos alimentares como forma de aproximar aves e
          pessoas
        </H3>

        <P>
          A observação de aves tem sido associada ao aumento da sensação de
          conexão com a natureza⁷ ⁸, e a oferta de alimentos – em geral frutas,
          grãos e água açucarada – tem facilitado esse processo. As aves são
          animais presentes em praticamente todos os lugares, desde ambientes
          florestais e rurais até aqueles altamente urbanizados, o que facilita
          a aproximação com as pessoas. Além disso, a percepção da diminuição de
          alimento natural durante os períodos de inverno levou muitas pessoas a
          disponibilizarem fontes extras de alimentos no intuito de ajudá-las⁹.
          Essa prática está bastante difundida entre países do hemisfério norte,
          especialmente no Reino Unido, onde mais de 60% das casas oferecem
          comida para as aves anualmente¹⁰. Nos últimos tempos, essa tem deixado
          de ser uma atividade apenas de inverno e passou a ser adotada ao longo
          de todo o ano¹¹. Dessa forma, a previsibilidade local de alimento pode
          garantir visitas constantes das aves e, consequentemente, manter os
          animais próximos durante todo o ano.{' '}
        </P>
        <Fig
          section='intro'
          number={2}
          legend={
            <p>
              Saíra-amarela <i>(Stilpnia cayana)</i> visitando o comedouro da
              Estação de Pesquisa OAMa.
            </p>
          }
        ></Fig>
        <H3>Quais espécies de aves visitam comedouros/bebedouros no Brasil?</H3>

        <P>
          A observação de aves tem crescido cada vez mais no Brasil¹² e, junto
          com ela, o uso de comedouros e bebedouros para aves de vida livre. No
          Brasil, essas estruturas são usadas por ornitólogos, observadores de
          aves e, principalmente, por admiradores desses animais, que encaram a
          atividade como um hobby, sem ter qualquer tipo de relação acadêmica ou
          profissional com as aves silvestres¹³. No geral, as aves visitantes
          são da família Thraupidae, como o saí-azul <i>(Dacnis cayana)</i>, a
          saíra-amarela <i>(Stilpnia cayana)</i> e o tiê-de-topete{' '}
          <i>(Trichothraupis melanops)</i>, e da família Turdidae, como o
          sabiá-barranco <i>(Turdus leucomelas)</i> e o sabiá-coleira{' '}
          <i>(Turdus albicollis)</i>. Isso foi constatado por um estudo que
          avaliou transmissões online <i>(lives) </i>a partir de diversos
          comedouros espalhados pelo Brasil durante a pandemia de Covid-19, em
          2020. Eles observaram que o sanhaço-cinzento <i>(Thraupis sayaca)</i>,
          o sabiá-laranjeira <i>(Turdus rufiventris)</i> e a cambacica{' '}
          <i>(Coereba flaveola)</i> são as três aves que visitam os comedouros
          brasileiros com mais frequência, podendo haver maior diversidade de
          espécies em áreas rurais do que em áreas urbanas¹⁴.{' '}
        </P>
        {/* Espécies mais frequentes em comedouros brasileiros e diferença de diversidade entre comedouros urbanos e não-urbanos. */}

        <H3>Vantagens e desvantagens </H3>

        <P>
          Nos comedouros, além da alta circulação de aves, foi observada também
          a presença de outros animais, como morcegos, macacos e gambás¹³.
          Assim, esses locais favorecem o contato entre indivíduos e espécies
          que em condições normais não se aproximariam¹⁴, o que pode facilitar o
          compartilhamento de patógenos entre as aves visitantes¹¹. Além disso,
          os comedouros foram associados com a diminuição do sucesso
          reprodutivo¹⁵ e com o aumento de colisões de aves em janelas¹⁶. Esses
          fatores devem ser levados em consideração por aqueles que mantêm os
          comedouros. Um estudo realizado nos Estados Unidos, que analisou os
          efeitos dos comedouros na saúde das aves silvestres, mostrou que
          animais frequentadores de comedouros, em geral, tendem a ter melhor
          saúde individual do que os indivíduos que não os frequentam, e estão
          melhor preparados para se proteger contra os patógenos¹⁸. Dessa forma,
          a instalação de comedouros tem sido associada a inúmeros benefícios,
          tanto para os animais como para as pessoas que os instalam,
          entretanto, também pode significar prejuízos para as aves e para a
          biodiversidade¹⁸.
        </P>
        {/* Vantagens e desvantagens de instalar comedouros. */}

        <P>
          Além dos impactos diretos, os comedouros podem estar relacionados com
          diversos impactos indiretos, mas não menos importantes. Um trabalho
          recente sobre o impacto dos comedouros na biodiversidade argumentou
          que os estudos não deveriam focar apenas nas espécies-alvo, mas, sim,
          em toda a cascata trófica envolvida, incluindo as presas, predadores,
          patógenos, parasitas ou competidores (Figura 4), já que todos são
          afetados¹⁸. Imagine que as aves que estão visitando o seu comedouro
          estejam se tornando presas fáceis para predadores, e que,
          consequentemente, a população dessas espécies possa vir a diminuir,
          refletindo no aumento da população de insetos e lagartixas que
          costumam ser predados pelos mesmos. Além disso, esses indivíduos que
          visitam os comedouros podem se tornar predominantes na competição por
          habitat em comparação com os que não visitam, ou, ainda, ter seu ciclo
          de migração alterado pela estabilidade de oferta de alimentos ao longo
          do ano. Ou seja, o uso incorreto de comedouros pode estar causando
          todo um desequilíbrio na comunidade.
        </P>

        <Fig
          section='intro'
          objectFit='contain'
          number={5}
          legend={
            <p>
              Esquema mostrando novas interações facilitadas por comedouros em
              jardins. As flechas vermelhas indicam efeitos negativos e as
              flechas azuis efeitos positivos. O tamanho da seta não é um
              indicativo do tamanho do efeito e as ilustrações não estão em
              escala. A) ninho provisionado, B) comedouro, C) ave frequentadora,
              D) ave invasora frequentadora, E) predador omnívoro, F) predador
              carnívoro, G) competidor natural não frequentador, H) presa
              natural, I) predador omnívoro invasor, J) predador domestico.
              Imagem retirada de Shutt and Lees, 2021.
            </p>
          }
        ></Fig>
        <H3>Dicas e cuidados gerais na instalação e manutenção </H3>

        <P>
          Os comedouros, além de serem estruturas que fornecerão fontes extras
          de alimento, propiciam uma interação agradável entre aves e pessoas,
          através da observação e registro da imagem desses animais, ajudando,
          também, na percepção da necessidade de cuidado e conservação do meio
          ambiente. Porém, se não forem bem manejados, podem representar sérios
          riscos para os animais que ali frequentam¹¹. Um comedouro que não
          recebe a devida atenção pode colocar em risco a saúde dos animais
          visitantes, de outros indivíduos da espécie e da comunidade de aves¹⁸.
          Dessa forma, instalação, monitoramento e manejos adequados são
          essenciais para reduzir tais riscos¹⁷, garantindo, assim, melhor
          experiência para os animais.{' '}
        </P>

        <P>Para instalar seu comedouro e bebedouro:</P>
        <ul className='list-disc'>
          <li className='mb-4'>
            Escolha um local sombreado, próximo a árvores ou arbustos e distante
            de janelas;
          </li>
          <li className='mb-4'>
            Ofereça alimentos nutritivos e de qualidade nos comedouros, como
            grãos de quirera de milho, sementes de girassol e frutas como banana
            e mamão;
          </li>
          <li className='mb-4'>
            Disponibilize água para atrair ainda mais aves. Elas irão procurá-la
            para se hidratar e se refrescar.
          </li>
          <li className='mb-4'>
            Em bebedouros, ofereça água com açúcar apenas se for branco e
            refinado, com uma parte de açúcar e três partes de água. Não utilize
            açúcar mascavo, demerara, melado ou mel;
          </li>
          <li className='mb-4'>
            Mantenha-os ativos para que mais aves os visitem consistentemente;
          </li>
          <li className='mb-4'>
            Evite comedouros de formato e materiais que acumulem fezes;
          </li>
        </ul>

        <P>Como fazer a manutenção:</P>

        <ul className='list-disc'>
          <li className='mb-4'>
            Higienize o comedouro a cada duas semanas, utilizando uma solução
            com uma parte de cloro e nove partes de água, imergindo o comedouro
            na solução por dois a três minutos e deixando-o secar ao ar livre;
          </li>
          <li className='mb-4'>
            Em ambientes quentes, higienize diariamente seu bebedouro; já em
            ambientes frios, faça-o a cada dois dias. Você pode utilizar água
            quente, solução fraca de vinagre ou uma solução de cloro, lembrando
            sempre de enxaguar bem o bebedouro para não deixar resíduos dos
            produtos;
          </li>
          <li className='mb-4'>
            Mantenha os gatos dentro de casa, sem acesso aos
            comedouros/bebedouros;
          </li>
          <li className='mb-4'>
            Pratique a observação de aves! Não sabe onde postar fotos e listas
            de aves? Crie uma conta no eBird e no Wikiaves para compartilhar
            esse material. Assim, você contribui com a ciência cidadã e ainda
            divide lindas fotos com amigos, familiares e vizinhos.
          </li>
        </ul>
        <P>
          Para dicas sobre como fazer seu próprio comedouro e/ou para adquirir o
          seu, acesse:
        </P>

        <a
          href='https://revistacasaejardim.globo.com/Casa-e-Jardim/Dicas/DIY/noticia/2020/09/faca-voce-mesmo-12-ideias-de-comedouros-para-passaros.html'
          className='text-yellow-600'
        >
          <P>
            12 ideias de comedouros para pássaros que você pode fazer em casa.
          </P>
        </a>

        <a
          href='https://www.terradospassaros.com/loja/default.asp'
          className='text-yellow-600'
        >
          <P>Site de venda de comedouros e bebedouros.</P>
        </a>

        <Carroussel section='intro' figs={accordeonFigs}></Carroussel>

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                1 CAPALDI, C. A.; DOPKO, R. L.; ZELENSKI, J. M. The relationship
                between nature connectedness and happiness: a meta-analysis.{' '}
                <strong>Frontiers in psychology</strong>. v. 5, n. 976, 2014.
                Dispon�vel em: https://doi.org/10.3389/fpsyg.2014.00976.
              </P>
              <P>
                2 BEIL, K.; HANES, D. The influence of urban natural and built
                environments on physiological and psychological measures of
                stress - A pilot study.{' '}
                <strong>
                  International Journal of Environmental Research and Public
                  Health
                </strong>
                , v. 10, 2013. Dispon�vel em:
                https://doi:10.3390/ijerph10041250.
              </P>
              <P>
                3 MARTYN, P.; BRYMER, D. The relationship between nature
                relatedness and anxiety.{' '}
                <strong>Journal of Health Psychology</strong>, 2014.
              </P>
              <P>
                4 ORAMS, M. B. Feeding wildlife as a tourism attraction: A
                review of issues and impacts.{' '}
                <strong>Tourism management</strong>, v. 23, n. 3, p. 281-293,
                2002.
              </P>
              <P>
                5 CARVALHO, G.; HINGST-ZAHER, E. Observação de aves: torres,
                abrigos e mobiliário de apoio. Tijd Edições, 2019. 108 p.
              </P>
              <P>
                6 STEVEN, R.; RAKOTOPARE, N.; NEWSOME, D. Avitourism tribes: as
                diverse as the birds they watch. In: PFORR, C.; DOWLING, R.;
                VOLGGER, M. (Eds.). <strong>Consumer tribes in tourism</strong>.
                Singapore: Springer, 2021. p. 101-118.
              </P>
              <P>
                7 COX, D. T. C.; GASTON, K. J. Urban bird feeding: Connecting
                people with nature. <strong>Plos One</strong>, v. 11, n. 7,
                2016. Disponível em: https://doi:10.1371/journal.pone.0158717
              </P>
              <P>
                8 AERTS, R.; HONNAY, O.; VAN NIEUWENHUYSE, A. Biodiversity and
                human health: mechanisms and evidence of the positive health
                effects of diversity in nature and green spaces.{' '}
                <strong>British Medical Bulletin</strong>, v. 127, n. 1, p.
                5-22, 2018.
              </P>
              <P>
                9 REYNOLDS, S. J. Garden bird feeding: Insights and prospects
                from a north-south comparison of this global urban phenomenon.{' '}
                <strong>Frontiers in Ecology and Evolution</strong>, v. 5, n.
                24, 2017. Disponível em: https://doi: 10.3389/fevo.2017.00024
              </P>
              <P>
                10 DAVIES, Z. G. et al. Households factors influencing
                participation in bird feeding activity: a national scale
                analysis. <strong>PloS ONE</strong>, v. 7, n. 6, 2012.
                Disponível em: https://doi:10.1371/journal.pone.0039692
              </P>
              <P>
                11 LAWSON, B. et al. Health hazards to wild birds and risk
                factors associated with anthropogenic food provisioning.{' '}
                <strong>Phil. Trans. R. Soc. B.</strong>, v. 373, 2017.
                Dispon�vel em: http://dx.doi.org/10.1098/rstb.2017.0091
              </P>
              <P>
                12 BARBOSA, K. V. C. et al. The contribution of citizen science
                to research on migratory and urban birds in Brazil.{' '}
                <strong>Ornithology Research</strong>, v. 29, 2021. Dispon�vel
                em: https://doi.org/10.1007/s43388-020-00031-0
              </P>
              <P>
                13 ALCANTARA, M. C.; ALEXANDRINO, E. R. Percepções sobre
                comedouros para aves de vida livre: implicações para o turismo
                de observação de aves no Brasil.{' '}
                <strong>Revista Brasileira de Ecoturismo</strong>, São Paulo, v.
                15, n. 3, 2022. Disponível em:
                https://doi.org/10.34024/rbecotur.2022.v15.13611
              </P>
              <P>
                14 ALEXANDRINO, E. R. et al. Which birds are Brazilians seeing
                on urban and non\u2011urban feeders? An analysis based on a
                collective online birding. <strong>Ornithology Research</strong>
                , v. 30, 2022. Dispon�vel em:
                https://doi.org/10.1007/s43388-022-00094-1
              </P>
              <P>
                15 PLUMMER, K. E. et al. Winter food provisioning reduces future
                breeding performance in a wild bird.{' '}
                <strong>Scientific Reports</strong>, v. 3, n. 2002, 2013.
                Dispon�vel em: https://doi.org/10.1038/srep02002.
              </P>
              <P>
                16 KUMMER, J. A.; BAYNE, E. M. Bird feeders and their effects on
                bird-window collisions at residential houses.{' '}
                <strong>Avian Conservation and Ecology</strong>, v. 10, n. 6,
                2015. Disponível em: http://dx.doi.org/10.5751/ACE-00787-100206.
              </P>
              <P>
                17 WILCOXEN, T. E. et al. Effects of bird-feeding activities on
                the health of wild birds.{' '}
                <strong>Conservation Physiology</strong>, v. 3, 2015. Dispon�vel
                em: https://doi.org/10.1093/conphys/cov058.
              </P>
              <P>
                18 SHUTT, J. D.; LEES, A. C. Killing with kindness: Does
                widespread generalized provisioning of wildlife help or hinder
                biodiversity conservation efforts?.{' '}
                <strong>Biological Conservation</strong>, v. 261, n. 109295,
                2021. Disponível em:
                https://doi.org/10.1016/j.biocon.2021.109295.
              </P>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
