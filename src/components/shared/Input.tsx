import { ComponentProps, forwardRef } from "react";
import classNames from "classnames";

type InputProps = ComponentProps<"textarea"> & ComponentProps<"input"> & {
    title?: string
    textarea?: boolean;
    containerClassName?: string;
    error?: boolean;
}

const Input = forwardRef(({
                              className,
                              rows,
                              error,
                              textarea,
                              containerClassName,
                              title,
                              ...rest
                          }: InputProps, ref) => {

    const classes = classNames({
        [`px-4 h-[44px] xs:h-[44px] transition-colors rounded-[8px] bg-transparent outline-none text-gray-300 border border-gray-700 focus:border-primary ${className}`]: 1,
        "pt-2 resize-none !h-auto": textarea,
        "!border-red-500": error
    });

    return (
        <div className={`flex flex-col ${containerClassName}`}>
            {title && <span className="text-[14px] text-white mb-2">{title}</span>}

            {textarea ? (
                <textarea
                    className={classes}
                    rows={rows ?? 5}
                    {...rest}
                    //@ts-ignore
                    ref={ref}
                />
            ) : (
                <input
                    className={classes}
                    {...rest}
                    //@ts-ignore
                    ref={ref}
                />
            )}
        </div>
    );
});

Input.displayName = "Input";

export default Input;