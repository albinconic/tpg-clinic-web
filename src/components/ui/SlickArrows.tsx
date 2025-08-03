"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button type="button" className="slick-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

export const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button type="button" className="slick-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);
