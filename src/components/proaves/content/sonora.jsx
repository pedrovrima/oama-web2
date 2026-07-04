import Fig from "../fig";
import Image from "../legacy-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

import { DialogContent, DialogHeader } from "../ui/dialog";

export default function Sonora() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#98C1D8] p-6'>
        <h2 className='text-3xl font-bold text-gray-800 '>Poluição sonora</h2>
      </DialogHeader>

      <div className='px-6 text-gray-600'>
        <Fig
          section='sonora'
          number={1}
          legend={
            <p>
              Capitão-de-saíra <span className='italic'>(Attila rufus)</span>,
              pássaro endêmico do Brasil, vocalizando em seu território.
              Autoria: Birds Atlantic.
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Quem vive em grandes centros urbanos já está mais que habituado à
          excessiva quantidade de ruídos. Saímos cedinho de nossas casas ao som
          do feirante da manhã vendendo cheiro-verde, passamos pelo trânsito
          caótico, e sons de buzina e motor nos acompanham até o trabalho, e,
          com sorte, voltamos a tempo de ouvir o anúncio do carro do gás no
          início da noite. As ruas parecem nunca descansar, e o estresse
          decorrente desse ritmo frenético ganha corpo.
        </p>
        <p className='mb-4'>
          Enfrentamos uma dificuldade imensa em ouvir e ser ouvidos quando há
          excesso de barulho em um ambiente – e o mesmo acontece com os animais!
          Os animais que vivem em ambientes urbanos são os mais afetados pelos
          ruídos, mas a poluição sonora moderna já chegou a níveis tão altos que
          tem atingido até mesmo espécies florestais em áreas protegidas. Dados
          do Serviço de Parques Nacionais dos Estados Unidos indicam que a
          poluição sonora gera grande impacto ambiental e diversos efeitos
          negativos para a vida silvestre. Esses efeitos podem alterar
          importantes padrões ecológicos até mesmo em espécies ameaçadas,
          aumentando o risco de extinção <sup>1,2</sup>.
        </p>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          De onde vem a poluição sonora?
        </h3>

        <p className='mb-4'>
          Embora existam inúmeras fontes, o ruído antropogênico está associado
          principalmente a quatro fatores inter-relacionados – todos com
          crescimento previsto para os próximos anos – e, de forma proporcional,
          espera-se que a exposição da vida selvagem ao ruído antropogênico
          também aumente<sup>3</sup>:
        </p>

        <Fig
          section='sonora'
          number={2}
          legend={
            <p>
              Alguns dos fatores que devem levar ao aumento do ruído
              antropogênico no futuro, aumentando o impacto na biodiversidade, a
              não ser que algo seja feito.
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Outras atividades humanas também provocam ruídos desconfortáveis, a
          exemplo de obras de construção, indústrias, festivais, fogos de
          artifício. Visando alertar e contornar a problemática, a OMS impõe
          limites recomendáveis para ruídos urbanos<sup>4</sup>. No Brasil, a
          Associação Brasileira de Normas Técnicas (ABNT) recomenda que, em
          zonas residenciais urbanas, o limite seja de 55 dB durante o dia e 50
          dB à noite. Em centros de cidades, o limite é 65 dB durante o dia e 60
          dB à noite. Em áreas industriais, 70 dB durante o dia e 65 dB à noite
          <sup>5</sup>. Ademais, a Política Nacional de Meio Ambiente (Lei nº
          6.938, de 31 de agosto de 1981) dispõe sobre a questão, prevendo
          sanções aos transgressores.
        </p>

        <Fig
          section='sonora'
          objectFit='contain'
          number={3}
          legend={
            <p>
              A volume de alguns ruídos em decibéis, para comparação, o canto da
              Araponga-da-Amazônia <i>(Procnias albus)</i>. Autoria da foto:
              Hector Bottai (Creative commons 2.0).
            </p>
          }
        ></Fig>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          A vida animal está sendo afetada!
        </h3>

        <p className='mb-4'>
          Assim como nós, muitos animais se comunicam através de sons. Nas aves,
          alguns comportamentos são fortemente mediados pelo som, como a atração
          de parceiros sexuais, a defesa do território, o alerta de
          coespecíficos e o cuidado da prole. Desta forma, as aves “urbanas” têm
          encontrado na poluição sonora uma barreira entre a transmissão e a
          recepção de suas vocalizações. Uma paisagem acústica poluída provoca
          alterações de comportamento ecológico, fisiológico e até mesmo na
          morfologia dos animais<sup>6, 7, 8</sup>.
        </p>
        <p className='mb-4'>
          Em um experimento realizado com a andorinha-das-árvores{' '}
          <i>(Tachycineta bicolor)</i>, observou-se que a exposição ao ruído do
          tráfego urbano reduziu o comportamento de vigilância dos pais nas
          fases iniciais de desenvolvimento dos ninhegos e, posteriormente,
          elevou a taxa de alimentação dos filhotes. Embora tenham recebido
          alimentos com maior frequência, os filhotes apresentaram menor
          tamanho, altos níveis de estresse oxidativo e demoraram mais para
          deixar os ninhos<sup>8</sup>. Algumas aves usam uma estratégia mais
          simples e desgastante para contornar os ruídos urbanos: cantam mais
          alto do que aquelas que residem nas florestas ou alteram a frequência
          de seus cantos<sup>6, 7</sup>.
        </p>

        <Fig
          section='sonora'
          objectFit='contain'
          number={4}
          legend={
            <p>
              Resumo dos impactos da poluição sonora registrados para a
              andorinha-das-árvores <i>(Tachycineta bicolor)</i> em um estudo.
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Ave símbolo do Brasil, o sabiá-laranjeira <i>(Turdus rufiventris)</i>{' '}
          já inspirou diversos poemas e canções. Ao escrever que em “minha terra
          tem palmeiras, onde canta o sabiá”, Gonçalves Dias, importante poeta
          brasileiro, jamais imaginaria que, anos depois, a questão mais
          importante não seria onde canta, mas, sim, a que horas canta o sabiá.
          E é justamente buscando responder a essa pergunta que uma interessante
          pesquisa vem sendo conduzida no Brasil – com a ajuda da ciência
          cidadã. O pesquisador Sandro Von Matter criou uma{' '}
          <a
            className='text-yellow-600'
            href='https://svonmatter.wixsite.com/horadosabia'
            target='_blank'
          >
            plataforma
          </a>{' '}
          que busca entender como a poluição sonora tem afetado o horário de
          canto e cortejo dessa espécie
        </p>
        <Fig
          section='sonora'
          number={5}
          legend={
            <p>
              A ave símbolo do Brasil, o sabiá-laranjeira{' '}
              <i>(Turdus rufiventris)</i>, também tem sentido os efeitos da
              poluição sonora na sua biologia. Autoria: acervo OAMa.
            </p>
          }
        ></Fig>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          Como podemos contornar o problema?
        </h3>

        <p className='mb-4'>
          Para que possamos entender e pensar soluções estratégicas, a fim de
          contornar esse problema e promover o bem-estar de nossa avifauna, é
          necessária a realização de estudos.
        </p>
        <p className='mb-4'>
          O mapeamento dos picos de som, conduzido pelo poder público, pode
          ajudar a elaborar planos para o manejo do ruído. Atualmente, as
          medidas para mitigação da poluição sonora são voltadas quase
          exclusivamente para humanos. Mas como ficam as espécies mais sensíveis
          e que não habitam ambientes urbanos? Qual deve ser o nosso objetivo no
          desenvolvimento de padrões de ruído eficazes para a proteção da vida
          selvagem? Os gerentes ambientais normalmente preferem um único padrão
          de ruído que abranja todas as situações. Mas como as espécies diferem
          em sua capacidade de tolerar o ruído, um único padrão de ruído é
          conservador para algumas espécies e insuficiente para outras. A
          verdade é que o tema ainda carece de uma série de estudos que busquem
          entender o efeito da poluição nos mais diversos ambientes e grupos de
          animais. Apenas com o estímulo a mais pesquisas conseguiremos chegar a
          melhores encaminhamentos para a proteção da avifauna. No entanto,
          alguns estudos nos apontam alguns direcionamentos para resolução do
          problema:
        </p>

        <Fig section='sonora' number={6}></Fig>

        <ol className='list-decimal'>
          <li className='mb-2'>
            O ruído pode ser operacionalmente reduzido através de limitações no
            tempo e na frequência de atividades ruidosas em horários e períodos
            do ano críticos para algumas atividades da vida das aves, como
            forrageamento e reprodução. Assim, o fechamento ou controle do fluxo
            de tráfego em estradas e em usinas de energia, as mudanças nas rotas
            de tráfego de navios e aviões e outras ações no entorno de Áreas
            Verdes e Unidades de Conservação podem ser boas estratégias para o
            manejo de espécies sensíveis.<sup>1</sup>
          </li>
          <li className='mb-2'>
            O ruído pode ser estruturalmente reduzido usando materiais e
            arquiteturas alternativas. Exemplo: investimento em hélices de
            navios, motores de carros e aviões mais silenciosos; e modificações
            nas configurações desses equipamentos, como velocidades mais lentas.
            <sup>1</sup>
          </li>
          <li className='mb-2'>
            A vegetação pode ajudar no controle do ruído! Os melhores
            amortecedores de som consistem em vegetação nativa densa. A
            combinação de árvores e arbustos ao redor de áreas com alto ruído
            pode fornecer um isolamento acústico poderoso e de baixo custo.
            <sup>1</sup>
          </li>
          <li className='mb-2'>
            Monitoramento acústico em Unidades de Conservação: Em quais horários
            o movimento é maior? Quais sons causam mais impactos em Unidades de
            Conservação? Entender esses padrões pode nos ajudar a planejar
            estratégias para mitigar os problemas, como reduzir ou alterar
            locais de visitação, impor normas para diminuição do ruído por
            visitantes em trilhas, etc.<sup>9</sup>
          </li>
          <li className='mb-2'>
            Festivais e concertos musicais sempre geram bastante ruído e,
            algumas vezes, são conduzidos próximo a áreas arborizadas. Assim,
            maior fiscalização no local de produção desse tipo de evento, bem
            como no controle da altura do som, podem levar a medidas efetivas.
          </li>
          <li className='mb-2'>
            <a
              className='text-yellow-600'
              href='https://conexaoplaneta.com.br/blog/biologos-alertam-sobre-impacto-em-animais-de-mega-festa-de-ano-novo-que-sera-realizada-em-fernando-de-noronha/'
              target='_blank'
            >
              Algumas cidades
            </a>{' '}
            já proíbem a utilização de fogos de artifício sonoros, que podem
            promover sérios distúrbios à vida animal.<sup>10</sup>
          </li>

          <Fig section='sonora' number={7}></Fig>

          <li className='mb-2'>
            Você não precisa soltar fogos para comemorar algum evento, recorra a
            outros meios!
          </li>
          <li className='mb-2'>
            Sempre que possível, use ferramentas mais silenciosas e não
            mecânicas para realizar suas tarefas. Se for necessário usar
            equipamento mecânico, familiarize-se com o comportamento e os ciclos
            de vida da vida selvagem no local, para evitar ruídos durante os
            períodos de pico de forrageamento ou reprodução.{' '}
          </li>
          <li className='mb-2'>
            Ao comprar ferramentas de construção e manutenção, procure modelos
            mais silenciosos – normalmente também são mais eficientes em termos
            energéticos!
          </li>
          <li className='mb-2'>
            Sempre que possível, transite a pé ou de bicicleta. Além de ser mais
            saudável e ecologicamente correto, esses meios de transporte
            produzem muito menos ruídos!{' '}
          </li>
          <li className='mb-2'>
            Está fazendo trilha em uma Unidade de Conservação ou Área Verde?
            Desfrute dos sons da natureza! Além de aproveitar bem mais seu
            passeio, você ajuda a promover o bem-estar animal.
          </li>
          <li className='mb-2'>
            Foi observar aves em algum Parque ou Unidade de Conservação? Pense
            bem antes de utilizar o playback! O uso excessivo de vocalizações
            das aves para atraí-las pode causar estresse e mudanças de
            comportamento.
          </li>
        </ol>

        <p className='mb-4'>
          Deixamos aqui alguns números para contato em caso de perturbação do
          sossego: 153 ou 4543-0354 (Visconde de Mauá, Resende/RJ).
        </p>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          Saiba mais
        </h3>
        <a
          href=' https://www.youtube.com/watch?v=AJ1FYQC6UvA'
          target='_blank'
          className='mb-4 text-yellow-600'
        >
          Simpósio de bioacústica “como medir a influência do ruído antrópico em
          aves?”{' '}
        </a>
        <br />
        <a
          href=' https://www.youtube.com/watch?v=KAnrDf94Lgo'
          target='_blank'
          className='mb-4 text-yellow-600'
        >
          Entenda como a poluição sonora afeta as baleias{' '}
        </a>
        <br />
        <a
          href=' https://www.youtube.com/watch?v=2CqPiGw2f7I'
          target='_blank'
          className='mb-4 text-yellow-600'
        >
          Como a poluição sonora afeta a comunicação dos animais?{' '}
        </a>
        <br />
        <a
          href=' https://www.nps.gov/subjects/sound/index.htm'
          target='_blank'
          className='mb-4 text-yellow-600'
        >
          Como podemos contornar a poluição sonora em Parques Nacionais?{' '}
        </a>
        <br />

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className='mb-4'>
                1 SHANNON, G. et al. A synthesis of two decades of research
                documenting the effects of noise on wildlife.{' '}
                <strong>Biological Reviews</strong>, v. 91, n. 4, p. 982-1005,
                26 jun. 2015. Wiley. Available at:
                http://dx.doi.org/10.1111/brv.12207. Accessed on: 19 jun. 2022.
              </p>
              <p className='mb-4'>
                2 BUXTON, R. T. et al. Noise pollution is pervasive in U.S.
                protected areas. <strong>Science</strong>, American Association
                for the Advancement of Science (AAAS), v. 356, n. 6337, p.
                531-533, 5 May 2017. Available at:
                http://dx.doi.org/10.1126/science.aah4783. Accessed on: 19 jun.
                2022.
              </p>
              <p className='mb-4'>
                3 JEREM, P.; MATHEWS, F. Trends and knowledge gaps in field
                research investigating effects of anthropogenic noise.{' '}
                <strong>Conservation Biology</strong>, v. 35, n. 1, p. 115-129,
                20 Aug. 2020. Wiley. Available at:
                http://dx.doi.org/10.1111/cobi.13510. Accessed on: 19 jun. 2022.
              </p>
              <p className='mb-4'>
                4 WORLD HEALTH ORGANIZATION, et al.{' '}
                <strong>
                  Environmental noise guidelines for the European region
                </strong>
                . 2018.
              </p>
              <p className='mb-4'>
                5 ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).{' '}
                <strong>
                  Acústica: avaliação do ruído em áreas habitadas, visando ao
                  conforto da comunidade: procedimento: NBR 10151
                </strong>
                . ABNT, 2000.
              </p>
              <p className='mb-4'>
                6 ROCA, I. T. et al. Shifting song frequencies in response to
                anthropogenic noise: a meta-analysis on birds and anurans.{' '}
                <strong>Behavioral Ecology</strong>, Oxford University Press
                (OUP), v. 27, n. 5, p. 1269-1274, 2016. Available at:
                http://dx.doi.org/10.1093/beheco/arw060. Accessed on: 19 jun.
                2022.
              </p>
              <p className='mb-4'>
                7 MONTENEGRO, C. et al. The impact of anthropogenic noise on
                individual identification via female song in Black-capped
                chickadees (Poecile atricapillus).{' '}
                <strong>Scientific Reports</strong>, Springer Science and
                Business Media LLC, v. 11, n. 1, 2 Sep. 2021. Available at:
                http://dx.doi.org/10.1038/s41598-021-96504-3. Accessed on: 19
                jun. 2022.
              </p>
              <p className='mb-4'>
                8 INJAIAN, A. S.; TAFF, C. C.; PATRICELLI, G. L. Experimental
                anthropogenic noise impacts avian parental behaviour, nestling
                growth and nestling oxidative stress.{' '}
                <strong>Animal Behaviour</strong>, Elsevier BV, v. 136, p.
                31-39, Feb. 2018. Available at:
                http://dx.doi.org/10.1016/j.anbehav.2017.12.003. Accessed on: 19
                jun. 2022.
              </p>
              <p className='mb-4'>
                9 DUMYAHN, S. L.; PIJANOWSKI, B. C. Beyond noise mitigation:
                managing soundscapes as common-pool resources.{' '}
                <strong>Landscape Ecology</strong>, Springer Science and
                Business Media LLC, v. 26, n. 9, p. 1311-1326, 4 Agu. 2011.
                Available at: http://dx.doi.org/10.1007/s10980-011-9637-8.
                Accessed on: 19 jun. 2022.
              </p>
              <p className='mb-4'>
                10 SHAMOUN-BARANES, J. et al. Birds flee en mass from New Year's
                Eve fireworks. <strong>Behavioral Ecology</strong>, Oxford
                University Press (OUP), v. 22, n. 6, p. 1173-1177, 11 July 2011.
                Available at: http://dx.doi.org/10.1093/beheco/arr102. Accessed
                on: 19 jun. 2022.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
