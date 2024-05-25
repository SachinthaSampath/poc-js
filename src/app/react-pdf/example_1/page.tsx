import { Metadata } from "next";

import { Document, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const metadata: Metadata = {
  title: "file-example_PDF_1MB",
};

const Page = () => {
  return (
    <div>
      <Document file={"/docs/file-example_PDF_1MB.pdf"} />
    </div>
  );
};

export default Page;

// ref
// https://www.npmjs.com/package/react-pdf
