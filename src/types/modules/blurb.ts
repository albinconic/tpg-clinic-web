import React, { ComponentProps } from "react";

export type BlurbItemsProps = {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    icon?: React.ReactElement<HTMLElement>;
}

export type BlurbListProps = {
    sectionProps?: ComponentProps<"ul">;
    blurbs: BlurbItemsProps[];
};