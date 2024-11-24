import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            animation: {
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
            screens: {
                "3xs": "320px",
                "2xs": "420px",
                "xs": "480px",
                "3xl": "2000px"
            },
            container: {
                center: true,
                screens: {
                    // "3xs": "380px",
                    // "2xs": "420px",
                    // "xs": "480px",
                    "sm": "680px",
                    "md": "768px",
                    "lg": "1024px",
                    "xl": "1200px",
                    "2xl": "1200px"
                },
                padding: {
                    DEFAULT: "12px",
                    "xs": "6%"
                }
            },
            colors: {
                black: "#08121E",
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                background: "hsl(var(--color-background) / <alpha-value>)"
            },
            backgroundImage: {
                "gradient-header": "radial-gradient(at 50% -120%, hsla(var(--color-primary-comma-seperated), 0.3) 0%, transparent 75%)"
            }
        }
    },
    plugins: [
        addVariablesForColors,
        plugin(function ({ addUtilities, matchUtilities, theme }) {
            addUtilities({
                ".text-gradient" : {
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
                ".effect-click-ring": {
                    "outline": "4px solid transparent",
                    "&:active": {
                        "outline": "4px solid hsla(var(--color-primary-comma-seperated), 0.3)"
                    }
                },
                ".effect-click-scale": {
                    "&:active": {
                        "filter": "brightness(1.5)",
                        "scale": "0.90"
                    }
                },
                ".effect-click-down": {
                    "&:active": {
                        "filter": "brightness(1.5)",
                        "translate": "0px 4px"
                    }
                },
                ".effect-hover-brightness": {
                    "&:hover": {
                        "filter": "brightness(1.5)"
                    }
                }
            });

            matchUtilities(
                {
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-dot": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
            );
        })
    ]
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
