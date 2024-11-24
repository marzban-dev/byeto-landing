"use client";

import { ComponentProps } from "react";
import ButtonBase, { ButtonBaseMainProps } from "@/components/shared/Button/ButtonBase";

type ButtonProps = ComponentProps<"button"> & ButtonBaseMainProps

const Button = ({ className, children, loading, ...rest }: ButtonProps) => {
    return (
        <ButtonBase className={className} {...rest}>
            <button>
                {
                    loading ? (
                        <i className="fa-duotone fa-spinner-third text-black text-[1.25rem] animate-spin"></i>
                    ) : children
                }
            </button>
        </ButtonBase>
    );
};

export default Button;