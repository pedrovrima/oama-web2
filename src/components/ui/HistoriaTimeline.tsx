import { useState } from "react";

export interface HistoriaItem {
  ano: number;
  titulo: string;
  /** Parágrafo de abertura do ano. Pode ser vazio quando só há marcos. */
  texto: string;
  /** Marcos do ano, quando o conteúdo é uma lista e não um texto corrido. */
  itens?: string[];
  foto?: string;
}

export default function HistoriaTimeline({ items }: { items: HistoriaItem[] }) {
  const [openAno, setOpenAno] = useState<number | null>(null);

  return (
    <div className="relative pl-10">
      {items.map((item, index) => {
        const isOpen = openAno === item.ano;
        const isLast = index === items.length - 1;
        return (
          <div key={item.ano} className="relative">
            {/* Upper segment: from item top to dot center (connects from previous dot) */}
            {index > 0 && (
              <div className="absolute left-[-31px] top-0 h-[22px] w-0.5 bg-[#1a2e4a]" />
            )}
            {/* Dot */}
            <div className="absolute -left-10 top-[13px] w-[18px] h-[18px] rounded-full bg-[#1a2e4a] z-10" />
            {/* Lower segment: from dot center to item bottom (connects to next dot) */}
            {!isLast && (
              <div className="absolute left-[-31px] top-[22px] bottom-0 w-0.5 bg-[#1a2e4a]" />
            )}

            {/* Header row */}
            <button
              onClick={() => setOpenAno(isOpen ? null : item.ano)}
              className="w-full text-left py-2.5 flex items-baseline gap-3 group"
            >
              <span className="font-oswald font-bold text-[20px] text-[#1a2e4a] shrink-0 leading-none">
                {item.ano}
              </span>
              {item.titulo && (
                <span className="font-oswald font-normal uppercase tracking-wide text-[17px] text-[#1a2e4a] leading-none group-hover:opacity-70 transition-opacity">
                  {item.titulo}
                </span>
              )}
            </button>

            {/* Expandable content */}
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 pb-6 pt-1">
                {item.foto && (
                  <img
                    src={item.foto}
                    alt={item.titulo}
                    className="w-full md:w-[45%] max-h-[300px] object-cover rounded-xl shrink-0"
                  />
                )}
                <div className="font-montserrat text-[16px] text-white leading-relaxed">
                  {item.texto && <p>{item.texto}</p>}
                  {item.itens && item.itens.length > 0 && (
                    <ul className={`list-disc space-y-1.5 pl-5 marker:text-white/60 ${item.texto ? "mt-4" : ""}`}>
                      {item.itens.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
