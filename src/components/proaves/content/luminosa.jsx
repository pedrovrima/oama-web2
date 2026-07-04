import Fig from "../fig";
import Image from "../legacy-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { DialogContent, DialogHeader } from "../ui/dialog";

export default function Luminosa() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#C9ACF5]  p-6'>
        <h2 className='text-3xl font-bold text-gray-800 '>
          Poluição luminosa{' '}
        </h2>
      </DialogHeader>

      <div className='px-6 pt-4 text-gray-600'>
        <Fig
          section='luminosa'
          number={1}
          legend={
            <p>
              Coruja-listrada <i>(Strix hylophila)</i>, predador noturno de
              grande distribuição na região sudeste do Brasil e nordeste da
              Argentina. Autoria: Birds Atlantic.
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Quando é chegada a hora de dormir, buscamos evitar fontes luminosas,
          sejam elas lâmpadas, telas de celulares ou computadores, tablets,
          dentre tantas outras. Essas luzes artificiais afetam nosso ciclo
          natural do sono, o que para nós seres humanos pode ser simples de
          resolver, já que basta desligar a luz do ambiente. Porém, na natureza,
          as aves não sabem onde está “o interruptor da lâmpada” que fica em
          nossa varanda, em um poste de luz ou qualquer outra fonte luminosa que
          criamos.
        </p>
        <p className='mb-4'>
          Poluição luminosa, o uso excessivo ou inapropriado de iluminação
          artificial externa, é um dos “novos” impactos ambientais decorrente do
          desenvolvimento tecnológico humano. Ela é resultado de toda e qualquer
          alteração feita no padrão claro-escuro ambiental, ou seja, toda
          iluminação artificial que altera os ciclos dia/noite <sup>1</sup>. Em
          um primeiro momento, utilizou-se o termo “fotopoluição”, criado por
          Verheijen (1985), para referir-se a efeitos negativos causados na vida
          selvagem por luzes artificiais. Há, ainda, a proposta de um novo
          termo: poluição luminosa ecológica, que define os efeitos sofridos por
          iluminação artificial tanto em escalas espaciais quanto temporais, ou
          seja, torna-se um termo ainda mais específico<sup>2</sup>.
        </p>

        <Fig
          section='luminosa'
          number={2}
          legend={
            <p>
              Fotografia da cidade de Pirapetinga - MG vista de cima, ilustrando
              a iluminação artificial artificial urbana.Autoria: Valmy
              Gomes(Creative Commons 1.0).
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          A preocupação com a iluminação artificial no planeta aumentou com o
          desenvolvimento de tecnologias e diferentes fontes de luz que impactam
          no meio ambiente e até em nossas vidas. Tal preocupação chegou ao
          âmbito da vida silvestre, especificamente a fauna, o que levou
          cientistas a desenvolverem pesquisas acerca dos impactos sofridos por
          diferentes grupos animais.
        </p>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          Tipos de poluição luminosa
        </h3>

        <p className='mb-4'>
          Existem 4 tipos de poluição luminosa <sup>7</sup>:
        </p>

        <ul>
          <li className='mb-4'>
            {' '}
            “Sky Glow” ou Brilho no Céu: é um brilho de cor alaranjada que pode
            ser visto no céu a vários quilômetros de distância de suas fontes de
            luz.Esse brilho ofusca a luz das estrelas, deixando - as invisíveis
            a olho nu e dificulta sua visualização por aparelhos, como o
            telescópio.As luzes produzidas por fontes artificiais podem ser
            refratadas e dispersas contra partículas presentes na atmosfera, o
            que agrava o problema causado por esse brilho.
          </li>
        </ul>

        <Fig
          section='luminosa'
          number={3}
          legend={
            <p>
              Comparação do céu visto de uma área remota(Parque Nacional
              Glacier, em Montana, nos Estados Unidos), onde é possível avistar
              uma grande quantidade de estrelas, com o céu visto de uma área
              urbana em Berlim, onde não é possível observar estrelas pelo
              excesso de luz alaranjada advinda da cidade.Autorias: foto da
              esquerda tirada por Ray Stinson e foto da direita tirada por
              Christopher Kyba(Creative Commons 3.0).
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

        <ul>
          <li className='mb-4'>
            “Glare” ou Ofuscamento: é um tipo de luminosidade que pode cegar
            momentaneamente quando se olha em sua direção.É responsável pela
            desorientação, como por exemplo ocorre ao cruzar com um veículo que
            está com farol alto.
          </li>

          <Fig
            section='luminosa'
            number={4}
            legend={
              <p>
                Fotografia de uma rodovia durante a noite na cidade de Cowes,
                Ilha de Wight(Inglaterra), ilustrando os efeitos causados pelo
                glare ou ofuscamento de luzes artificiais.Autoria:
                Arriva436(Creative Commons 3.0).
              </p>
            }
          ></Fig>

          <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
            Tipos de poluição luminosa
          </h3>

          <li className='mb-4'>
            “Light trespass” ou Transgressão de luz: ocorre quando uma luz é tão
            forte que passa a iluminar um lugar que não deveria ser iluminado.Um
            exemplo é quando a iluminação externa do seu vizinho ou de um poste
            da rua, próximo a sua casa, atravessa a janela e clareia seu quarto
            à noite.
          </li>

          <Fig
            section='luminosa'
            number={5}
            legend={
              <p>
                Imagem ilustrando a transgressão de luz projetada da rua em um
                prédio residencial durante a noite em Iaşi, na Romênia.Autoria:
                Catalin - Daniel Galatanu(Creative Commons 4.0).
              </p>
            }
          ></Fig>

          <li className='mb-4'>
            “Clutter”: agrupamento de luzes excessivas, confusas e brilhantes
            que podem gerar desorientação e desconforto.É comum em centros
            urbanos, onde existem muitas informações luminosas(letreiros
            iluminados, faróis de trânsito, placas refletivas, postes de luz,
            etc).
          </li>

          <Fig
            section='luminosa'
            number={6}
            legend={
              <p>
                Cidade de Las Vegas(Nevada, Estados Unidos) vista de cima,
                ilustrando uma grande quantidade de luzes e cores
                agrupadas.Autoria: Brendel Signature(Creative Commons 3.0).
              </p>
            }
          ></Fig>
        </ul>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          A dimensão do problema
        </h3>
        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Como a luz pode afetar uma ave
        </h4>
        <p className='mb-4'>
          As aves estão entre os animais cujo os efeitos da poluição luminosa
          são mais evidentes.Com receptores fotossensíveis presentes em três
          regiões do crânio (retina, hipotálamo e glândula pineal), para as aves
          a luz influencia a visão, o metabolismo e a atividade reprodutiva.{' '}
        </p>
        <p className='mb-4'>
          Expostas a um ambiente artificialmente iluminado durante a noite, as
          aves podem apresentar alterações no ritmo circadiano, sofrer
          desorientações em voos noturnos e se mostrarem menos saudáveis e
          resistentes a eventuais doenças.Organizamos abaixo, alguns exemplos
          conhecidos de impactos da iluminação artificial noturna sobre as aves.
        </p>

        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Disrupção do ciclo circadiano
        </h4>
        <p className='mb-4'>
          Existem aves noturnas como as corujas e bacuraus, e algumas espécies
          crepusculares que são mais ativas um pouco antes do amanhecer ou do
          anoitecer, como é o caso das juruvas. Porém, a maioria das aves
          realiza comportamentos de sobrevivência como busca por alimento,
          reprodução, cuidados com a prole e fuga de predadores de dia. A
          atividade diária de todos os organismos é baseada em ritmos
          circadianos, que são ciclos fisiológicos, metabólicos e
          comportamentais que se repetem em um período de, aproximadamente, 24
          horas<sup>8</sup>. Esses ciclos estão sujeitos a influências externas,
          e a principal delas é a luz solar. O ritmo circadiano também é
          responsável pelo equilíbrio da produção e secreção de hormônios, como
          os glicocorticoides<sup>9</sup>, que nas aves estão presentes na forma
          de corticosterona<sup>10</sup>. Em aves diurnas, por exemplo, as
          concentrações de corticosterona são altas durante o dia, e baixas
          durante a noite<sup>11</sup>. Porém, com luzes artificiais impactando
          o ambiente em que elas vivem, esses hormônios ficam desregulados,
          fazendo com que a ave não entenda que aquele momento seja o ideal para
          dormir, gerando estresse e um gasto de energia maior para se manter
          ativa.{' '}
        </p>

        <Fig
          section='luminosa'
          number={7}
          legend={
            <p>
              Tordo-americano <i>(Turdus migratorius)</i>, ave canora migratória
              com ampla distribuição na América do Norte, invernando no Canadá,
              centro do México e ao longo da costa do Pacífico. Autoria: Dane
              Vandeputte (Creative Commons 2.0).
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Um exemplo disso é o caso do tordo-americano{' '}
          <i>(Turdus migratorius)</i>, que foi objeto de um estudo na
          Pensilvânia<sup>25</sup> que identificou alterações no comportamento
          de vocalização da espécie. Os indivíduos de populações que vivem em
          áreas com grande índice de iluminação artificial começaram seu canto
          matinal ainda durante a noite, em comparação com outras populações
          mais distantes de luzes artificiais, que nunca iniciaram seu canto
          durante a noite.
        </p>
        <Fig
          section='luminosa'
          number={8}
          legend={
            <p>
              Chapim-azul <i>(Cyanistes caeruleus)</i>, ave com ampla
              distribuição, desde áreas temperadas a subárticas da Europa e Ásia
              ocidental. Autoria: Francis C. Franklin (Creative Commons 3.0).
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          A cor da luz pode influenciar nos efeitos da poluição luminosa sobre
          os animais. Cores mais quentes, como vermelho e amarelo, parecem ter
          maior influência sobre o comportamento matutino de algumas aves, como
          é o caso do chapim-azul (Cyanistes caeruleus). Um estudo mostra que os
          indivíduos da espécie iniciaram suas atividades matinais mais cedo sob
          o efeito de todas as luzes claras. Porém, os efeitos foram mais
          acentuados sob luzes vermelha e branca do que sob a luz verde leve 26.
          Os resultados dessa pesquisa demonstram que adaptações no controle do
          espectro de luz, especialmente na coloração, podem reduzir os impactos
          da iluminação artificial sobre as aves.
        </p>

        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Desorientação luminosa
        </h4>
        <p className='mb-4'>
          Outro efeito negativo gerado pela poluição luminosa em aves é a
          desorientação. Isso ocorre devido a um fenômeno chamado de fototaxia
          (atração por luzes), conhecidamente presente nas aves há um tempo.
          Essa atração por fontes luminosas é uma das principais causas de
          colisão de aves com estruturas urbanas iluminadas<sup>12,13</sup>,
          além do encalhe de aves marinhas na costa<sup>14</sup>.
        </p>
        <p className='mb-4'>
          Não somente as aves diurnas são afetadas, migrantes noturnos sofrem
          com o excesso de áreas iluminadas durante a noite, uma vez que sua
          visão é afetada (causando desorientação)<sup>15</sup>. Seu sentido
          geomagnético, que funciona como uma bússola para as aves ao migrar, é
          também afetado<sup>16</sup>, pois seu funcionamento depende de
          frequências específicas de luz<sup>17</sup>.
        </p>

        <div className='flex items-center justify-center px-6'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/8pvuZmRUin8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <p className='mt-4 text-sm text-gray-500'>
          Vídeo gravado no memorial “Tribute in Lights”, realizado em memória às
          vítimas dos atentados terroristas de 11 de setembro, em Nova Iorque. A
          homenagem é realizada no World Trade Center, e é possível observar a
          concentração de aves voando próximas aos feixes de luz projetados
          durante o espetáculo. Autoria: Benjamin M. Van Doren.
        </p>

        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Saúde
        </h4>
        <p className='mb-4'>
          A exposição à luz artificial noturna também pode afetar a saúde e
          condições reprodutivas das aves<sup>18</sup>. Um experimento realizado
          com ninhegos de 7 a 13 dias identificou que a exposição à luz
          artificial noturna pode comprometer a habilidade de montar uma
          resposta imune a infecções bacterianas, quando comparados aos ninhegos
          que crescem em noites escuras. Outro estudo realizado com indivíduos
          de melro-preto (Turdus merula)<sup>19</sup> indicou diferenças na
          fisiologia reprodutiva desses animais, causadas por alta exposição a
          luzes artificiais durante a noite. Os resultados mostram que, no
          segundo ano de exposição constante à luz durante a noite, o sistema
          reprodutivo dos indivíduos não se desenvolveu, ou seja, o tamanho do
          testículo e a concentração de testosterona estavam em níveis mínimos.
          Além disso, foi observada uma progressão irregular na muda (a troca de
          penas das aves) realizada antes do período reprodutivo.
        </p>

        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Há exceções
        </h4>
        <p className='mb-4'>
          Algumas espécies de aves, no entanto, encontram vantagens com a
          poluição artificial noturna. Aproveitando-se da atração natural que os
          insetos têm por fontes luminosas, algumas aves insetívoras aprendem a
          identificar locais iluminados como boas áreas de caça. Aves diurnas
          das famílias Parulidae, Tyrannidae e Mimidae foram observadas
          forrageando à noite em áreas iluminadas por fontes artificiais de alta
          intensidade na cidade de Ithaca, em Nova York<sup>20</sup>. Outro
          exemplo é o do sabiá norte americano <i>(Mimus polyglottos)</i>, que
          estende a alimentação de seus filhotes após o anoitecer mediante a
          disponibilidade de luz artificial nos arredores de seus ninhos
          <sup>21</sup>.
        </p>

        <h3 className='mb-4 mt-12 text-xl font-bold text-gray-800'>
          A solução no fim do túnel
        </h3>

        <p className='mb-4'>
          Prevenir para preservar: conhecer profundamente os elementos que
          provocam esse tipo de impacto (intensidade luminosa, comprimento de
          onda, direção do feixe luminoso etc) é um primeiro caminho para pensar
          em práticas que reduzam esses impactos.
        </p>

        <Fig
          section='luminosa'
          number={10}
          legend={
            <p>
              Vista do céu em um ambiente rural, onde a poluição luminosa é
              muito baixa, tornando possível a observação das estrelas. Autoria:
              Michael Heiland (Creative Commons 2.0).
            </p>
          }
        ></Fig>

        <p className='mb-4'>
          Pode parecer simples, mas pequenos passos podem fazer uma grande
          diferença:
        </p>

        <ul>
          <li className='mb-4'>
            <strong>Apague as luzes:</strong> o uso de luzes artificiais deve
            ser feito somente onde e quando for necessário.
          </li>
          <li className='mb-4'>
            <strong>Ilumine apenas uma área ou objeto específico:</strong>{' '}
            direcione as luzes preferencialmente para o chão e utilize cúpulas
            para evitar o espalhamento de luz para o céu e para áreas laterais
            vizinhas.
          </li>
          <li className='mb-4'>
            <strong>Troque as lâmpadas:</strong> lâmpadas convencionais podem
            ser substituídas por lâmpadas de LED, que são energeticamente mais
            eficientes e menos brilhantes. Mas atenção! Uma lâmpada de LED de
            20W ilumina na mesma intensidade que uma lâmpada incandescente de
            100W de potência.
          </li>
          <li className='mb-4'>
            Além disso, é possível substituir lâmpadas brancas por lâmpadas com
            cores quentes, como amarelo e vermelho, de preferência
            monocromáticas.
          </li>
          <li className='mb-4'>
            <strong>
              Use <i>timers</i> e sensores:
            </strong>{' '}
            existem, no mercado, luminárias com funcionamento por timer e/ou
            sensores, ou seja, ficam acesas somente durante determinado período
            de tempo ou a partir de algum movimento detectado. Isso reduz o
            tempo em que as luzes artificiais ficam acesas, diminuindo,
            consequentemente, alguns efeitos causados por esse tipo de
            iluminação.
          </li>
        </ul>

        <Fig
          section='luminosa'
          objectFit='contain'
          number={11}
          legend={
            <p>
              Exemplos de produtos a serem usados para diminuir os efeitos
              causados pela poluição luminosa.
            </p>
          }
        ></Fig>

        <h4 className='mb-4 mt-8 text-lg font-bold italic text-gray-600'>
          Medidas maiores também podem - e devem - ser tomadas:
        </h4>
        <ul>
          <li className='mb-4'>
            {' '}
            <strong>Controle do fluxo luminoso</strong>: uso de luminárias
            urbanas com fluxo luminoso controlado, ou seja, que não dispersam a
            luz para locais onde ela não é necessária. Já existem no mercado as
            luminárias full cutoff, que não dispersam o fluxo luminoso 90º acima
            do nadir (projeção vertical localizada sob os pés do observador). No
            Brasil, a obrigatoriedade do uso desse tipo de luminária ainda está
            em processo de implementação. Outros modelos de luminárias com um
            maior controle do fluxo luminoso estão sendo desenvolvidos em outros
            países, como é o caso da orla marítima da Flórida com projetos
            voltados para a conservação de tartarugas marinhas 22.
          </li>

          <Fig
            section='luminosa'
            objectFit='contain'
            number={12}
            legend={
              <p>
                Tipos de luminárias e suas distribuições de luz, ilustrando a
                quantidade de luz distribuída e seu papel na poluição luminosa.
              </p>
            }
          ></Fig>

          <li className='mb-4'>
            {' '}
            <strong>Iluminação artificial por zoneamento</strong>: A Comissão
            Internacional de Iluminação (CIE) publicou um guia em 2003 23 que
            define quatro zonas de iluminação. O zoneamento permite uma melhor
            dimensão da problemática da poluição luminosa, e pode contribuir
            para um menor desperdício de iluminação artificial no planeta. Além
            disso, essa divisão atua como uma indicação objetiva sobre os fluxos
            luminosos a serem adotados em cada local. Em países como Austrália e
            Nova Zelândia esse zoneamento já foi implementado, onde foram também
            elaborados regulamentos de iluminação externa que levam em conta
            aspectos de poluição luminosa astronômica e ecológica. Na Califórnia
            também existe um zoneamento que regula a iluminação externa nas
            cidades 24, e apesar de ser voltado à redução do consumo energético,
            acaba contribuindo com um uso mais apropriado da iluminação externa
            de um ponto de vista ambiental.
          </li>
        </ul>

        <Fig
          section='luminosa'
          objectFit='contain'
          number={13}
          legend={
            <p>
              Direcionamento para a iluminação por zoneamento realizado na
              Califórnia.
            </p>
          }
        ></Fig>

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className='mb-4'>
                1.FERNANDES, G. Wilson; COELHO, Marcel Serra; CAIRES, Tarcísio.
                impacto ambiental da poluição luminosa. Terra 3.0-Especial{' '}
                <strong>Scientific American</strong>, v. 2, p. 40-47, 2001.
              </p>
              <p className='mb-4'>
                2.LONGCORE, Travis; RICH, Catherine. Ecological light pollution.{' '}
                <strong>Frontiers in Ecology and the Environment</strong>, v. 2,
                n. 4, p. 191-198, 2004.
              </p>
              <p className='mb-4'>
                3.Frank KD. 1988. Impact of outdoor lighting on moths: an
                assessment. <strong>J Lepidop Soc</strong> 42: 63–93.
              </p>
              <p className='mb-4'>
                4.Hill D. 1990. The impact of noise and artificial light on
                waterfowl behaviour: a review and synthesis of the available
                literature. Norfolk, United Kingdom:{' '}
                <strong>British Trust for Ornithology Report No. 61</strong>.
              </p>
              <p className='mb-4'>
                5.Outen AR. 2002. The ecological effects of road lighting.
                In:Sherwood B, Culter D, and Burton JA (Eds).{' '}
                <strong>Wildlife and roads: the ecological impact</strong>.
                London, UK: Imperial College Press
              </p>
              <p className='mb-4'>
                6.Salmon M. 2003. Artificial night lighting and sea turtles.{' '}
                <strong>Biologist</strong> 50: 163–68.
              </p>
              <p className='mb-4'>
                7. FERNANDES, G. Wilson; COELHO, Marcel Serra; CAIRES, Tarcísio.
                impacto ambiental da poluição luminosa. Terra 3.0-Especial{' '}
                <strong>Scientific American</strong>, v. 2, p. 40-47, 2001.
              </p>
              <p className='mb-4'>
                8.Hastings MH, Herzog ED. Clock genes, oscillators, and cellular
                networks in the suprachiasmatic nuclei.{' '}
                <strong>J Biol Rhythm.</strong> 2004; 19(5):400-13
              </p>
              <p className='mb-4'>
                9.Ota T, Fustin JM, Yamada H, Doi M, Okamura H. Circadian clock
                signals in the adrenal cortex.{' '}
                <strong>Mol Cell Endocrinol.</strong> 2012; 349:30–37.
              </p>
              <p className='mb-4'>
                10. Carsia RV, Harvey S. Adrenals. In: Whittow GC. (ed):{' '}
                <strong>Sturkie's Avian Physiology,</strong> (ed. 5). San Diego,
                CA, Academic Press; 2000. p.489-537.
              </p>
              <p className='mb-4'>
                11.Romero LM. Seasonal changes in plasma glucocorticoid
                concentrations in free-living vertebrates.{' '}
                <strong>Gen Comp Endocr</strong>. 2002; 128:1–24.
              </p>
              <p className='mb-4'>
                12.Evans-Ogden, L. J. Summary report on the bird friendly
                building program: efect of light reduction on collision of
                migratory birds. A special report for the Fatal Light Awareness
                Program (FLAP). Available at
                http://digitalcommons.unl.edu/fap/5/ (2002).
              </p>
              <p className='mb-4'>
                13.Parkins, K. L., Elbin, S. B. & Barnes, E. Light, glass, and
                bird-building collisions in an urban park.{' '}
                <strong>Northeast. Nat.</strong> 22, 84–94 (2015).
              </p>
              <p className='mb-4'>
                14.Rodríguez, A. et al. Seabird mortality induced by land-based
                artifcial lights. <strong>Conserv. Biol.</strong> 31, 986–1001
                (2017).
              </p>
              <p className='mb-4'>
                15.Vincze O, Vágási CI, Pap PL, Osváth G, Møller AP (2015) Brain
                regions associated withvisual cues are important for bird
                migration.<strong>Biol Lett</strong>11:20150678.
              </p>
              <p className='mb-4'>
                16.Mouritsen H, Heyers D, Güntürkün O (2016) The neural basis of
                long-distance navi-gation in birds.
                <strong>Annu Rev Physiol</strong>78:133–154
              </p>
              <p className='mb-4'>
                17.Wiltschko R, Stapput K, Thalau P, Wiltschko W (2010)
                Directional orientation of birdsby the magnetic field under
                different light conditions.<strong>J R Soc Interface</strong>
                7(Suppl 2):S163–S177.
              </p>
              <p className='mb-4'>
                18.ZIEGLER, Ann-Kathrin et al. Exposure to artificial light at
                night alters innate immune response in wild great tit nestlings.{' '}
                <strong>Journal of Experimental Biology</strong>, v. 224, n. 10,
                2021.
              </p>
              <p className='mb-4'>
                19.DOMINONI, Davide M.; QUETTING, Michael; PARTECKE, Jesko.
                Long-term effects of chronic light pollution on seasonal
                functions of European blackbirds (Turdus merula).{' '}
                <strong>PLoS One</strong>, v. 8, n. 12, p. e85069, 2013.
              </p>
              <p className='mb-4'>
                20.LEBBIN, Daniel J. et al. Nocturnal migrants foraging at night
                by artificial light.{' '}
                <strong>The Wilson Journal of Ornithology</strong>, v. 119, n.
                3, p. 506-508, 2007.
              </p>
              <p className='mb-4'>
                21.Christine M. Stracey; Brady Wynn and Scott K. Robinson. 2014.
                Light Pollution Allows the Northern Mockingbird (Mimus
                polyglottos) to Feed Nestlings After Dark
              </p>
              <p className='mb-4'>
                22.WITHERINGTON, B. E.; MARTIN, R. E. Understanding, assessing
                and resolving lightpollution problems on sea turtle nesting
                beaches. beaches Miami: Florida Department of Environmental
                Protection / <strong>FMRI Technical Report TR-2</strong>, 1996.
              </p>
              <p className='mb-4'>
                23.CIE TECHNICAL REPORT 150:2003; Guide on the limitation of the
                effects of obtrusive light from outdoor lighting installations,
                light from outdoor lighting installations Vienna 2003
              </p>
              <p className='mb-4'>
                24.CALIFORNIA ENERGY COMMISSION, 2004, Section 147, Tables
                147-A-B-C, p. 112-117
              </p>
              <p className='mb-4'>
                25.MILLER, Mark W. Apparent effects of light pollution on
                singing behavior of American robins. <strong>The Condor</strong>
                , v. 108, n. 1, p. 130-139, 2006.
              </p>
              <p className='mb-4'>
                26.DE JONG, Maaike et al. Early birds by light at night: effects
                of light color and intensity on daily activity patterns in blue
                tits. <strong>Journal of Biological Rhythms</strong>, v. 32, n.
                4, p. 323-333, 2017.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
