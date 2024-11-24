import classNames from "classnames";

export enum HeadingSizes {
    "xl" = "4.5em",
    "lg" = "3.75em",
    "md" = "3em",
    "sm" = "2.25em",
    "xs" = "1.875em",
    "2xs" = "1.5em",
}

type HeadingProps = {
    tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    size?: HeadingSizes,
    children: React.ReactNode,
    gradient?: boolean,
    className?: string,
    textClassName?: string,
}

const Heading = ({
                     tag = "div",
                     size = HeadingSizes.lg,
                     textClassName,
                     gradient,
                     className,
                     children
                 }: HeadingProps) => {
    const classes = classNames({
        "text-black leading-tight font-semibold text-[8px] xs:text-[12px] md:text-[16px]": 1,
        "bg-gradient-to-r from-white to-gray-400 text-gradient": gradient
    }, className);

    if (tag === "div") return (
        <div className={classes}>
            <span style={{ fontSize: size }} className={textClassName}>{children}</span>
        </div>
    );

    else if (tag === "h1") return (
        <h1 className={classes}>
            <span style={{ fontSize: size }} className={textClassName}>{children}</span>
        </h1>
    );

    else if (tag === "h2") return (
        <h2 className={classes}>
            <span style={{ fontSize: size }} className={textClassName}>{children}</span>
        </h2>
    );

    else if (tag === "h3") return (
        <h3 className={classes}>
            <span style={{ fontSize: size }} className={textClassName}>{children}</span>
        </h3>
    );

    else if (tag === "h4") return (
        <h4 className={classes}>
            <span style={{ fontSize: size }} className={textClassName}>{children}</span>
        </h4>
    );

    else if (tag === "h5") return (
        <h5 className={classes}>
            <span style={{ fontSize: size }}>{children}</span>
        </h5>
    );

    return (
        <h6 className={classes}>
            <span style={{ fontSize: size }}>
                {children}
            </span>
        </h6>
    );
};

export default Heading;