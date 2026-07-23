import Fig from "../fig";
import Image from "../legacy-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

import { H3, P, H4, Carroussel } from "../components";
import { DialogContent, DialogHeader } from "../ui/dialog";

const carrousselImages = [
  {
    number: 6,
    legend: (
      <p>
        Curió <i>(Sporophila angolensis)</i> em vida livre. Autoria: Birds
        Atlantic.
      </p>
    ),
  },
  {
    number: 7,
    legend: (
      <p>
        Trinca-ferro <i>(Saltator similis)</i> em vida livre. Autoria: Birds
        Atlantic.
      </p>
    ),
  },
  {
    number: 8,
    legend: (
      <p>
        Azulão <i>(Cyanoloxia brissonii)</i> em vida livre, no Vale do Ribeira,
        São Paulo. Autoria: Dario Sanches (Creative commons 2.0)
      </p>
    ),
  },
];

export default function Colisao() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#B1DF9D]  p-6'>
        <h2 className='text-3xl font-bold text-gray-800 '>
          Colisão com vidros
        </h2>
      </DialogHeader>

      <div className='px-6 pt-4 text-gray-600'>
        <Fig
          section='colisao'
          number={1}
          legend={
            <p>Ave morta após colidir com janela de vidro. Fonte: Canva.</p>
          }
        ></Fig>

        <P>
          As aves possuem a melhor visão entre os vertebrados. Seus olhos
          proporcionalmente grandes em relação ao corpo enxergam um amplo campo
          de visão com múltiplos pontos focais e, com isso, constroem imagens
          nítidas. A disposição dos olhos no crânio das aves pode ser do tipo
          lateralizado ou frontal. Aves com olhos lateralizados conseguem “ver o
          que vem de trás”, enquanto aves com olhos frontais, focam rapidamente
          em objetos em diferentes distâncias. As aves enxergam cores que nossos
          olhos não veem, como aquelas presentes no espectro ultravioleta. Mesmo
          com essa visão super desenvolvida, as aves são ameaçadas por um
          inimigo quase invisível, introduzido nas paisagens pelos humanos.
        </P>

        <Fig
          section='colisao'
          number={2}
          legend={
            <p>
              Ilustração dos campos visuais de um pardal e de uma coruja. Em
              verde claro o campo de visão monocular, e em verde escuro o campo
              de visão binocular. Fonte: Medical Illustration & Animation
            </p>
          }
        ></Fig>

        <Fig
          section='colisao'
          number={3}
          legend={
            <p>
              Comparação entre o espectro eletromagnético visível para humanos e
              aves. O espectro que as aves enxergam é bem amplo, incluindo a luz
              ultravioleta. Fonte: Natural History in Technology.
            </p>
          }
        ></Fig>

        <H3>Vidro: um inimigo quase invisível</H3>
        <P>
          Com base nas estimativas de apenas dois países (EUA e Canadá), sabemos
          que anualmente cerca de 1 bilhão de aves morrem colidindo com vidros,
          janelas, e outras estruturas espelhadas¹,². A colisão com vidros é a
          segunda principal causa de morte entre as aves, atrás somente da perda
          de habitat³. Os vidros enganam a visão das aves devido a sua
          refletividade e/ou transparência. Os vidros tornam-se invisíveis às
          aves, pois{' '}
        </P>

        <ul className='list-disc'>
          <li className='mb-4'>
            as aves creem que existe uma rota de voo segura porque veem a
            paisagem ao seu redor refletida nos vidros⁴;
          </li>
          <li className='mb-4'>
            as aves veem através de janelas um habitat de interesse, seja dentro
            ou do outro lado de uma casa, e não percebem o vidro como barreira⁴;
          </li>
          <li className='mb-4'>
            ou ainda por que elas enxergam o próprio reflexo em vidros e atacam
            o vidro acreditando ser um outro indivíduo⁴.
          </li>
        </ul>

        <Fig
          section='colisao'
          number={4}
          legend={
            <p>Uso de vidraças em paredes e muros em ambientes urbanos.</p>
          }
        ></Fig>

        <P>
          Muitos fatores podem influenciar a probabilidade de uma ave colidir
          com um vidro. Alguns destes fatores estão relacionados ao
          comportamento da ave ou sua experiência (idade, conhecimento da área),
          outros relacionados ao ambiente em si (oferta de recursos alimentares,
          arborização), condições climáticas, ou tipos de construções. Isso foi
          o que constatou um{' '}
          <a
            href='https://www.scielo.br/j/aabc/a/4QCVMKjDPsyMSvjWDnvDv7S/?lang=en&format=pdf#:~:text=The%20factors%20linked%20to%20higher,migration%2C%20abundance%2C%20and%20behavior'
            target={'_blank'}
            className='text-yellow-600'
          >
            estudo de revisão
          </a>
          ⁵ sobre as principais causas de colisões de aves em vidros, elaborado
          por pesquisadores da Universidade Federal de São Carlos, e publicado
          em 2020 nos Anais da Academia Brasileira de Ciências. Abaixo indicamos
          alguns dos fatores relacionados às causas de colisões de aves em
          vidros analisados na revisão de 2020.
        </P>

        <H4>Sazonalidade e clima</H4>
        <P>
          As colisões podem ocorrer ao longo de todo o ano, embora no hemisfério
          norte elas aumentam durante a primavera, verão e outono e diminuem no
          inverno. Quando o tempo está favorável a migrações e quando há baixa
          visibilidade (ex.: nevascas, tempestades, neblina etc), seja durante a
          noite ou o dia, o número de colisões dessas espécies de aves pode
          aumentar.²⁴, ²⁵ No hemisfério sul não há evidências de diferenças na
          taxa de colisões entre as estações do ano. A maioria dos estudos são
          unânimes em afirmar que as colisões ocorrem mais no período da manhã.
          Colisões podem ocorrer em dias ensolarados ou nublados.{' '}
        </P>

        <H4>Ambiente</H4>
        <P>
          A proximidade de áreas verdes e comedouros com vidros podem aumentar o
          número de colisões. A proximidade de comedouros e bebedouros com
          vidraças pode aumentar, principalmente, as colisões de aves
          rapinantes, que são predadoras de outras aves .As colisões de aves com
          vidros são mais frequentes em ambientes rurais do que em ambientes
          urbanos. Mas quando em ambiente urbano, a presença de prédios
          espelhados em meio a áreas verdes são verdadeiras armadilhas para
          aves, e elevam os riscos de colisões.
        </P>

        <Fig
          section='colisao'
          number={5}
          legend={
            <p>
              {' '}
              Fachada de prédio com vidraças próxima a uma árvore, lugar que
              aves podem usar como poleiro, para se reproduzir e/ou se
              alimentar. Fonte:{' '}
              <a
                href='https://noticias.unb.br/117-pesquisa/4747-unb-faz-testes-para-reduzir-mortandade-de-aves-que-colidem-em-fachadas-envidracadas'
                target={'_blank'}
                className='text-yellow-600'
              >
                UnB Notícias
              </a>
              .
            </p>
          }
        ></Fig>

        <H4>Tipos de construções</H4>
        <P>
          Colisões de aves em construções são mais frequentes acima dos 3 metros
          de altura e no nível do solo. No entanto, a porcentagem de vidro na
          fachada é um fator mais relevante do que a altura do prédio, quando se
          trata do risco de colisões. O direcionamento e qualidade do vidro
          também importa.
        </P>
        <P>
          Vidraças direcionadas para o solo refletem menos o céu e o ambiente ao
          redor e geram menos colisões.Vidraças que refletem a paisagem
          apresentam até 3x mais riscos de colisões do que aquelas que não
          refletem (incluindo as translúcidas).
        </P>
        <P>
          As chances de colisão são maiores ainda se o material reflete a imagem
          do habitat externo (como um espelho), ou se o ambiente interno é mais
          escuro que o ambiente externo.
        </P>

        <Fig
          section='colisao'
          number={6}
          legend={
            <p>
              {' '}
              Refletividade do céu em um prédio inteiramente coberto por janelas
              de vidro.
            </p>
          }
        ></Fig>

        <H4>Espécies e suscetibilidade à colisão</H4>
        <P>
          A probabilidade de colisões não depende exclusivamente da abundância
          de determinada espécie numa área. Características comportamentais e
          ecológicas específicas de cada espécie são importantes variáveis nas
          chances de colisões com vidro. Indivíduos juvenis inexperientes são
          mais propensos a esses acidentes. Assim, como espécies migratórias que
          parecem ter predominância em casos de colisões na América do Norte.
          Machos territorialistas colidem mais do que fêmeas, talvez por conta
          de comportamentos de voo mais agressivos. Aves de chão e de sub-bosque
          colidem mais que aves de dossel. E espécies adaptadas a ambientes
          florestais e antropizados também são vítimas mais frequentes.
          Situações de predação e de competição (intraespecífica) estão
          relacionadas com muitas colisões. Durante estas ocasiões
          comportamentais as aves negligenciam mais o ambiente ao redor, e um
          vidro passa ainda mais despercebido. Já o comportamento de voar em
          bandos reduz as chances de colisão; E espécies mais frágeis, como
          beija-flores e andorinhas têm menor chance de sobreviver após uma
          colisão do que aves mais robustas.²³
        </P>

        <Fig
          section='colisao'
          number={7}
          legend={
            <p>
              {' '}
              Beija-flor-de-veste-preta <i>(Anthracothorax nigricollis)</i>{' '}
              Autoria: Birds Atlantic.
            </p>
          }
        ></Fig>

        <H3>O problema na América Latina e a situação no Brasil</H3>

        <P>
          As estimativas de colisões de aves com vidros em países da América do
          Sul e Central ainda são incipientes. Os valores resultados de estudos
          publicados nesta região são oriundos de estudos de casos pontuais e
          muito localizados. Um monitoramento de colisões em uma residência
          rural de 270 m² na Colômbia registrou 90 colisões de 25 diferentes
          espécies de aves em vidraças ao longo de três anos e meio⁶. Também na
          Colômbia, um monitoramento de seis edifícios em um campus
          universitário registrou 106 colisões de 18 espécies de aves durante
          dois anos e meio⁷. No México⁸, 21 aves de 16 espécies foram
          encontradas mortas em decorrência de colisões com vidros com quatro
          edifícios em um ano no campus universitário de Tamaulipas. Na Costa
          Rica⁹, um estudo constatou que ao menos 131 das 910 espécies de aves
          do país já colidiram com vidros, incluindo espécies raras e ameaçadas
          de extinção. Na Argentina¹⁰, uma pesquisa mostrou que 48% dos
          entrevistados reportaram colisão de aves em suas residências ocorrendo
          nos 12 meses anteriores à entrevista. Nesta mesma pesquisa, cerca de
          58% dos participantes que vivem em residências de até 3 andares
          relataram terem visto ou ouvido colisões de aves com vidros,
          contrastando com 26% de reporte de colisões entre os que vivem em
          edificações com mais de três andares. Mais da metade dos relatos de
          aves colididas na Argentina envolve espécies de passarinhos (64%),
          seguidos por pombos e beija-flores. A partir dos relatos de memória
          dos entrevistados, os pesquisadores estimaram um número anual de 3.2 ±
          10.2 colisões por edifício amostrado na Argentina, com uma média de
          0.47 ± 1.22 fatalidades por ano por edifício.²¹, ²²
        </P>

        <Fig
          section='colisao'
          number={8}
          legend={
            <p>
              {' '}
              Gráfico da porcentagem de colisões que ocorrem com diferentes
              grupos de aves: rapinantes, passeriformes, pombos, beija-flores e
              outros. Ao lado, a porcentagem de colisões que ocorrem em prédios
              de até três andares e em construção de mais de três andares.
              Fonte: Rebolo e Lambertucci (2019).
            </p>
          }
        ></Fig>

        <P>
          No Brasil, o cenário de conhecimento sobre o impacto dos vidros sobre
          as aves segue longe de ser bem compreendido. Apesar disso, ao menos
          seis estudos de caso¹¹ ¹² ¹³ ¹⁴ ¹⁵ ¹⁶ se destacam nos últimos sete
          anos, analisando casos de colisões de aves em vidros. A partir desses
          estudos identificamos que 80 espécies de aves brasileiras possuem
          registro de colisões em vidros documentados na literatura. O
          sanhaço-cinzento (Thraupis sayaca), uma das aves mais comuns no
          Brasil, é a única espécie reportada em colisões com vidros em todos os
          seis estudos até então publicados. No museu do Santuário do Caraça¹²,
          uma construção com 408.5 m² de vidros reflexivos a 70 metros de
          distância da vegetação nativa em uma reserva natural em Minas Gerais
          funciona como uma grande armadilha para as aves locais. Pesquisadores
          registraram 102 aves mortas por colisão com vidros nesta construção
          entre 2010 e 2013; uma taxa de 2,12 mortes/mês ou 25,5 mortes/ano!
          Adicionando ao estudo dados ocasionais de anos anteriores e
          posteriores ao monitoramento realizado entre 2010 e 2013, os
          pesquisadores reportam que ao menos 57 espécies de aves já colidiram
          no Museu do Caraça, destacando-se as espécies dependentes de
          florestas.
        </P>

        <Fig
          section='colisao'
          number={9}
          legend={
            <p>
              Sanhaço-cinzento <i>(Thraupis sayaca)</i>. Autoria: Birds
              Atlantic.
            </p>
          }
        ></Fig>

        <Fig
          section='colisao'
          number={10}
          legend={
            <p>
              Esboço arquitetônico do museu do Santuário do Caraça, mostrando
              detalhes da construção, com a largura, altura e profundidade de
              seus lados. Porcentagem e área (em m²) de vidro (áreas cinzas) em
              cada lado do museu do Caraça: (A) ≅ 31% (110), (B) ≅ 90% (151.5),
              (C) ≅ 34.9% (124.2), (D) ≅ 13.6% (22.8). Imagem retirada de
              Santos, Abreu e Vasconcelos (2017).
            </p>
          }
        ></Fig>

        <H3>
          As principais causas de mortalidade em aves que colidem com vidros
        </H3>

        <P>
          Nem toda ave que colide com vidros vem a óbito imediatamente. O estudo
          desenvolvido por Laura Agudélo-López e colaboradores em um campus
          universitário em Bogotá, na Colômbia, registrou que 105 das 119 aves
          que colidiram com vidros morreram. Daniel Klem Jr.,um dos principais
          especialistas no tema, desenvolveu um estudo ainda no final da década
          de 1980 em Illinois, nos EUA, quando avaliou a recuperação de 31 aves
          sobreviventes e fez a necropsia de outras 300 aves que foram a óbito
          após o impacto com vidros¹⁷. Klem diagnosticou que a hemorragia
          cerebral é a principal causa de morte das aves que colidem com vidros.
          De modo complementar, o estudo de Jin Lee e colabores, realizado em
          2024, apontou que além das hemorragias cranianas, as múltiplas faturas
          e as rupturas de órgãos internos, também contribuem significativamente
          para a mortandade de aves colididas.
        </P>
        <P>
          Em 2021, pesquisadores da Universidade Federal do Paraná¹⁵ publicaram
          um estudo a partir de análises de raio-X e necrópsia constatando que
          traumatismos e hemorragias cranianas foram as principais injúrias
          sofridas em aves que colidiram com vidros no Brasil. Hemorragias
          internas no tórax e abdômen, além de fraturas de bico também são
          lesões comuns, segundo esse estudo brasileiro. É importante reiterar,
          que as aves de maior porte (e.g. Columbina talpacoti, Leptotila
          verreauxi e Zenaida auriculata), são as mais propensas a sérios danos
          após a colisão, uma vez que colidem de maneira mais abrupta contra o
          vidro ao compará-las com aves de menor porte 20.
        </P>
        <P>
          As aves que sobrevivem após o impacto podem conseguir voar em seguida,
          mas muitas ficam desorientadas e podem levar de alguns minutos a
          algumas horas para se recuperar¹⁷. Esse tempo pode ser de fundamental
          importância para sua sobrevivência, uma vez que a colisão por vidros
          deixa as aves sobreviventes suscetíveis à predação, especialmente por
          cães e gatos domésticos¹⁸. Por isso, as aves que sobrevivem aos
          impactos devem ser mantidas em locais longe de estímulos visuais, como
          caixas com boa ventilação, e aquecidas com bolsas térmicas. Assim que
          a ave demonstrar estar recuperando os sentidos, pode-se oferecer água
          e alimento adequado, e caso a ave esteja em condições, deve ser
          liberada para voar livremente.
        </P>

        <H3>Soluções para reduzir o impacto das colisões com vidros</H3>

        <P>
          Existem diferentes maneiras de se evitar colisões de aves em vidros,
          janelas e outras estruturas. A identificação do problema e a análise
          do risco variam de acordo com o tipo de vidro e o ambiente. Abaixo
          trazemos algumas soluções práticas que qualquer pessoa pode empregar
          com pouco ou nenhum custo.
        </P>

        <H4>Cubra as janelas com marcadores visíveis</H4>
        <P>
          Utilize adesivos ou decalques de padrões, ou{' '}
          <a
            href='https://youtu.be/UC9xQkUtQ98'
            className='text-yellow-600'
            target={'_blank'}
          >
            desenhe padrões com canetas¹⁹
          </a>{' '}
          a base de água branca. Seja qual for a alternativa escolhida, o mais
          importante é que cubra toda a extensão do vidro. Adesivos de aves
          predadoras têm efeitos estéticos, mas podem não reduzir
          significativamente o número de colisões quando não ocupam a maior área
          do vidro¹¹. Incentivamos o uso de adesivos circulares de 1.8 a 2 cm de
          diâmetro, dispostos a 10 cm de distância em si¹⁴, cobrindo a maior
          extensão possível da estrutura envidraçada.{' '}
          <a
            href='https://www.oama.eco.br/downloads'
            className='text-yellow-600'
            target={'_blank'}
          >
            Clique aqui para baixar
          </a>{' '}
          o modelo de adesivos anti-colisão. Outra alternativa que alia estética
          e eficácia são os adesivos UV. Embora aparente ser transparentes aos
          olhos humanos, esses adesivos refletem cores do espectro ultravioleta,
          que são visíveis para a maioria dos pássaros⁶. Existem ainda opções de
          vidros que já possuem padrões de pontos inseridos ou a possibilidade
          de se realizar artes coloridas.
          <a
            href='https://abcbirds.org/glass-collisions/photo-gallery/'
            className='text-yellow-600'
          >
            Veja aqui outras adaptações possíveis para janelas e paredes de
            vidro.
          </a>
        </P>
        <Fig
          section='colisao'
          number={11}
          legend={
            <p>
              Instruções de como adequar janelas para evitar colisões. Indica-se
              o uso de adesivos de 1,8 cm de diâmetro, separados entre si por,
              no máximo, 10 cm.
            </p>
          }
        ></Fig>

        <Fig
          section='colisao'
          number={12}
          legend={
            <p>
              Fachada da porta de entrada do Centro de Excelência em Turismo da
              UnB, um exemplo da aplicação dos adesivos circulares. Fonte: UnB
              Notícias.
            </p>
          }
        ></Fig>

        <H4>Modificações no jardim ou interior das casas/edificações</H4>
        <P>
          Uma forma de evitar colisões de aves em vidros é identificar
          potenciais atrativos para aves que estejam próximos aos vidros, seja
          no interior ou exterior das edificações.
        </P>
        <P>
          Se você usa comedouros ou bebedouros para aves, mantenha-os a pelo
          menos 10 metros de distância das janelas e paredes de vidro. Isso
          evita que as aves colidam com vidros ao chegar ou sair do atrativo, ou
          quando for escapar de algum predador à espreita.
        </P>
        <P>
          Reposicione plantas no interior de casa para que não estejam
          especialmente próximas das janelas, uma vez que as aves podem tentar
          alcançá-las sem notar o vidro como uma barreira. Feche cortinas,
          persianas e evite manter visíveis as sugestivas rotas de voos entre
          janelas e portas. Uma ave que está do lado de fora dificilmente
          identifica o vidro como barreira ao voo quando observa uma possível
          rota que a faria “atravessar” a casa. Por isso é ainda mais
          importante, nesses casos, obstruir a visão com anteparos (cortinas) ou
          usar marcadores de visibilidade (adesivos).
        </P>

        <Fig
          section='colisao'
          number={13}
          legend={
            <p>Janela de vidro com cortina fechada. (Creative commons 1.0).</p>
          }
        ></Fig>

        <H4>O que fazer se uma ave colidir com sua janela?</H4>
        <P>
          Viu uma ave confusa ou machucada perto da janela? Se a ave está apenas
          desnorteada, mantenha cães e gatos longe, e observe a ave à distância.
          Ela provavelmente irá se recuperar sozinha. Se a ave aparenta ter
          algum machucado mais sério, como bico, asa ou pata quebrada, considere
          acondicioná-la em uma caixa de papelão em local seguro e afastado de
          animais de estimação e barulho. Em seguida, contate a polícia
          ambiental e/ou o Centro de Triagem de Animais Silvestres (
          <a
            href='https://www.gov.br/ibama/pt-br/acesso-a-informacao/institucional/o-que-sao-os-cetas'
            className='text-yellow-600'
          >
            CETAS/Ibama
          </a>
          ) da sua região para a realização do resgate e reabilitação. Em geral,
          esses locais irão lhe orientar para proceder com a destinação deste
          animal para um centro de reabilitação ou veterinário capacitado. O
          ideal nesses casos, é reduzir o estresse ao animal, seja pela
          manipulação excessiva ou pelo contato visual com pessoas e predadores,
          assegurando maiores chances de recuperação ao animal debilitado até a
          destinação adequada.
        </P>

        <H4>Achou uma ave morta?</H4>
        <P>
          Se você achou a ave morta próxima a uma janela, vidraça ou parede
          branca, é possível que a causa da morte seja decorrente do impacto da
          colisão com esta estrutura. Para evitar contaminações, remova o animal
          usando luvas ou sacolas plásticas. Aves mortas podem ser uma
          importante fonte de informação para museus de Zoologia e História
          Natural. Caso na sua região exista um, entre em contato com o curador
          de Ornitologia, informando sobre a ocorrência e veja se ele se
          interessa pela carcaça do animal. Considere, nesse caso, anexar uma
          fotografia do animal ou uma descrição das cores. Caso essa opção seja
          inviável para você, descarte a ave em um lixo com tampa, evitando que
          predadores e animais de estimação encontrem a carcaça.
        </P>

        <H4>Ficou interessado e quer saber mais?</H4>
        <P>
          É necessário que mais debates sejam conduzidos sobre a colisão de aves
          em vidros para que se crie uma demanda de mudança . Os seminários{' '}
          <a
            href='https://www.youtube.com/playlist?list=PLku2XjpwYgvNwHZE-lX0sbFxjSNpEbIXT'
            className='text-yellow-600'
          >
            (16) Colisões - YouTube
          </a>
          , realizados pelo COA-POA e a SAVE Brasil, disponíveis no canal do
          Avistar, contaram com apresentações de pesquisadores brasileiros e
          estrangeiros pautadas nessa problemática, na avaliação de sua dimensão
          no Brasil e em alternativas técnicas e medidas legislativas para
          redução da mortandade de aves.
        </P>

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                1 MACHTANS, C. S.; WEDELES, C.H.R.; BAYNE, E.M. A first estimate
                for Canada of the number of birds killed by colliding with
                building windows. <strong>Avian Conserv Ecol</strong>, v.8, n.2,
                6p., 2013.
              </P>
              <P>
                2 LOSS, S.R. et al. Bird-building collisions in the United
                States: Estimates of annual mortality and species vulnerability.{' '}
                <strong>Condor</strong>, v. 116, p. 8-23, 2014.
              </P>
              <P>
                3 KLEM, D. JR. Avian mortality at windows: the second largest
                human source of bird mortality on Earth.
                <strong>
                  {' '}
                  Proceedings of the Fourth International Partners in Flight
                  Conference: Tundra to Tropics
                </strong>
                , p. 244-251, 2009.
              </P>
              <P>
                4 ANTONIDES, J. D.; DEWOODY, J. A. Birds and Residential Window
                Strikes : Tips for Prevention. Forestry and Natural Resources,
                2018.
              </P>
              <P>
                5 BASILIO, L. G.; MORENO, D. J.; PIRATELLI, A. J. Main causes of
                bird-window collisions: a review.{' '}
                <strong>An Acad Bras Cienc</strong>, v. 92, n. 1, 2020.
              </P>
              <P>
                6 OCAMPO-PEÑUELA, N.; PEÑUELA-RECIO, L.; OCAMPO-DURAN, Á. Decals
                prevent bird-window collisions at residences: a successful case
                study from Colombia. <strong>Ornitología Colombiana</strong>, n.
                15, p. 84-91, 2015.
              </P>
              <P>
                7 AGUDELO-ÁLVAREZ, L.; MORENO-VELASQUEZ, J.; OCAMPO-PEÑUELA, N.{' '}
                <strong>Ornitología Colombiana</strong>, n. 10, p. 3-10, 2010.
              </P>
              <P>
                8 GÓMEZ-MORENO, V. D. C.; HERRERA-HERRERA, J. R.;
                NIÑO-MALDONADO, S. Colisión de aves en ventanas del Centro
                Universitario Victoria, Tamaulipas, México. Huitzil,{' '}
                <strong>Rev. Mex. Ornitol.</strong>, v. 19, n. 2, p. 227-236,
                2018.
              </P>
              <P>
                9 MENACHO-ODIO, R. M. Colisión de aves contra ventanas en Costa
                Rica: conociendo el problema a partir de datos de museos,
                ciencia ciudadana y el aporte de biólogos.{' '}
                <strong>Zeledonia</strong>, v. 19, n. 1, p. 10-21, 2015.
              </P>
              <P>
                10 REBOLO-IFRÁN, N.; VIRGILIO, A.; LAMBERTUCCI, S. A. Drivers of
                bird-window collisions in southern South America: a two scale
                assessment applying citizen science. <strong>Sci Rep</strong>,
                v. 9, n. 18148, 2019.
              </P>
              <P>
                11 BRISQUE, T.; CAMPOS-SILVA, L.A.; PIRATELLI, A.J. Relationship
                between bird-of-prey decals and bird-window collisions on a
                Brazilian university campus. <strong>Zoologia</strong>, v. 34,
                n. e13729, 2017.
              </P>
              <P>
                12 SANTOS, L. P. S.; ABREU, V. F.; VASCONCELOS, M. F. Bird
                mortality due to collisions in glass panes on an Important Bird
                Area of southeastern Brazil.{' '}
                <strong>Revista Brasileira de Ornitologia</strong>, v. 25, n. 2,
                p. 90-101, 2017.
              </P>
              <P>
                13 STOLK, A. S. et al. Avifauna colidida em estruturas de vidro
                no perímetro urbano de Balneário Rincão, Santa Catarina.{' '}
                <strong>Revista Tecnologia e Ambiente</strong>, v. 21, n. 1, p.
                249-263, 2015.
              </P>
              <P>
                14 RIBEIRO, B. C.; PIRATELLI, A. J. Circular-shaped decals
                prevent bird-window collisions.{' '}
                <strong>Ornithology Research</strong>, v. 28, p. 69-73, 2020.
              </P>
              <P>
                15 FORNAZARI, G. A. et al. Window Collisions by Birds in Brazil:
                Epidemiologic Factors and Radiographic and Necropsy Assessments.{' '}
                <strong>Journal of Avian Medicine and Surgery</strong>, v. 35,
                n. 3, p. 313-324, 2021.
              </P>
              <P>
                16 LOPES, A.C. Colisões de Aves com os Vidros na Universidade
                Federal de Ouro Preto- UFOP: é possível evitar?. Trabalho de
                Conclusão de Curso. UFOP. 26p. 2019.
              </P>
              <P>
                17 KLEM, D. JR. Bird injuries, cause of death, and recuperation
                from collisions with windows. <strong>J. Field Ornithol</strong>
                , v. 6, n. 1, p. 115-119, 1990.
              </P>
              <P>
                18 REBOLO-IFRÁN, N.; ZAMORA-NASCA, L.; LAMBERTUCCI, S.A. Cat and
                dog predation on birds: The importance of indirect predation
                after bird-window collisions.{' '}
                <strong>Perspectives in Ecology and Conservation</strong>, v.
                19, p. 293-299, 2021.
              </P>
              <P>
                {' '}
                19 SALLY, A. Incredibly simple tip to prevent birds flying into
                window. YouTube. Disponível em:
                https://www.youtube.com/watch?v=UC9xQkUtQ98.
              </P>
              <P>
                20. JIN LEE, S.; MATOS, F. N.; GONZAGA, C. R. R.; DE MEDEIROS,
                M. A.; LEANDRO, S. F. S.; TEIXEIRA, R. H. F.; DA COSTA, A. L.
                M.; PIRATELLI, A. J. Post mortem analysis of birds that collided
                with glass panes reveals multiple injuries and fractures.
                Ornithology Research, P. 1-5, 2024.
                https://doi.org/10.1007/s43388-024-00201-4.
              </P>
              <P>
                21 LOVETTE, I. J.; FITZPATRICK, J. W. (ed.). Handbook of Bird
                Biology. 3. ed. Chichester: Wiley, 2016.
              </P>
              <P>
                22 BOSTRÖM, J. E.; DIMITROVA, M.; CANTON, C.; HÅSTAD, O.;
                QVARNSTRÖM, A.; ÖDEEN, A.. Ultra-Rapid Vision in Birds. Plos
                One, [S.L.], v. 11, n. 3, p. 1-7, 18 mar. 2016. Public Library
                of Science (PLoS).
              </P>
              <P>
                23 VILLON, E. How dangerous is glass?: Understanding collisions
                and bird mortality in finland. 2024. 55 f. Dissertação
                (Mestrado) - Curso de Ecology And Evolutionary Biology, Faculty
                Of Biological And Environmental Sciences, Helsinki, 2024.
              </P>
              <P>
                24 LAO, S. et al. Bird–building collisions increase with weather
                conditions that favor nocturnal migration and with inclement and
                changing weather. Ornithological Applications, [S.L.], v. 125,
                n. 1, p. 1-12, 10 nov. 2022. Oxford University Press (OUP).
              </P>
              <P>
                25 KLEM D. Bird: Window Collisions. The Wilson Bulletin, [S.L.],
                v. 101, n. 4, p. 606–620, 1989. JSTOR.
              </P>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
