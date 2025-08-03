import { JSX } from "react";
import ImageElement from "@/components/ui/ImageElement";
import { TestimonialItemProps } from "@/types/modules/testimonials";
import { useReadMoreSlickSlider } from "@/hooks/useReadMoreSlickSlider";

const TestimonialItem = ({
  authorName,
  text,
  rating,
  image,
  readMoreBtn=true
}: TestimonialItemProps): JSX.Element => {
    const {isExpanded, toggleReadMore} = useReadMoreSlickSlider(300);

  return (
    <div className={`review-card ${isExpanded ? `expanded` : ``}`}>
            {rating && <div className="review-rating">{`⭐`.repeat(Math.round(rating))}</div>}
            <p className="review-text">{text}</p>
            
            {readMoreBtn && (
                <button onClick={toggleReadMore} className="read-more">{isExpanded ? `Show less` : `Read more`}</button>
            )}
            <div className="review-author">
                <ImageElement {...image} />
                <span>{authorName}</span>
            </div>
        </div>
  );
};

export default TestimonialItem;