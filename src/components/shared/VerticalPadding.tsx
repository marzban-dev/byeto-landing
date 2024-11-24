import classNames from "classnames";

type VerticalPaddingProps = {
    top?: boolean;
    bottom?: boolean;
    className?: string;
    children: React.ReactNode;
}

const VerticalPadding = ({ children, className, top = true, bottom = true }: VerticalPaddingProps) => {

    const classes = classNames({
        "pt-[50px] lg:pt-[100px]": top,
        "pb-[50px] lg:pb-[100px]": bottom
    }, className);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default VerticalPadding;