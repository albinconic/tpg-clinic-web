import { useState } from "react";

export const useReadMoreSlickSlider = (maxChars: number = 250) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded((prev) => !prev);

    // Not in use for current logic
    /*const getReadMoreText = (text: string) => {
        if (isExpanded || text.length <= maxChars) {
            return text;
        }
        return `${text.slice(0, maxChars)}...`;
    };*/

    return { isExpanded, toggleReadMore }

}