// Porte de pages/proaves/index.jsx do site antigo (Next.js).
// Diferenças em relação ao legado (ver docs/implementation/pages/proaves.md):
// - Nav/Footer/Head ficam no BaseLayout do site novo;
// - next/legacy/image -> shim local; next/dynamic e useRouter removidos;
// - código morto do legado omitido (calendários comentados, RenderOnClient,
//   imports não usados: AutoScroll, IoArrowUpCircle, AnimatePresence).
import { useState } from "react";
import Image from "./legacy-image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/acarousel";
import { Dialog, DialogContent } from "./ui/dialog";

import IncreasingNumber from "./increasing-number";

import Comedouro from "./content/comedouro";
import Colisao from "./content/colisao";
import Intro from "./content/intro";
import Luminosa from "./content/luminosa";
import Pets from "./content/pets";
import Sonora from "./content/sonora";
import Trafico from "./content/trafico";

const DialogContaent = ({ visible }) => {
  if (visible === "comedouro") {
    return <Comedouro />;
  }
  if (visible === "colisao") {
    return <Colisao />;
  }
  if (visible === "intro") {
    return <Intro />;
  }
  if (visible === "luminosa") {
    return <Luminosa />;
  }
  if (visible === "pets") {
    return <Pets />;
  }
  if (visible === "sonora") {
    return <Sonora />;
  }
  if (visible === "trafico") {
    return <Trafico />;
  }

  return <DialogContent> </DialogContent>;
};

export default function ProAvesApp() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Dialog open={visible} onOpenChange={setVisible}>
        <DialogContaent visible={visible} />
      </Dialog>
      <div className='relative h-[99vh] overflow-hidden'>
        <div className=' absolute left-[10px] top-[100px] z-50 md:left-[120px]'>
          <Image
            priority
            height={450}
            width={450}
            src={'/proaves2/logo-pro-aves-texto.webp'}
            alt='Pró-Aves'
          />
        </div>
        <div className='fixed h-full w-full'>
          <div className='relative h-full w-full'>
            <Image
              priority
              quality={50}
              layout='fill'
              objectFit='cover'
              className='sm:scale-x-[-1]'
              src={'/proaves2/cover_pro_aves.webp'}
              alt=''
            />
          </div>
        </div>
        <div className=' absolute -bottom-[100px] -left-[160px] opacity-40'>
          <Image height={500} width={500} src={'/proaves2/blob.webp'} alt='' />
        </div>
      </div>
      <div className='relative'>
        <div className=' relative overflow-x-clip'>
          <div className='relative mx-auto max-w-[1024px] overflow-x-clip lg:h-[900px] '>
            <div
              className="
              relative -top-[105px]
        z-[20] mx-[20px] rounded-[50px]
        bg-[url('/proaves2/pattern3.webp')] bg-[length:97px] px-[59px] pb-[30px] pt-[35px] drop-shadow-[10px_10px_rgba(148,114,35,0.5)]  lg:absolute lg:left-[90px] lg:mx-auto lg:h-[1100px] lg:w-[500px] lg:pb-0"
            >
              <h1 className='mb-[56px] text-center font-oswald text-[30px] font-[300] text-white'>
                TORNE SUA VIDA PRÓ-AVES
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'
              >
                Ano após ano, populações de aves sofrem impactos diretos e
                indiretos de ações humanas. Esse efeito negativo de nossas ações
                sobre a biodiversidade pode ser associado ao crescimento
                populacional humano, consumo excessivo de recursos e materiais,
                a expansão das cidades e aos avanços tecnológicos que inserem
                novos hábitos, costumes e alterações na paisagem. Embora grande
                parte destas ações sejam de caráter coletivo,{' '}
                <span className='font-montserratsemi text-white'>
                  algumas mudanças nos hábitos individuais de cada pessoa podem
                  impedir a morte de centenas de aves.
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'
              >
                O Observatório de Aves da Mantiqueira, OAMa, acredita que todos
                podemos associar ao seu modo de vida algumas ações que favoreçam
                a conservação das aves e seus habitats e por isso realiza
                atividades para fomentar ações Pró-Aves na vida e no dia-a-dia
                de todo brasileiro.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'
              >
                Essa campanha tem como objetivo apresentar alguns dos principais
                problemas que afetam as aves e que podem ser mitigados com ações
                simples de cada pessoa. Aqui você vai conhecer sobre o problema
                da caça e tráfico de animais silvestres, sobre o inimigo
                invisível que gera a morte por colisão das aves, sobre a
                problemática das poluições luminosa e sonora e outros.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='font-montserratsemi text-white'
              >
                A mudança precisa de todos nós para acontecer!
              </motion.p>
            </div>

            <div className=' absolute left-[830px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[400px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#CF3C3C]' />
                <div className='relative -left-[10px] -top-[60px] '>
                  <Image height={100} width={100} src={'/proaves2/t-red.webp'} alt='' />
                </div>
              </div>
            </div>
            <div className=' absolute left-[1090px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[600px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#22844C]' />
                <div className='relative  -top-[80px] '>
                  <Image
                    height={110}
                    width={110}
                    src={'/proaves2/t-green.webp'}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[570px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[800px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#8C78AB]' />
                <div className='relative  -top-[80px] right-[10px] '>
                  <Image
                    height={140}
                    width={140}
                    src={'/proaves2/t-purple.webp'}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[940px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[800px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#EB753C]' />
                <div className='relative  -top-[50px] '>
                  <Image
                    height={105}
                    width={105}
                    src={'/proaves2/t-orange.webp'}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className=' absolute left-[740px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[900px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#3A88B6]' />
                <div className='relative  -right-[10px] -top-[80px] '>
                  <Image
                    height={135}
                    width={135}
                    src={'/proaves2/t-blue.webp'}
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className=' absolute left-[660px]  top-0 z-50 hidden lg:flex'>
              <div className=' relative flex h-[543px] flex-col items-center justify-center'>
                <div className='h-full w-[3px] bg-[#E9B130]' />
                <div className='relative  -top-[80px] right-[10px] '>
                  <Image
                    height={135}
                    width={135}
                    src={'/proaves2/t-yellow.webp'}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=' absolute -bottom-[80px]  left-[990px] z-[10] opacity-40'>
            <Image
              className='scale-x-[-1]'
              height={400}
              width={400}
              layout='fixed'
              src={'/proaves2/blob.webp'}
              alt=''
            />
          </div>
        </div>

        <Image
          layout='fill'
          objectFit='cover'
          className=''
          priority
          quality={30}
          src={'/proaves2/bg2.webp'}
          alt=''
        />
      </div>
      <div className="relative -top-[50px] z-[50] -mb-[50px]   bg-[url('/proaves2/pattern.webp')] bg-[length:97px] pt-[50px] lg:top-0 lg:mb-0 lg:rounded-none lg:pt-0">
        <div className='mx-auto max-w-[1024px]'>
          <div className='flex items-end justify-center px-[22px] pt-[46px]'>
            <div className='hidden lg:block'>
              <Image
                className=''
                height={100}
                width={100}
                src={'/proaves2/tsuru-large.webp'}
                alt=''
              />
            </div>
            <h2 className='text-center font-oswald text-[36px] font-bold uppercase text-white md:text-[48px]'>
              Experimente a mudança pelas aves
            </h2>
            <div className='hidden lg:block'>
              <Image
                className='
              hidden scale-x-[-1]
              lg:block'
                height={100}
                width={100}
                src={'/proaves2/tsuru-large.webp'}
                alt=''
              />{' '}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=' grid  grid-cols-1 gap-[20px] px-[30px] py-[100px] md:grid-cols-2 md:px-[90px] lg:grid-cols-7'
          >
            <div
              onClick={() => setVisible('trafico')}
              className='relative order-2 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#FF8989] px-[22px] py-[17px] duration-200 hover:scale-[1.06] lg:order-1 lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Tráfico de <br /> animais silvestres
              </p>
              <div className='absolute  right-0 top-[5px] '>
                <Image
                  src={'/proaves2/bento1.webp'}
                  className=''
                  height={112}
                  width={105}
                  alt=''
                />
              </div>
            </div>
            <div
              onClick={() => setVisible('intro')}
              className='relative order-1 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#FFF] px-[22px]  py-[17px] duration-200 hover:scale-[1.06] lg:order-2 lg:col-span-3'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Por que <br />
                ser pró-aves?
              </p>
              <div className='absolute right-[20px] top-[5px] '>
                <Image
                  src={'/proaves2/bento2.webp'}
                  className=''
                  height={138}
                  width={146}
                  alt=''
                />
              </div>{' '}
            </div>
            <div
              onClick={() => setVisible('pets')}
              className='relative order-3 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none  bg-[#FFAD58] px-[22px] py-[17px] duration-200 hover:scale-[1.06] lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Predação <br /> por pets
              </p>
              <div className='absolute  right-[11px] top-[20px] '>
                <Image
                  src={'/proaves2/bento3.webp'}
                  className=''
                  height={134}
                  width={118}
                  alt=''
                />
              </div>
            </div>
            <div
              onClick={() => setVisible('comedouro')}
              className='relative order-4 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#EFCE70] px-[22px] py-[17px] duration-200 hover:scale-[1.06] lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Bebedouros <br /> e comedouros
              </p>
              <div className='absolute  -bottom-[5px] right-[10px] '>
                <Image
                  src={'/proaves2/bento4.webp'}
                  className=''
                  height={150}
                  width={135}
                  alt=''
                />{' '}
              </div>
            </div>
            <div
              onClick={() => setVisible('colisao')}
              className='relative order-5 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#B0DF9D] px-[22px]  py-[17px] duration-200 hover:scale-[1.06] lg:order-6 lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Colisão <br /> com vidros
              </p>
              <div className='absolute  right-0 top-[5px] '>
                <Image
                  src={'/proaves2/bento6.webp'}
                  className=''
                  height={150}
                  width={150}
                  alt=''
                />
              </div>
            </div>
            <div
              onClick={() => setVisible('sonora')}
              className='relative order-6 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#98C1D9] px-[22px]   py-[17px] duration-200 hover:scale-[1.06] lg:order-7 lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Poluição <br />
                sonora
              </p>
              <div className='absolute  right-0 top-[5px] '>
                <Image
                  src={'/proaves2/bento7.webp'}
                  className=''
                  height={116}
                  width={137}
                  alt=''
                />
              </div>
            </div>
            <a
              href={'/publicacoes/files/Relatório%20Ações%20Pró-Aves%202024.pdf'}
              target='_blank'
              rel='noopener noreferrer'
              className='relative order-9 flex h-[160px] w-full cursor-pointer flex-col items-start  justify-end rounded-2xl rounded-bl-none bg-[#FACC14] px-[22px] py-[17px]    duration-200  hover:scale-[1.06] lg:order-6  lg:col-span-3 lg:row-span-3 lg:h-[340px] lg:justify-center'
            >
              <p className=' z-20 font-montserrat text-[20px] font-bold leading-[1.2] '>
                Resultados <br />
                do programa em 2024
              </p>
              <div className='absolute  right-[25px] top-[25px] '>
                <Image
                  src={'/proaves2/bento8.webp'}
                  className=''
                  height={107}
                  width={136}
                  alt=''
                />
              </div>
            </a>
            <div
              onClick={() => setVisible('luminosa')}
              className='relative order-7 flex h-[160px] w-full cursor-pointer flex-col items-start justify-end rounded-2xl rounded-bl-none bg-[#C9ACF5] px-[22px]  py-[17px] duration-200 hover:scale-[1.06] lg:order-9 lg:col-span-2'
            >
              <p className=' z-20 font-montserrat font-bold leading-5'>
                Poluição <br />
                luminosa
              </p>
              <div className='absolute  right-0 top-[0px] '>
                <Image
                  src={'/proaves2/bento9.webp'}
                  className=''
                  height={160}
                  width={135}
                  alt=''
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className='relative z-[190]  rounded-b-[50px] bg-[#E9B130] lg:rounded-none '>
          <div className="absolute  top-0 z-[2] h-full w-full bg-[url('/proaves2/bg-grid.webp')]  bg-[cover] opacity-90" />
          <div className=' relative z-[21] mx-auto grid max-w-[1024px] grid-cols-2 lg:grid-cols-4 lg:gap-[20px]'>
            <div className='absolute left-[502px] hidden h-[900px] w-[20px] bg-white lg:block'></div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center bg-[url('/proaves2/bg-grid-1.webp')] bg-[cover] duration-200 hover:scale-[1.06]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +<IncreasingNumber finalNumber={41000} />
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Pessoas impactadas online
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center  bg-[url('/proaves2/bg-grid-2.webp')] bg-[cover] duration-200 hover:scale-[1.06]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +<IncreasingNumber finalNumber={4000} />
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Folders informativos
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center bg-[url('/proaves2/bg-grid-3.webp')] bg-[cover] duration-200 hover:scale-[1.06]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                +<IncreasingNumber finalNumber={400} />
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Guias de Aves
              </p>
            </div>
            <div className="flex h-[300px] w-full flex-col items-center justify-center bg-[url('/proaves2/bg-grid-4.webp')] bg-[cover]  duration-200 hover:scale-[1.06]">
              <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                <IncreasingNumber finalNumber={49} />
              </p>
              <p className='font-oswald text-[20px] font-bold text-white'>
                Dias de eventos
              </p>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-1.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Passarinhadas guiadas
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-2.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Workshops
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-3.webp'} alt='' />
              <div className='flex  w-3/4 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  2
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Pesquisas de ciência cidadã{' '}
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-4.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  4
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Banners informativos{' '}
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-5.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  3
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Escolas envolvidas
                </p>
              </div>
            </div>
            <div className='relative hidden h-[200px] w-full items-center justify-center overflow-visible sm:h-[300px]  lg:flex'>
              <div className='absolute -right-[200px] hidden h-[480px] w-[480px] lg:block'>
                <Image
                  height={480}
                  width={480}
                  src={'/proaves2/tsuru-large.webp'}
                  alt=''
                />
              </div>
            </div>
            <div className='hidden h-[200px] w-full items-center justify-center sm:h-[300px] lg:flex   '></div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-6.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  1
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Jogo de tabuleiro
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-7.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  19
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Palestras
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-8.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  4
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Vídeos informativos
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-9.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  3
                </p>
                <p className='font-montserrat text-[20px] font-normal  leading-tight text-white'>
                  Instalações artísticas
                </p>
              </div>
            </div>
            <div className='flex h-[200px] w-full flex-col items-center justify-center sm:h-[300px] '>
              <Image height={70} width={70} src={'/proaves2/icon-10.webp'} alt='' />
              <div className='flex w-1/3 items-center justify-center gap-2'>
                <p className='font-oswald text-[48px] font-bold leading-tight text-white'>
                  14
                </p>
                <p className=' font-montserrat text-[16px] font-normal leading-tight  text-white sm:text-[20px]'>
                  Parceiros e colaboradores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative -top-[50px] -mb-[50px] bg-[#98C1DA]  pt-[90px] lg:top-0 lg:mb-0 lg:pt-0'>
        <h2 className='pt-[20px] text-center font-oswald text-[36px] font-bold uppercase text-white md:text-[48px]'>
          Créditos
        </h2>
        <div className='mx-auto max-w-[1024px] pb-[100px] pt-[40px] '>
          <Carousel
            opts={{ loop: true }}
            className='mx-auto w-[350px] max-w-[90vw] px-[20px] lg:w-5/6'
          >
            <CarouselContent className='flex '>
              {Array.from({ length: 11 }).map((_, i) => (
                <CarouselItem className='w-full   md:basis-[45%]' key={i}>
                  <div className=' relative h-[400px] '>
                    <Image
                      src={`/proaves2/gallery/final${i + 1}.webp`}
                      layout='fill'
                      objectFit='cover'
                      className='lg:rounded-2xl'
                      alt=''
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext size={50} color='black' height='1/2' />
            <CarouselPrevious size={50} color='black' height='1/2' />
          </Carousel>
          <div className='mt-[30px] w-full text-center'>
            <p className='font-montserratsemi text-[18px] uppercase text-white'>
              Pesquisa e Elaboração do Texto
            </p>
            <ul className='mb-[30px] font-montserrat text-[18px]'>
              <li>Affonso Souza</li>
              <li>Andreza Freitas</li>
              <li>Danielle Santos</li>
              <li>Luiza Figueira</li>
              <li>Otávio Rocha</li>
              <li>Rafaela Vitti</li>
              <li>Ruan Vaz</li>
            </ul>
          </div>

          <div className='mt-[30px] w-full text-center'>
            <p className='font-montserratsemi text-[18px] uppercase text-white'>
              Montagem do Site{' '}
            </p>
            <ul className='mb-[30px] font-montserrat text-[18px]'>
              <li>Otávio Rocha</li>
              <li>Pedro Martins</li>
            </ul>
          </div>
          <div className='mt-[30px] w-full text-center'>
            <p className='font-montserratsemi text-[18px] uppercase text-white'>
              Realização
            </p>
            <div className='mt-4 flex items-center justify-center gap-4 px-[10px]'>
              <Image height={60} width={82} src={'/proaves2/rel1.webp'} alt='OAMa' />
              <a
                href='https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/pan/pan-aves-da-mata-atlantica'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image height={60} width={174} src={'/proaves2/rel2.webp'} alt='PAN Aves da Mata Atlântica' />
              </a>
              <a
                href='https://www.gov.br/icmbio/pt-br/assuntos/centros-de-pesquisa/aves-silvestres'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <Image height={60} width={104} src={'/proaves2/rel3.webp'} alt='CEMAVE' />
              </a>
            </div>
          </div>
          <div className='mt-[30px] w-full text-center'>
            <p className='font-montserratsemi text-[18px] uppercase text-white'>
              Apoio
            </p>
            <div className='mt-4 flex items-center justify-center gap-4'>
              <a
                href='https://www.instagram.com/birdsatlantic/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image height={60} width={60} src={'/proaves2/ap1.webp'} alt='Birds Atlantic' />
              </a>
              <a href='https://crbio04.gov.br/' target='_blank' rel='noopener noreferrer'>
                <Image height={60} width={60} src={'/proaves2/ap3.webp'} alt='CRBio-04' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
