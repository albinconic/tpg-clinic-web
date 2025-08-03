import { ComponentProps, JSX } from "react";

export type FaqItemProps = {
  question: string;
  answer: string;
  icon?: JSX.Element;
};

export type FaqListProps = {
  faqs: FaqItemProps[];
  sectionProps?: ComponentProps<"div">;
};