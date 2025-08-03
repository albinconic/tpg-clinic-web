import { JSX } from "react";
import clsx from "clsx";
import { FeatureGridListProps } from "@/types/modules/featuregrid";
import FeatureGridItem from "./FeatureGridItem";

const FeatureGridList = ({ 
    gridItems, 
    sectionProps 
}: FeatureGridListProps): JSX.Element => {
  const { className, ...sectionPropsRest } = sectionProps ?? {};

  return (
    <div className={clsx("feature-grid-list", className)} {...sectionPropsRest}>
        <div className="method-cards">
            {gridItems.map((item, index) => (
                <FeatureGridItem 
                    key={index} 
                    title={item.title} 
                    text={item.text} 
                    image={item.image} 
                />
            ))}
        </div>
    </div>
  );
};

export default FeatureGridList;