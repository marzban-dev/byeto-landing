"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
    return <Toaster
        position="bottom-center"
        gutter={8}
        toastOptions={{
            duration: 3000,
            style: {
                borderRadius: "10px",
                background: "hsla(0,0%,0%,0.25)",
                backdropFilter : "blur(40px)",
                color: "#fff",
                border : "1px solid hsla(var(--color-primary-comma-seperated), 0.5)"
            }
        }}
    />;
};

export default ToastProvider;