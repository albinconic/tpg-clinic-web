import { BlurbItemsProps } from "@/types/modules/blurb";
import { JSX } from "react";

const BlurbItem = ({
    title,
    description,
    icon = <span className="icon-check"></span>
}: BlurbItemsProps): JSX.Element => {

    const renderTitle = () => {
        if (typeof title === "string") {
            return <><span>{title}</span><br /></>;
        }
        return title;
    }

    return (
        <li>
            {icon}
            <div>
                {renderTitle()}
                {description && <div>{description}</div>}
            </div>
        </li>
    )
}

export default BlurbItem;