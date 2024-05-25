import ReactPDFViewer from "@/components/ReactPDFViewer";

export const metadata: Metadata = {
  title: "file-example_PDF_1MB",
};

const Page = () => {
  return (
    <div>
      <ReactPDFViewer url={"/docs/file-example_PDF_1MB.pdf"} />
    </div>
  );
};

export default Page;
