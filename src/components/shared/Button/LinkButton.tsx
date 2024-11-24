import ButtonBase, { ButtonBaseMainProps } from "@/components/shared/Button/ButtonBase";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = { className?: string, children: ReactNode } & LinkProps & ButtonBaseMainProps

const LinkButton = ({ className, children, href, ...rest }: LinkButtonProps) => {
    return (
        <ButtonBase className={className} {...rest}>
            <Link href={href}>
                {children}
            </Link>
        </ButtonBase>
    );
};

export default LinkButton;