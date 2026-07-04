import Fig from "../fig";
import Image from "../legacy-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

import { H3, P } from "../components";

import { DialogHeader, DialogContent } from "../ui/dialog";

export default function Pets() {
  return (
    <DialogContent className='z-[999] h-[90vh] max-w-[90vw] overflow-y-scroll'>
      <DialogHeader className=' w-full bg-[#FFAD58]  p-6'>
        <h2 className='text-3xl font-bold text-gray-800 '>
          Predação de aves por animais domésticos
        </h2>
      </DialogHeader>

      <div className='px-6 pt-4 text-gray-600'>
        <Fig
          section='pets'
          number={1}
          legend={
            <p>
              Cão doméstico perseguindo ave costeira na praia. Fonte: Canva.
            </p>
          }
        ></Fig>

        <P>
          Amigos, companheiros, às vezes tratados como filhos. Nossos amados
          pets, cães e gatos, nem sempre foram animais associados aos humanos.
          Originalmente espécies de animais silvestres, os cães e gatos foram
          domesticados, subsidiados e dispersados por quase todo o mundo há
          milhares de anos por nós, humanos. Os cães foram os primeiros animais
          a serem domesticados por humanos. Estima-se que essa relação tenha se
          estabelecido entre 15.000 e 30.000 anos atrás<sup> 1</sup>. Já a
          domesticação de nossos amigos felinos, os gatos, é datada em 9.500
          atrás <sup>2</sup>.
        </P>
        <P>
          Embora a criação de cães e gatos por humanos hoje esteja muito mais
          atrelada a um laço afetivo e sentimental, a domesticação surgiu a
          partir de interesses mútuos mais práticos. A domesticação dos cães
          está fortemente associada ao potencial oferecido por esses animais na
          agricultura, na caça e na proteção contra predadores1. Os gatos eram
          (e são) uma ótima forma de controle de pragas. Assentamentos humanos
          com estocagem de grãos e alimentos, que frequentemente eram infestados
          por ratos, logo passaram a ter a presença marcada dos bichanos como
          agentes de controle de pragas <sup>2</sup>.
        </P>

        <Fig
          section='pets'
          number={2}
          legend={
            <p>
              Ilustrações de cães ao longo da história humana. Canto superior
              esquerdo: Renegade Canyon, Califórnia, cerca de 4000 anos atrás.
              Canto superior direito: Cão de Fo, Estatueta policromada chinesa,
              cerca de 960-1000. Galeria Burchard. Canto inferior esquerdo:
              Deusa Ártemis, oenochoe grego, cerca de 450 aC, Louvre Museu.
              Canto inferior direito: ‘‘Tre`s riches heures du duc de Berry,
              janvier’’, Irmãos Limburgo, 1416. Fonte: Mosaico retirado de
              Galibert et al. (2011)<sup>1</sup>.
            </p>
          }
        ></Fig>

        <H3>Uma relação não tão boa para outros</H3>

        <P>
          O que é muito bom para uns, pode não ser tão bom para outros. Com o
          subsídio e cuidados humanos, as populações de cães e gatos domésticos
          passaram por grandes aumentos populacionais.{' '}
        </P>
        <P>
          Segundo dados de 2018 da Associação Brasileira da Indústria de
          Produtos Para Animais de Estimação, a população de cães domésticos no
          Brasil chega a 54,2 milhões e a de gatos 23,9 milhões.{' '}
        </P>
        <P>
          Mas mesmo após milhares de anos de interação humana, esses animais
          mantêm muito de seu comportamento silvestre e instintivo (muitas vezes
          também estimulados por seus criadores) de caçar. Cães chegam a ser uma
          das espécies mais abundantes ocupando Unidades de Conservação em todo
          o mundo! <sup>3</sup>
        </P>
        <P>
          Mas se são domésticos, não deveriam estar sob os cuidados e limitações
          espaciais da supervisão de seus donos/cuidadores? Pois é, infelizmente
          a história não é bem assim. Os cães domésticos já contribuíram para a
          extinção de 11 espécies de vertebrados, além de representarem uma
          ameaça conhecida ou potencial para pelo menos 188 espécies ameaçadas
          em todo o mundo. No Brasil, 55% das espécies listadas como ameaçadas
          de extinção sofrem influência de cães<sup>13</sup>. As aves são o
          segundo grupo de animais mais afetados 4. O impacto dos cães para a
          vida silvestre vai muito além da predação direta. Esses pets podem
          causar alterações no comportamento de animais através da indução de
          medo <sup>4</sup>, oferecer competição por recursos <sup>5</sup> e
          transmitir doenças <sup>6</sup>.
        </P>

        <Fig
          section='pets'
          number={3}
          objectFit='contain'
          legend={
            <p>
              Dados acerca do número de espécies ameaçadas por cães e os tipos
              de impactos causados por estes animais na vida silvestre. Fonte:
              Gráfico produzido a partir de dados de Doherty et al. (2017){' '}
              <sup>4</sup>.
            </p>
          }
        ></Fig>

        <P>
          Já os gatos domésticos estão listados entre as 100 piores espécies
          invasoras não nativas do mundo<sup>7</sup>. Em ilhas, os gatos de vida
          livre causaram ou contribuíram para a extinção moderna de 33 (14% do
          total de extinções) das espécies de aves e mamíferos registradas pela
          Lista Vermelha da União Internacional para a Conservação da Natureza
          (IUCN) 8. O cenário no continente não é muito diferente!{' '}
          <sup>9, 10</sup>. Estima-se que os gatos domésticos de vida livre
          matam de 1,3 a 4,0 bilhões de aves anualmente nos EUA <sup>10</sup>.
          Na China esse número pode atingir a faixa de 5 bilhões <sup>11</sup>,
          e a maioria dos países permanecem sem a quantificação destes impactos,
          como o Brasil, por exemplo.
        </P>
        <P>
          A introdução de gatos no Havaí por volta de 1700, local que costumava
          ser um paraíso para a biodiversidade de aves, levou à predação
          generalizada de pássaros nativos e endêmicos, e a uma ampla
          contaminação ambiental que afetou pessoas e animais selvagens. O vídeo
          a seguir ilustra a situação:
        </P>

        <div className='flex  items-center justify-center sm:p-12'>
          <iframe
            className='aspect-video w-full max-w-[500px]'
            src='https://www.youtube.com/embed/zfsAyotGnS8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <P>
          Além do impacto pela predação, a presença de gatos em áreas naturais
          também gera mudanças comportamentais das aves locais, levando a uma
          redução na alimentação de ninhegos por seus pais, diminuição do
          cuidado parental pelas aves, e consequente aumento da taxa de predação
          de ovos e filhotes por outros predadores também <sup>12</sup>.{' '}
        </P>

        <Fig
          section='pets'
          number={4}
          objectFit='contain'
          legend={
            <p>
              Esquema ilustrando os efeitos indiretos da presença de um gato em
              um ambiente arborizado. Fonte: Os dados foram obtidos de
              Bonnington, Gaston e Evans (2013)<sup>14</sup>, onde inseriram um
              modelo de predador felino em um ambiente para quantificar a
              resposta da fauna local.
            </p>
          }
        ></Fig>

        <H3>Errar é humano</H3>

        <P>Devemos, no entanto, assumir nossa culpa diante do problema: </P>

        <ul className='list-disc'>
          <li className='mb-4'>
            <strong>75%</strong> dos cães domésticos não possuem donos ou são
            criados em vida livre <sup>3</sup>.{' '}
          </li>
          <li className='mb-4'>
            Dentre os gatos domésticos, os gatos de rua são os responsáveis pela
            maior parte da mortalidade de animais silvestres <sup>10</sup>.
          </li>
        </ul>

        <Fig
          section='pets'
          number={5}
          legend={<p>Gato carregando uma ave morta na boca. Fonte: Canva.</p>}
        ></Fig>

        <P>
          A opção de manejo mais eficaz para mitigar tanto a predação direta
          quanto os efeitos indiretos de pets seria alojá-los permanentemente em
          ambientes fechados. Em ambientes fechados, os animais requerem mais
          cuidado e atenção de seus donos, mas a grande maioria consegue se
          adaptar e levar uma boa vida. Enquanto tutores, devemos arcar com as
          responsabilidades que vêm com a tutela de nossos bichos.{' '}
        </P>

        <H3>Consertar nossos erros também é humano!</H3>

        <Fig
          section='pets'
          number={6}
          legend={
            <p>
              Cão doméstico sendo levado para passear de coleira em ambiente
              arborizado, ilustrando a maneira correta de levar pets ao ar
              livre. Fonte: Canva.
            </p>
          }
        ></Fig>

        <P>
          A problemática da predação por animais domésticos é complexa.. Um bom
          exemplo de referência é o Plano de Ação para o Controle de Gatos em
          Fernando de Noronha do ICMBio<sup>14</sup>. É necessário lembrar que
          não é fofo quando nosso pet traz um animal morto para casa. É
          importante informar as pessoas (seja com folders, posts virtuais,
          palestras, conversas) sobre a problemática e incluir essa questão de
          educação ambiental desde a escola <sup>15</sup>. Os amantes de animais
          domésticos devem ter consciência de que lugar de pet é dentro de casa,
          até pela segurança dos próprios bichos. Medidas como a castração
          auxiliam a evitar muitos problemas, levar o seu pet ao veterinário com
          frequência é essencial e o próprio profissional pode dar dicas de como
          enriquecer o ambiente para o seu animal. Alguns países do mundo já
          proíbem que gatos saiam sozinhos sem estarem acompanhados pelos donos
          e de coleira <sup>16</sup>.{' '}
        </P>

        <Fig
          section='pets'
          number={7}
          legend={
            <p>
              Gato doméstico sendo consultado em médico veterinário. É papel do
              tutor cuidar e ter responsabilidade com seus pets. Fonte: Canva.
            </p>
          }
        ></Fig>

        <P>
          Entretanto, muitos animais domésticos não possuem tutor e vivem nas
          ruas, parques e até mesmo em unidades de conservação <sup>17</sup>. É
          importante manejar essas populações com atividades regulares para
          capturar, castrar e redirecionar esses animais. Um destino possível é
          a construção de abrigos como canis e gatis para receber esses animais
          de rua e, o mais ideal, é intensificar a adoção responsável de cães e
          gatos por tutores comprometidos com o bem estar dos animais, mas
          também com o bem estar do meio ambiente <sup>15</sup>. Os gatos e os
          cães não predam espécimes nativos por maldade, essa é a natureza
          deles, mas isso não anula os impactos da presença desses animais em
          locais onde eles não ocorrem naturalmente. É nosso dever resolver essa
          problemática com o mesmo amor e responsabilidade que devemos ter ao
          cuidar dos nossos pets!
        </P>

        <Accordion collapsible>
          <AccordionItem value='item1'>
            <AccordionTrigger className='mb-4 mt-12'>
              <h3 className=' text-xl font-bold text-gray-700'>Referências</h3>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                1 Galibert, F., Quignon, P., Hitte, C., & André, C. (2011).
                Toward understanding dog evolutionary and domestication history.{' '}
                <strong>Comptes Rendus Biologies</strong>, 334(3), 190–196.
                doi:10.1016/j.crvi.2010.12.011
              </P>
              <P>
                2 Hu, Y., Hu, S., Wang, W., Wu, X., Marshall, F. B., Chen, X., …
                Wang, C. (2013). Earliest evidence for commensal processes of
                cat domestication.{' '}
                <strong>Proceedings of the National Academy of Sciences</strong>
                , 111(1), 116–120. doi:10.1073/pnas.1311439110
              </P>
              <P>
                3 Hughes, J., & Macdonald, D. W. (2013). A review of the
                interactions between free-roaming domestic dogs and wildlife.{' '}
                <strong>Biological Conservation</strong>, 157, 341–351.
                doi:10.1016/j.biocon.2012.07.005
              </P>
              <P>
                4 Doherty, T. S., Dickman, C. R., Glen, A. S., Newsome, T. M.,
                Nimmo, D. G., Ritchie, E. G., … Wirsing, A. J. (2017). The
                global impacts of domestic dogs on threatened vertebrates.{' '}
                <strong>Biological Conservation</strong>, 210, 56–59.
                doi:10.1016/j.biocon.2017.04.007
              </P>
              <P>
                5 Vanak, A. T., & Gompper, M. E. (2010). Interference
                competition at the landscape level: the effect of free-ranging
                dogs on a native mesocarnivore.{' '}
                <strong>Journal of Applied Ecology</strong>, 47(6), 1225–1232.
                doi:10.1111/j.1365-2664.2010.01870.x
              </P>
              <P>
                6 Furtado, M. M., Hayashi, E. M. K., Allendorf, S. D., Coelho,
                C. J., de Almeida Jácomo, A. T., Megid, J., … Ferreira Neto, J.
                S. (2016). Exposure of Free-Ranging Wild Carnivores and Domestic
                Dogs to Canine Distemper Virus and Parvovirus in the Cerrado of
                Central Brazil. <strong>EcoHealth</strong>, 13(3), 549–557.
                doi:10.1007/s10393-016-1146-4
              </P>
              <P>
                7 LOWE, Sarah et al. 100 of the world's worst invasive alien
                species: a selection from the global invasive species database.
                Auckland: Invasive Species Specialist Group, 2000.
              </P>
              <P>
                8 Medina, F. M., Bonnaud, E., Vidal, E., Tershy, B. R.,
                Zavaleta, E. S., Josh Donlan, C., … Nogales, M. (2011). A global
                review of the impacts of invasive cats on island endangered
                vertebrates. <strong>Global Change Biology</strong>, 17(11),
                3503–3510. doi:10.1111/j.1365-2486.2011.02464.x
              </P>
              <P>
                9 Van Heezik, Y., Smyth, A., Adams, A., & Gordon, J. (2010). Do
                domestic cats impose an unsustainable harvest on urban bird
                populations? <strong>Biological Conservation</strong>, 143(1),
                121–130. doi:10.1016/j.biocon.2009.09.013
              </P>
              <P>
                10 BAKER, P. J., MOLONY, S. E., STONE, E., CUTHILL, I. C., &
                HARRIS, S. (2008). Cats about town: is predation by free-ranging
                pet cats Felis catus likely to affect urban bird populations?{' '}
                <strong>Ibis</strong>, 150, 86–99.
                doi:10.1111/j.1474-919x.2008.00836.x
              </P>
              <P>
                11 Li, Y., Wan, Y., Shen, H., Loss, S. R., Marra, P. P., & Li,
                Z. (2021). Estimates of wildlife killed by free-ranging cats in
                China. <strong>Biological Conservation</strong>, 253, 108929.
                doi:10.1016/j.biocon.2020.108929
              </P>
              <P>
                12 Bonnington, C., Gaston, K. J., & Evans, K. L. (2013). Fearing
                the feline: domestic cats reduce avian fecundity through
                trait-mediated indirect effects that increase nest predation by
                other species. <strong>Journal of Applied Ecology</strong>,
                50(1), 15–24. doi:10.1111/1365-2664.12025
              </P>
              <P>
                13 Lessa, I., Corrêa Seabra Guimarães, T., de Godoy Bergallo,
                H., Cunha, A., & M. Vieira, E. (2016). Domestic dogs in
                protected areas: a threat to Brazilian mammals?{' '}
                <strong>Natureza & Conservação</strong>, 14(2), 46–56.
                doi:10.1016/j.ncon.2016.05.001
              </P>
              <P>
                14 Silveira, E. Gatos voltam à vida selvagem e ameaçam espécies
                nativas de Fernando de Noronha. <strong>BBC News Brasil</strong>
                , 2019. Disponível em:
                https://www.bbc.com/portuguese/brasil-47343878 Acesso em: 18 de
                Junho de 2022
              </P>
              <P>
                15 Mello, T. J., et al. Plano de Ação para o Controle de Gatos
                em Fernando de Noronha, ICMBio. 2018
              </P>
              <P>
                16 Meneguelli, L. Austrália impõe coleira e toque de recolher
                para gatos: eles matam bilhões de animais.{' '}
                <strong>GreenMe</strong>, 2022. Disponível em:
                https://www.greenme.com.br/morar/gato-e-cachorro/90863-australia-coleira-toque-recolher-gatos/
                Acesso em: 18 de Junho de 2022
              </P>
              <P>
                17 Smirne, D. C. Avanço de cães e gatos em área de conservação
                preocupa cientistas. <strong>Jornal da USP</strong>, 2016.
                Disponível em:
                https://jornal.usp.br/universidade/avanco-de-caes-e-gatos-em-area-de-conservacao-preocupa-cientistas/
                Acesso em: 18 de Junho de 2022
              </P>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </DialogContent>
  );
}
