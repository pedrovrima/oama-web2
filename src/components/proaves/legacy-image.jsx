// Shim de next/legacy/image para a migração da página /proaves.
// Emula os layouts usados no legado: fill, responsive, fixed e intrinsic (default).
export default function Image({
  src,
  alt = "",
  height,
  width,
  layout,
  objectFit,
  objectPosition,
  className = "",
  priority,
  quality, // ignorado: sem otimizador de imagem no site estático
  ...rest
}) {
  const loading = priority ? "eager" : "lazy";
  const fitClass =
    objectFit === "contain"
      ? "object-contain"
      : objectFit === "cover"
        ? "object-cover"
        : "";

  if (layout === "fill") {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute inset-0 h-full w-full ${fitClass} ${className}`}
        style={objectPosition ? { objectPosition } : undefined}
        {...rest}
      />
    );
  }

  if (layout === "responsive") {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`h-auto w-full ${fitClass} ${className}`}
        {...rest}
      />
    );
  }

  if (layout === "fixed") {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`max-w-none ${fitClass} ${className}`}
        style={{ width, height }}
        {...rest}
      />
    );
  }

  // intrinsic (default do next/legacy/image): respeita as dimensões,
  // mas encolhe até a largura do contêiner
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`${fitClass} ${className}`}
      style={{ maxWidth: "100%", height: "auto" }}
      {...rest}
    />
  );
}
