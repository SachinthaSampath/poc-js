import ReactPDFViewer from "@/components/ReactPDFViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "file-example_PDF_500_kB",
};

const Page = () => {
  return (
    <div>
      <ReactPDFViewer url={"/docs/file-example_PDF_500_kB.pdf"} />
    </div>
  );
};

export default Page;
