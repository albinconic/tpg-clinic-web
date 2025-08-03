import React from "react";
import { ImageElementProps } from "../ui";

export type TeamItemProps = {
    id?: string;
    category?: string;
    image: ImageElementProps;
    name: string;
    qualifications?: string;
    position?: string | React.ReactNode;
    bio?: string | React.ReactNode;
    buttonText?: string;
}

export type TeamListProps = {
    containerProps?: React.ComponentProps<"div">;
    teamMembers?: TeamItemProps[];
    title?: string;
}