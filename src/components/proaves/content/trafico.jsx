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

export default function Trafico() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#FE8989] p-6'>
        <h2 className='text-3xl font-bold text-gray-800 '>
          Tráfico de animais silvestres
        </h2>
      </DialogHeader>

      <div className='px-6 pt-4 text-gray-600'>
        <Fig
          section='trafico'
          number={1}
          legend={
            <p>
              Sagui, primata arborícola do gênero <i>Callithrix</i>, restrito a
              um recinto gradeado. Autoria: Superintendência do IBAMA no Estado
              de Goiás.
            </p>
          }
        ></Fig>

        <P>
          Como a terceira maior atividade ilegal do mundo, atrás apenas do
          tráfico de armas e de drogas, o tráfico ilegal de animais silvestres
          envolve uma ampla cadeia de caça, captura e comércio ilegal da vida
          selvagem. Os animais silvestres são traficados vivos ou mortos,
          inteiros ou em partes que atendem a diversos propósitos. As demandas
          do mercado ilegal de animais silvestres variam desde o abastecimento
          irregular de coleções particulares de zoológicos, aquários e pets de
          cidadãos comuns; às indústrias da moda e medicina/farmacêutica; a
          reprodução em criadouros ilegais e legais infratores; o mercado de
          decoração doméstica; ou o consumo alimentar e rituais
          religiosos/culturais. Parte da problemática envolvendo essa prática
          vem da sua valorização, com estimativas que variam entre US$10 bilhões
          e US$20 bi por ano, o que equivale a, aproximadamente, 5% do tamanho
          do comércio internacional de drogas<sup>1</sup>. No Brasil, estima-se
          que esse valor seja de R$2,5 bi por ano <sup>2</sup>. Enquanto isso, o
          investimento no combate a esse tipo de crime é quase o mínimo.
        </P>

        <Fig
          section='trafico'
          number={2}
          legend={
            <p>
              Cardeal-do-nordeste <i>(Paroaria dominicana)</i> apreendido dentro
              de gaiola. Autoria: Superintendência do IBAMA no Estado de Goiás.
            </p>
          }
        ></Fig>

        <P>
          <strong>Os impactos são refletidos em números</strong>, e embora ainda
          não exista um sistema unificado de cadastro nacional de animais
          silvestres apreendidos por posse ou tráfico ilegal, decidimos
          apresentar alguns resultados já publicados. Somente nos anos de
          2017-2019, o CPAmb (Comando de Policiamento Ambiental do Estado de São
          Paulo) apreendeu 82.040 animais advindos do tráfico<sup> 3</sup>. Além
          disso, os CETAS (Centros de Triagem de Animais Silvestres),
          administrados pelo IBAMA (Instituto Brasileiro do Meio Ambiente e dos
          Recursos Naturais) de todo o país, apreenderam mais de 72.000 animais
          somente no ano de 2018<sup> 3</sup>. Entre 2002 e 2009, foram
          destinadas aos CETAS de todo o país 250.206 aves, o que representou
          mais de 80% dos animais recebidos nesse período<sup>4</sup>. Esse
          impacto recorrente tem como alvo cerca de 295 espécies de aves, a
          maioria da família Thraupidae <sup>5</sup> entre as quais se destacam
          as espécies de papa-capim do gênero Sporophila, como o baiano{' '}
          <i>(S. nigricollis)</i> e o bigodinho <i>(S. lineola)</i>, e espécies
          em perigo de extinção como a arara-azul-de-lear{' '}
          <i>(Anodorhynchus leari)</i>. Embora estejam extintas localmente ou
          com populações extremamente reduzidas em várias localidades, as aves
          mais traficadas como o canário-da-terra <i>(Sicalis flaveola),</i> o
          trinca-ferro <i>(Saltator similis)</i> e o coleirinho{' '}
          <i>(Sporophila caerulescens)</i> <sup>4</sup> não são consideradas
          ameaçadas de extinção no Brasil.{' '}
        </P>

        {/* INFOGRÁFICO: série histórica de animais apreendidos e gráfico de nº animais apreendidos por grupo taxonômico */}

        <H3>
          Da natureza para o mercado ilegal: captura, rotas e atores do tráfico
          de aves
        </H3>

        <P>
          No que diz respeito à avifauna, o Brasil possui a segunda maior
          diversidade de espécies do mundo <sup>6</sup>. Por conta da beleza,
          cores vibrantes, cantos melodiosos, e, em alguns casos, pela raridade,
          determinadas aves são bastante visadas na cadeia do tráfico de animais
          silvestres <sup>5</sup>. O destino final da maioria das aves é o
          aprisionamento, com o intuito, principalmente, de serem mantidos em
          gaiolas como animais de estimação. No país, o tráfico de aves se
          inicia nas zonas rurais, em locais com muitos remanescentes de
          vegetação nativa e unidades de conservação de onde os animais são
          capturados ilegalmente com armadilhas alçapão, arapucas e visgo (um
          tipo de cola) <sup>7,8</sup>. Depois de capturadas, a maioria das aves
          é repassada a comerciantes, que as vendem em feiras livres locais, ou
          a intermediários que transportam esses animais para compradores em
          outras regiões. Em feiras na cidade de Recife, uma das principais
          rotas do mercado de animais silvestres no país, pesquisadores
          observaram a venda de 55 espécies da avifauna e estimam que mais de
          40.000 aves sejam vendidas anualmente, a preços que variam entre US$
          1.10 a 167.00 por individuo, em um comércio anual que pode chegar a
          mais de 630 mil dólares por ano!9 Transportados dias a fio em
          condições precárias, amontoados, sem alimentação, água e submetidas ao
          estresse. A estimativa é que nove a cada dez animais traficados morram
          antes mesmo de chegar ao destino final <sup>2</sup>.{' '}
        </P>

        <P>
          As rotas do tráfico de animais, normalmente, são as mesmas do
          contrabando de diversos outros produtos (armas, drogas, álcool, pedras
          preciosas etc) e são extremamente flexíveis e adaptáveis <sup>2</sup>.
          Embora seja difícil para as autoridades se certificar da origem
          geográfica exata dos animais que porventura são apreendidos, estima-se
          que muitos são provenientes das regiões Norte, Nordeste e
          Centro-Oeste. No tráfico ilegal doméstico, os animais são enviados
          para as regiões Sul, Sudeste e partes do Nordeste via transporte
          rodoviário<sup>4</sup>. O comércio internacional ocorre via estradas,
          rios e aeroportos, sendo mais frequente regiões de fronteira do Norte,
          Centro-Oeste e Sul do Brasil4. Entre as localidades mais usadas para o
          comércio ilegal de animais estão a tríplice fronteira entre Brasil,
          Colônia e Peru, a fronteira entre Amapá e Guiana Francesa, a região
          entre Suriname e Brasil, também entre Venezuela e Brasil
          (principalmente o contrabando de aves canoras), além dos aeroportos de
          capitais da região amazônica com destino ao mercado europeu{' '}
          <sup>3</sup>. No Sul, a tríplice fronteira Brasil-Argentina-Paraguai é
          motivo de preocupação, com pressões sobre a fauna nativa na região do
          extremo oeste paranaense<sup>4</sup>.
        </P>

        <Fig
          section='trafico'
          objectFit='contain'
          number={5}
          legend={
            <p>
              Mapa de áreas-fonte para capturas, rotas terrestres e fluviais e
              pontos comerciais do tráfico ilegal de animas silvestres no
              Brasil. Autoria: Superintendência do IBAMA no Estado de Goiás
              (2021).
            </p>
          }
        ></Fig>

        <P>
          O tráfico de animais silvestres é adaptável e não segue apenas as
          “rotas” tradicionais. Recentemente, a operação Delivery do IBAMA
          indicou que criadores legalizados, registrados no Sispass, poderiam
          estar colaborando com o tráfico ilegal ao solicitar anilhas para
          forjar a regularização de aves silvestres traficadas. Outro exemplo de
          adaptação do tráfico de animais silvestres que ficou evidente durante
          o período de isolamento social da pandemia de coronavírus foi o
          comércio pela internet em redes sociais Os pesquisadores estimam que,
          anualmente, 4 milhões de mensagens contendo uma média de 3,3 anúncios
          cada, sejam enviadas em grupos online de compradores, isso nos dá uma
          média de 13.200.000 anúncios de animais silvestres ilegais apenas nos
          grupos rastreados<sup>10</sup>. Extrapolando aos grupos não
          rastreados, este número pode ser ainda maior.
        </P>

        <H3>Os impactos ambientais do tráfico de animais silvestres</H3>

        <Carroussel section={'trafico'} figs={carrousselImages}></Carroussel>

        <P>
          Para além do sofrimento contido na captura e aprisionamento ilegal de
          um animal, o tráfico pode desencadear consequências diversas ao meio
          ambiente. O efeito direto mais evidente é o declínio populacional e a
          extinção de aves silvestres nos locais de onde esses animais são
          capturados. Antes comuns, aves como o curió{' '}
          <i>(Sporophila angolensis)</i>, trinca-ferro <i>(Saltator similis)</i>
          , azulão <i>(Cyanoloxia brissonii)</i>, papagaio-verdadeiro{' '}
          <i>(Amazona aestiva)</i>, araras e periquitos estão desaparecendo de
          muitas regiões no Brasil <sup>11</sup>. O papel desempenhado por essas
          aves nos ecossistemas naturais agora está defasado, significando menos
          flores polinizadas, sementes dispersadas, e, consequentemente, riscos
          para a sobrevivência futura de plantas e desbalanceamento no controle
          populacional de pragas e vetores <sup>12</sup>.
        </P>
        <P>
          Em sentido contrário à remoção, o tráfico ilegal de animais é um dos
          principais meios de introdução de organismos invasores. O escape
          acidental ou a soltura irresponsável de pets silvestres exóticos (que
          não são nativos daquele local) em um país ou região diferente de sua
          origem natural pode promover alterações biogeográficas de várias
          espécies13. No território brasileiro esse problema já causa grandes
          impactos nas populações de espécies nativas e nos ecossistemas, uma
          vez que altera a estrutura do ambiente, a composição de espécies,
          compromete o ciclo nutricional e as relações ecológicas entre os seres{' '}
          <sup>2</sup>. Algumas espécies como o galo-de-campina{' '}
          <i>(Paroaria dominicana)</i>; o tico-tico{' '}
          <i>(Zonotrichia capensis)</i>; o canário-verdadeiro-da-terra
          <i> (Sicalis flaveola)</i>; e o papa-capim-cappucchino{' '}
          <i>(Sporophila nigricollis)</i>, apresentam alto poder de invasão em
          áreas suscetíveis da América do Sul <sup>13</sup>, e já são observadas
          em regiões fora de sua área de ocorrência natural.
        </P>

        <P>
          Além disso, uma vez que muitos criadouros não possuem controle
          sanitário, é muito comum a transmissão de doenças, que afetam tanto
          aos animais, que morrem antes de chegar ao consumidor, quanto aos
          humanos, incluindo casos de febre amarela, hepatite, salmonela, etc
          <sup>2</sup>. Um levantamento do Ministério da Saúde com os dados do
          RENCTAS (2010), mostrou uma forte correlação entre os lugares com
          maior incidência de febre amarela e as rotas de tráfico de animais
          silvestres. A transmissão de doenças também pode afetar a produção de
          animais para exportação, que sustenta grande parte da economia
          brasileira, causando prejuízo de bilhões de reais <sup>2</sup>.
        </P>

        <Fig
          section='trafico'
          number={9}
          legend={
            <p>
              Sabiá-laranjeira <i>(Turdus rufiventris)</i> apreendido dentro de
              gaiola e com ferimentos no rosto. Autoria: Superintendência do
              IBAMA no Estado de Goiás.
            </p>
          }
        ></Fig>

        <P>
          Outro problema é a destinação dos animais apreendidos. Em geral, o
          destino dos espécimes é o retorno à natureza por meio da soltura,
          quando os animais estão aptos para tal. As áreas de soltura de animais
          reabilitados foram instituídas em 2008 pelo IBAMA, e são os locais
          definidos como ideais, segundo normas técnicas, sanitárias e de
          infraestrutura <sup>2</sup>.
        </P>
        <P>
          Entretanto, para serem soltos os animais precisam ter uma saúde
          perfeita e não possuírem o comportamento de “amansamento” pelo homem{' '}
          <sup>14</sup>. Assim, uma ínfima parcela de animais apreendidos são
          passíveis de serem devolvidos à natureza. Idealmente, os animais devem
          ser soltos nas áreas onde foram capturados, mas há uma enorme
          dificuldade em rastrear seus locais de origem, fazendo com que sejam
          soltos em áreas estratégicas que contemplem algum ponto da
          distribuição histórica da espécie. Essa seria a solução ideal, mas não
          há conhecimento suficiente sobre a viabilidade a longo prazo dessas
          áreas em decorrência das alterações ambientais e mudanças climáticas
          globais<sup>15</sup>. Sem contar que a identificação, a nível de
          espécie, dos animais precisa ser acurada, a fim de excluir riscos de
          uma soltura fora de sua área de ocorrência. Além disso, várias
          espécies apreendidas são oriundas de outros países, nestes casos, não
          há uma destinação adequada para eles.
        </P>

        <H3>Ações para reduzir o tráfico de animais silvestres</H3>

        <Fig
          section='trafico'
          number={10}
          legend={
            <p>
              Canário-da-terra <i>(Sicalis flaveola)</i> em vida livre. Autoria:
              Birds Atlantic.
            </p>
          }
        ></Fig>

        <P>
          O que fazer para diminuir os impactos do tráfico? Como proceder e como
          destinar os animais apreendidos desta atividade? A regra é clara:
          enquanto houver mercado para consumir, haverá alguém para vender.
          Portanto, a primeira e principal medida parte do desincentivo à
          captura e comercialização destes animais.
        </P>
        <P>
          “Mas eu posso criar animais silvestres em casa?” O{' '}
          <a
            href='https://www.ibram.df.gov.br/quero-criar-um-animal-silvestre-o-que-preciso-saber/'
            target='_blank'
          >
            site do Ibram
          </a>{' '}
          dá todas as instruções necessárias a quem deseja criar um animal
          silvestre de forma correta e legal:
        </P>

        <ol className='list-decimal'>
          <li className='mb-4'>
            <strong> Pesquise sobre o animal!</strong> <br />
            Conheça a biologia do animal, seu nome científico, seus
            comportamentos típicos, alimentação, habitat etc. Essas informações
            ajudarão tanto na hora da compra, quanto nos cuidados diários do
            animal.
          </li>
          <li className='mb-4'>
            <strong>
              Certifique-se se o animal desejado precisa de autorização!
            </strong>
            <br />
            Dependendo da espécie, não há necessidade de autorização para a
            criação.
            <br />
            Consulte o site do Ibram.
          </li>
          <li className='mb-4'>
            <strong>
              Seu animal precisa de autorização? Certifique-se de que ele seja
              legalizado!
            </strong>{' '}
            <br />A única forma de possuir um animal silvestre legalizado é
            adquiri-lo de um criadouro ou estabelecimento comercial autorizado
            pelo IBAMA ou pelo órgão estadual/distrital. Consulte-os no site do
            IBAMA. Após a aquizição, você deve receber uma Nota Fiscal, contendo
            a espécie e a marcação do animal, e um Certificado de Origem com a
            mesma espécie e marcação da nota fiscal. Para checar a autenticidade
            do certificado de origem, consulte o Sistema de Gestão de Fauna
            (SISFAUNA).
          </li>
        </ol>

        <P>
          Para os tutores que desejam realizar a soltura de animais adquiridos
          ilegalmente: <strong>NÃO O FAÇA SEM PLANEJAMENTO!</strong> A soltura
          deve ser realizada por profissionais instruídos com todo o apoio
          técnico. Já listamos aqui diversos problemas advindos de uma soltura
          errônea de um animal fora do ambiente de origem, portanto, uma soltura
          impensada é uma atitude completamente irresponsável.{' '}
          <strong>
            Leve o animal ao CETAS mais próximo de você! A entrega voluntária de
            animais traficados não é passível de penalizações ou multas.
          </strong>
        </P>

        <H4>Nada é mais bonito que a leveza de um voar!</H4>
        <P>
          Você não precisa aprisionar e engaiolar um animal para apreciá-lo,
          pelo contrário, onde há amarras, não há amor. Aprecie as aves livres
          em sua região. Procure por parques urbanos, zonas rurais e trilhas na
          mata para contemplar a beleza dos animais de vida livre, expressando
          seus cantos e comportamento da forma mais natural e saudável possível.
        </P>

        <Fig
          section='trafico'
          number={11}
          legend={
            <p>
              Papagaios-verdadeiros <i>(Amazona aestiva)</i> em voo. Autoria:
              Luiz C. Ramassotti.
            </p>
          }
        ></Fig>

        <H4>Fique esperto</H4>
        <p>
          De acordo com o{' '}
          <a
            href='http://www.planalto.gov.br/ccivil_03/leis/l9605.htm'
            target='_blank'
          >
            artigo 29 da lei 9.605 de 1998
          </a>{' '}
          que trata sobre os Crimes Ambientais, é crime contra a fauna “matar,
          perseguir, caçar, apanhar, utilizar espécimes da fauna silvestre,
          nativos ou em rota migratória, sem a devida permissão, licença ou
          autorização da autoridade competente, ou em desacordo com a obtida”. O
          Parágrafo 1º destaca ainda que, incorre nas mesmas penas,
        </p>
        <span className='p-2'>
          <P>
            III- “quem vende, expõe à venda, exporta ou adquire, guarda, tem em
            cativeiro ou depósito, utiliza ou transporta ovos, larvas ou
            espécimes da fauna silvestre, nativa ou em rota migratória, bem como
            produtos e objetos dela oriundos, provenientes de criadouros não
            autorizados ou sem a devida permissão, licença ou autorização da
            autoridade competente.”
          </P>
        </span>

        <H4>Denuncie!</H4>
        <P>
          Se você observou ou suspeita de atividades de caça, captura ou
          comércio ilegal de animais silvestres em algum local próximo,
          denuncie! Contate diferentes esferas do poder público para garantir
          alguma ação.
        </P>

        <ul>
          <li className='mb-4'>
            IBAMA – denúncias pela Linha Verde (0800 618080), na sede em
            Brasília ou na superintendência do Estado. Email:
            linhaverde.sede@ibama.gov.br.
          </li>
          <li className='mb-4'>
            Órgão estadual do meio ambiente – procure a regional mais próxima.
          </li>
          <li className='mb-4'>
            Polícia Civil – faça a denúncia pelo telefone 147.
          </li>
          <li className='mb-4'>
            Polícia Militar – as denúncias podem ser feitas pelo telefone 190.
          </li>
          <li className='mb-4'>
            RENCTAS - Rede Nacional Contra o Tráfico de Animais Silvestres - 61
            3550-7227.
          </li>
          <li className='mb-4'>Envie um email para: renctas@renctas.org.br.</li>
        </ul>

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className='mb-4'>
                1 WILSON-WILDE, Linzi. Wildlife crime: a global problem.
                Forensic science, medicine, and pathology, v. 6, n. 3, p.
                221-222, 2010.
              </p>
              <p className='mb-4'>
                2 RENCTAS (Rede Nacional de Combate ao Tráfico de Animais
                Silvestres).{' '}
                <strong>
                  1º Relatório Nacional sobre o Tráfico de Fauna Silvestre
                </strong>
                . 2011. Disponível em: . Acesso em: 15 jul. 2010.
              </p>
              <p className='mb-4'>
                3 CHARITY, Sandra; FERREIRA, Juliana Machado. Wildlife
                trafficking in Brazil. <strong>Traffic International</strong>,
                Cambridge, United Kingdom. 140p, 2020.
              </p>
              <p className='mb-4'>
                4 DESTRO, Guilherme Fernando Gomes et al. Efforts to combat wild
                animals trafficking in Brazil.
                <strong> Biodiversity enrichment in a diverse world</strong>, v.
                1, p. 421-436, 2012.
              </p>
              <p className='mb-4'>
                5 ALVES, RÔMULO ROMEU NÓBREGA; LIMA, JOSÉ RIBAMAR DE FARIAS;
                ARAUJO, Helder Farias P. The live bird trade in Brazil and its
                conservation implications: an overview.{' '}
                <strong>Bird Conservation International</strong>, v. 23, n. 1,
                p. 53-65, 2013.
              </p>
              <p className='mb-4'>
                6 CLEMENTS, J. F. et al. The eBird/Clements checklist of birds
                of the world: v2019. 2019
              </p>
              <p className='mb-4'>
                7 Souto, W.M.S.; Torres, M.A.R.; Sousa, B.F.C.F.; Lima,
                K.G.G.C.; Vieira, L.T.S.; Pereira, G.A.; Guzzi, A.; Silva, M.V.
                & Pralon, B.G.N. (2017) Singing for cages: The use and trade of
                passeriformes as wild pets in an economic center of the Amazon -
                NE Brazil route. <strong>Tropical Conservation Science</strong>{' '}
                10:1–19.
              </p>
              <p className='mb-4'>
                8 DESTRO, Guilherme Fernando Gomes; DE MARCO, Paulo; TERRIBILE,
                Levi Carina. Comparing environmental and socioeconomic drivers
                of illegal capture of wild birds in Brazil. Environmental
                conservation, v. 47, n. 1, p. 46-51, 2020
              </p>
              <p className='mb-4'>
                9 Regueira, R.F.S. & Bernard, E. (2012) Wildlife sinks:
                Quantifying the impact of illegal bird trade in street markets
                in Brazil. <strong>Biological Conservation</strong> 149:16-22.
              </p>
              <p className='mb-4'>
                10 WYATT, Tanya et al. Wildlife trafficking via social media in
                Brazil. <strong>Biological Conservation</strong>, v. 265, p.
                109420, 2022
              </p>
              <p className='mb-4'>
                11 Marini MA, GARCIA FI. Bird conservation in Brazil.{' '}
                <strong>Conserv Biol</strong>. 2005;19(3): 665–71.
              </p>
              <p className='mb-4'>
                12 Dai, C. & Zhang, C. (2017) The local bird trade and its
                conservation impacts in the city of Guiyang, southwest China.{' '}
                <strong>Regional Environmental Change</strong>.
                Http://dx.doi.org/10.1007/s10113-017-1141-5. Acesso em 24 de
                novembro de 2016
              </p>
              <p className='mb-4'>
                13 DESTRO, Guilherme Fernando Gomes et al. Climate suitability
                as indicative of invasion potential for the most seized bird
                species in Brazil.{' '}
                <strong>Journal for Nature Conservation</strong>, v. 58, p.
                125890, 2020.
              </p>
              <p className='mb-4'>
                14 Costa, Fabio & Monteiro, Kellen. (2017). Guia de
                Identificação de Aves Traficadas no Brazil.
                https://www.researchgate.net/publication/329488481_Guia_de_Identificacao_de_Aves_Traficadas_no_Brazil
              </p>
              <p className='mb-4'>
                15 DESTRO, Guilherme Fernando Gomes et al. Back home?
                Uncertainties for returning seized animals to the source‐areas
                under climate change. <strong>Global change biology</strong>, v.
                25, n. 10, p. 3242-3253, 2019.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
