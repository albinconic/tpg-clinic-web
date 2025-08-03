import { JSX } from "react";
import { FeatureGridItemProps } from "@/types/modules/featuregrid";
import ImageElement from "@/components/ui/ImageElement";

const FeatureGridItem = ({
  title,
  text,
  image,
}: FeatureGridItemProps): JSX.Element => {
  return (
    <div className="method-card">
        <ImageElement {...image} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  );
};

export default FeatureGridItem;