import { useRef } from "react";
import html2canvas from "html2canvas";

const useExportToPNG = () => {
    const elementRef = useRef(null);

    const captureAndExport = () => {
        const elementToCapture = elementRef.current;

        if (!elementToCapture) {
            console.error("Element to capture is not found.");
            return;
        }

        html2canvas(elementToCapture).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const img = new Image();
            img.src = imgData;
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "id-card.png";
            link.click();
        });
    };

    return { elementRef, captureAndExport };
};

export default useExportToPNG;
