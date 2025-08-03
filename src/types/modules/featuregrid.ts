import { ComponentProps } from "react";
import { ImageElementProps } from "../ui";

export type FeatureGridItemProps = {
  title: string;
  text: string;
  image?: ImageElementProps;
};

export type FeatureGridListProps = {
  gridItems: FeatureGridItemProps[];
  sectionProps?: ComponentProps<"div">;
};