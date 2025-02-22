import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import logoSrc from "./logo.webp";

const LogoPDM = ({ className, ...props }: Omit<ImageProps, "src" | "alt">) => {
  return (
    <Image
      className={clsx("block h-auto w-[60px] md:w-[70px]", className)}
      {...props}
      src={logoSrc}
      alt="Logo Plantillas de Memes"
    />
  );
};

export default LogoPDM;
