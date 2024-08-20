import { ImageLoaderProps } from "next/image";

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = src.startsWith("//") ? `https:${src}` : src;
  return `${url}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
