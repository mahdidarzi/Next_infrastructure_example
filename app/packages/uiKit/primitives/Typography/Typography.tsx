import React from "react";
import clsx from "clsx";
import styles from "./Typography.module.scss";

export type TypographySize =
    | "xs" | "sm" | "base" | "lg"
    | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export type TypographyWeight =
    | "light" | "normal" | "medium" | "semibold" | "bold";

export type TypographyColor = "default" | "muted" | "inverse";

export interface TypographyProps {
    as?: React.ElementType; // <p>, <h1>, <span>...
    size?: TypographySize;
    weight?: TypographyWeight;
    color?: TypographyColor;
    className?: string;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
    as: Component = "p",
    size = "base",
    weight = "normal",
    color = "default",
    className,
    children,
    ...props
}) => {
    return (
        <Component
            className={clsx(
                styles.typography,
                styles[`text-${size}`],
                styles[`font-${weight}`],
                styles[`color-${color}`],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
