import ReactPDFViewer from "@/components/ReactPDFViewer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "file-sample_150kB",
};

const Page = () => {
  return (
    <div>
      <ReactPDFViewer url={"/docs/file-sample_150kB.pdf"} />
    </div>
  );
};

export default Page;
