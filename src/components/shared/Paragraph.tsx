import classNames from "classnames";

export enum ParagraphSizes {
    "xl" = "1.125em",
    "lg" = "1em",
    "md" = "0.875em",
    "sm" = "0.75em",
    "xs" = "0.625em",
}

type ParagraphProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "light" | "gray" | "black";
    size?: ParagraphSizes
}

const Paragraph = ({ children, variant = "light", size = ParagraphSizes.lg, className }: ParagraphProps) => {
    const classes = classNames({
        "text-[12px] xs:text-[14px] md:text-[16px]" : 1,
        "text-gray-300": variant === "gray",
        "text-white": variant === "light",
        "text-black": variant === "black",
    }, className);

    return (
        <p className={classes}>
            <span style={{ fontSize: size }}>
                {children}
            </span>
        </p>
    );
};

export default Paragraph;