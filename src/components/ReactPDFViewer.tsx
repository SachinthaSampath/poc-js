"use client";

// Core viewer
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const ReactPDFViewer = ({ url }: { url: string }) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={url}
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
};

export default ReactPDFViewer;
