import { JSX } from "react";
import { FaqItemProps } from "@/types/modules/faq";

const FaqItem = ({
  question,
  answer,
  icon = (
    <img
      src="/images/Icons-2.svg"
      loading="lazy"
      width={35}
      height={35}
      alt={`Toggle answer for: ${question}`}
      className="down-arrow"
    />
  ),
}: FaqItemProps): JSX.Element => {
  return (
    <div className="accordian-wrapper">
      <div className="accordian-item">
        <div className="accordian-item-trigger">
          <h3 className="accordian-question-text">{question}</h3>
          {icon}
        </div>
        <div className="acccordian-item-content">
          <p className="paragraph-2" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;