import { ImageElementProps } from "@/types/ui"
import { JSX } from "react";
const ImageElement = (props: ImageElementProps): JSX.Element => {
    return (
        <img loading="lazy" {...props} />
    )
}

/*import Image, { ImageProps } from "next/image";
import { JSX } from "react";

export type ImageElementProps = ImageProps & {
  className?: string;
};

const ImageElement = (props: ImageElementProps): JSX.Element => {
  const { className, loading = "lazy", ...rest } = props;

  return (
    <Image
      {...rest}
      loading={loading}
      className={className}
    />
  );
};*/

export default ImageElement;
