import { JSX } from "react";
import type { TitleElementProps } from "@/types/ui";

const TitleElement = ({
    title,
    heading = "h1",
    style,
    children,
    className,
    ...rest
}: TitleElementProps): JSX.Element => {
    const HeadingTag = heading;

    return (
        <HeadingTag style={style} {...rest} className={className}>
            {children ?? title}
        </HeadingTag>
    )

}

export default TitleElement;