// Porte verbatim de components/pro-aves/components.jsx do legado
// (apenas o import do Image foi trocado pelo shim local).
import { Carousel } from "react-responsive-carousel";

import Image from "./legacy-image";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function H3({ children }) {
  return (
    <h3 className="font-bold text-gray-800 text-xl mb-4 mt-12">{children}</h3>
  );
}

export function P({ children }) {
  return <p className="mb-4">{children}</p>;
}

export function H4({ children }) {
  return (
    <h3 className="font-bold text-gray-600 text-lg italic mb-4 mt-8">
      {children}
    </h3>
  );
}

export function Carroussel({ figs, section }) {
  return (
    <div className="flex group h-100 justify-center items-center sm:px-8">
      <Carousel
        showArrows={true}
        showStatus
        autoPlay
        swipeable
        emulateTouch
        infiniteLoop
        className="mt-2 bg-gray-700 mb-8 sm:mb-4  h-72 w-full sm:h-96 my-auto"
      >
        {figs.map((img) => (
          <div className="h-72 w-full sm:h-96  relative" key={img.number}>
            <Image
              alt=""
              layout="fill"
              objectFit="contain"
              src={encodeURI(`/proaves/${section}/fig${img.number}.webp`)}
            ></Image>
            <div className="w-full flex absolute bottom-0 sm:bottom-12 justify-center">
              <p className="w-full sm:w-2/3  opacity-80 sm:opacity-5 text-white bg-gray-700 rounded-md p-2 group-hover:opacity-80 ">
                {img.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
