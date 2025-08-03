import { JSX } from "react";
import FaqItem from "./FaqItem";
import { FaqListProps } from "@/types/modules/faq";

const FaqList = ({ 
    faqs, 
    sectionProps 
}: FaqListProps): JSX.Element => {
  const { className, ...sectionPropsRest } = sectionProps ?? {};

  return (
    <div {...sectionPropsRest}>
        {faqs.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
    </div>
  );
};

export default FaqList;