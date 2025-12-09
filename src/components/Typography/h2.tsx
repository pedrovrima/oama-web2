import type { ComponentPropsWithoutRef } from "react";

type H2Props = ComponentPropsWithoutRef<"h2">;

const baseClassName =
  "text-center text-2xl font-extrabold uppercase  text-white font-oswald";

const H2 = ({ className, children, ...props }: H2Props) => {
  const mergedClassName = [baseClassName, className].filter(Boolean).join(" ");

  return (
    <h2 className={mergedClassName} {...props}>
      {children}
    </h2>
  );
};

export default H2;
