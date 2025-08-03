import type { ComponentProps, CSSProperties, ElementType, HTMLAttributes, JSX, ReactNode } from "react";
import { BlurbListProps } from "./modules/blurb";
import { FaqListProps } from "./modules/faq";


export type VideoControlButtonProps = {
    videoId?: string;
    pauseIconUrl?: string;
    playIconUrl?: string;
    pauseAlt?: string;
    playAlt?: string;

} & ComponentProps<"button">;

export type VideoFallbackProps = {
    fallbackSrc?: string;
    fallbackAlt?: string;
    fallbackStyle?: CSSProperties
}

export type VideoElementProps = {
    videoId?: string;
    posterUrl?: string;
    mp4Url: string;
    webmUrl?: string;
    dataWfIgnore?: boolean;
    dataObjectFit?: string;
} & ComponentProps<"video">;

export type VideoBackgoundProps = {
    mp4Url: string;
    webmUrl?: string;
    posterUrl?: string;
    videoId?: string;
    controlButtonProps?: Omit<VideoControlButtonProps, "videoId">;
    videoElementProps?: Pick<VideoElementProps, "dataWfIgnore" | "dataObjectFit">;
    children?: ReactNode;
} & VideoFallbackProps;

export type TitleElementProps = {
    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    title?: string;
    children?: ReactNode;
    style?: CSSProperties;
} & HTMLAttributes<HTMLHeadingElement>;

export type TextElementProps<T extends ElementType = "p"> = {
    as?: T;
    children?: ReactNode;
    style?: CSSProperties;
} & ComponentProps<T> /*& HtmlHTMLAttributes<HTMLElement>;*/

export type VideoIframeProps = {
    style?: CSSProperties;
} & ComponentProps<"iframe">;

export type IntroWithVideoSectionProps<
TText extends ElementType = "p", 
TButton extends ElementType = "a"> = {
    sectionProps?: ComponentProps<"div">;
    title?: TitleElementProps;
    text?: TextElementProps<TText>;
    video: VideoIframeProps;
    button?: TextElementProps<TButton>;
}

export type TestimonialsSectionProps = {
    sectionProps?: ComponentProps<"div">;
    containterProps?: ComponentProps<"div">;
    title: TitleElementProps;
    description?: TitleElementProps;
}

export type ImageElementProps = React.ImgHTMLAttributes<HTMLImageElement>;

export type TextImageSectionProps<
Button extends ElementType = "a"> = {
    sectionProps?: ComponentProps<"div">;
    containerProps?: ComponentProps<"div">;
    infoContentContainerProps?: ComponentProps<"div">;
    colRightProps?: ComponentProps<"div">;
    colLeftProps?: ComponentProps<"div">;
    sectionType?: "default" | "full-width";
    title?: TitleElementProps;
    description?: ReactNode;
    image?: ImageElementProps;
    imageSide?: "left" | "right";
    blurbList?: BlurbListProps;
    button?: TextElementProps<Button>;
}

export type CallToActionSectionProps<Button extends ElementType = "a"> = {
    style?: CSSProperties;
    title: string;
    description?: string;
    button?: TextElementProps<Button>;
}

export type FaqSectionProps = {
    sectionProps?: ComponentProps<"div">;
    containerProps?: ComponentProps<"div">;
    title?: string;
    faqList?: FaqListProps
}

export type HeroSectionProps<
    Button extends ElementType = "a",
    Text extends ElementType = "div"
> = {
    sectionProps?: ComponentProps<"div">;
    containerProps?: ComponentProps<"div">;
    title: TitleElementProps;
    description?: TextElementProps<Text>;
    button?: TextElementProps<Button>; 
}

export type TextSectionProps<
    Text extends ElementType = "div",
    Button extends ElementType = "a"
> = {
    sectionProps?: ComponentProps<"div">;
    containerProps?: ComponentProps<"div">;
    title?: TitleElementProps;
    text?: TextElementProps<Text>;
    blurbList?: BlurbListProps;
    moduleList?: JSX.Element[];
    button?: TextElementProps<Button>;
}

export type FormSectionProps<
    Text extends ElementType = "div",
    Button extends ElementType = "a"
> = {
    sectionProps?: ComponentProps<"div">;
    containerProps?: ComponentProps<"div">;
    title?: TitleElementProps;
    text?: TextElementProps<Text>;
    form?: JSX.Element;
    button?: TextElementProps<Button>;
}

export type PageProps = {
    title?: string;
    slug?: string;
    description?: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
    openGraphUrl?: string;
    openGraphSiteName?: string;
    openGraphType?: "website" | "article" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
    openGraphImage?: string;
    canonicalUrl?: string;
}