"use client";

import React, { JSX } from "react";
import clsx from "clsx";
import { TestimonialListProps } from "@/types/modules/testimonials";
import TestimonialItem from "./TestimonialItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "@/components/ui/SlickArrows";

const TestimonialList = ({ 
    items, 
    sectionProps 
}: TestimonialListProps): JSX.Element => {
  const { className, ...sectionPropsRest } = sectionProps ?? {};
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 1 },
        },
        ],
    };

  return (
    <div className={clsx("review-slider-list", className)} {...sectionPropsRest}>
        <Slider {...settings} className="review-slider">
            {items.map((item, index) => (
                <TestimonialItem 
                    key={index} 
                    authorName={item.authorName} 
                    text={item.text} 
                    image={item.image} 
                    rating={item.rating} 
                    readMoreBtn={item.readMoreBtn} 
                />
            ))}
        </Slider>
    </div>
  );
};

export default TestimonialList;