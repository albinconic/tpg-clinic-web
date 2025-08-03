import { TextElementProps } from "@/types/ui";
import { ElementType, JSX } from "react";

const TextElement = <T extends ElementType = "p">({
    as,
    children,
    className,
    ...rest
}: TextElementProps<T>): JSX.Element => {
    const Component = as || "p";

    return (
        <Component className={className} {...rest}>
            {children}
        </Component>
    )

}

export default TextElement;