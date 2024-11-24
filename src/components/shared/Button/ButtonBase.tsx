import { Children, cloneElement } from "react";
import classNames from "classnames";

export type ButtonBaseMainProps = {
    disabled?: boolean;
    variant?: "solid" | "stroke" | "transparent" | "white",
    loading?: boolean;
}

type ButtonBaseProps = ButtonBaseMainProps & Record<any, any>

const ButtonBase = ({ variant = "solid", disabled, className,children, ...rest }: ButtonBaseProps) => {

    const classes = classNames({
        "text-[12px] xs:text-[16px] px-6 h-[34px] xs:h-[35px] lg:h-[40px] rounded-[6px] xs:rounded-[7px] flex justify-center items-center text-white outline outline-transparent transition-all outline-4 active:outline-primary/50 hover:brightness-125": 1,
        "border border-blue-500 !text-blue-500": variant === "stroke",
        "bg-primary !text-black": variant === "solid",
        "bg-transparent": variant === "transparent",
        "bg-white !text-black": variant === "white",
        "grayscale": disabled
    }, className);

    return (
        Children.map(children, child => {
            return cloneElement(child, {
                className: classes,
                disabled,
                ...rest
            });
        })
    );
};

export default ButtonBase;