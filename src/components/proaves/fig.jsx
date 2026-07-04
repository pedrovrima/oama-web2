// Porte de components/pro-aves/image.jsx do legado (Fig).
// O original usava require() para obter as dimensões; aqui a imagem
// renderiza em largura total com proporção natural (mesmo resultado visual).
export default function Fig({ number, legend, section }) {
  const src = encodeURI(`/proaves/${section}/fig${number}.jpg`);

  return (
    <div className="mb-6">
      <img src={src} alt="" loading="lazy" className="h-auto w-full" />
      <legend className="mt-4 text-sm text-gray-500">{legend}</legend>
    </div>
  );
}
