import { useWindowSize } from "@reactuses/core";

export const useRatio = () => {

    const { width: windowWidth } = useWindowSize()
    const isMobile: boolean = windowWidth < 1024

    return {
        isMobile
    }
}