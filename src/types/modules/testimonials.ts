import { ComponentProps, JSX } from "react";
import { ImageElementProps } from "../ui";

export type TestimonialItemProps = {
  authorName: string;
  text: JSX.Element | string;
  image?: ImageElementProps;
  rating?: number;
  readMoreBtn?: true | false;
};

export type TestimonialListProps = {
  items: TestimonialItemProps[];
  sectionProps?: ComponentProps<"div">;
};