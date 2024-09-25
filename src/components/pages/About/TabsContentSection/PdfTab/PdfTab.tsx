import React from "react";
import resumePdf from "../../../../../assets/AjayYadavResume.pdf";
import PdfReader from "../../../../../shared/shared_components/PdfViewer/PdfReader";
import css from "./PdfTab.module.css";

const PdfTab: React.FC = () => {
  // Download handler for the PDF
  const handleDownload = () => {
    console.log(resumePdf.split(".")[0].split("/")[3]);
    // Create an anchor element to download the file
    const link = document.createElement("a");
    link.href = resumePdf; // file URL passed to the component

    let name = "document.pdf";
    if (resumePdf) {
      name = `document-${resumePdf?.split(".")[0]?.split("/")[3]}.pdf`;
    }
    link.download = name; // Use the file name or default
    link.click();
  };
  return (
    <>
      <h1>My Resume</h1>
      <div className={css["pdf-tab"]}>
        <PdfReader file={resumePdf} />
        {/* Download Button */}
        <button className={css["download-button"]} onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </>
  );
};

export default PdfTab;
