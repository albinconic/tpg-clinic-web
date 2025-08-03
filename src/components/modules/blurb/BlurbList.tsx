import { JSX } from "react";
import BlurbItem from "./BlurbItem";
import { BlurbListProps } from "@/types/modules/blurb";
import clsx from "clsx";

const BlurbList = ({
    blurbs,
    sectionProps,
}: BlurbListProps): JSX.Element => {
    const {className, ...sectionPropsRest} = sectionProps ?? {};

    return (
        <ul className={clsx("info-list", className)} {...sectionPropsRest}>
            {blurbs.map((item, index) => (
                <BlurbItem 
                    key={index} 
                    title={item.title} 
                    description={item?.description}
                />
            ))}
        </ul>
    )
}

export default BlurbList;