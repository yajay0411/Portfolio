import React, { useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import css from "./PdfReader.module.css";

interface PdfReaderProps {
  scale?: number;
  file: string;
}

const PdfReader: React.FC<PdfReaderProps> = ({ scale = 2, file }) => {
  // Multiply the scale by the devicePixelRatio to ensure sharp rendering
  const adjustedScale = scale * window.devicePixelRatio;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pdfDocument } = usePdf({
    file,
    scale: adjustedScale,
    canvasRef,
  });

  if (!pdfDocument) {
    return <div className={css.loading}>Loading...</div>;
  }

  const iterations = pdfDocument.numPages ?? 0;

  return (
    <div className={css["pdfreader-parent-container"]}>
      {Array.from({ length: iterations }, (_, i) => (
        <div key={i} className={css["pdfreader-page"]}>
          <canvas ref={canvasRef} />
        </div>
      ))}
    </div>
  );
};

export default PdfReader;
