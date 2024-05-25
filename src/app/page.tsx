import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>React PDF Viewer</h2>
      <ul>
        <li>
          <Link href={`/react-pdf-viewer/example_1`}>Link 1</Link>
        </li>
        <li>
          <Link href={`/react-pdf-viewer/example_2`}>Link 2</Link>
        </li>
        <li>
          <Link href={`/react-pdf-viewer/example_3`}>Link 3</Link>
        </li>
      </ul>

      <h2>React PDF</h2>
      <ul>
        <li>
          <Link href={`/react-pdf/example_1`}>Link 1</Link>
        </li>
        <li>
          <Link href={`/react-pdf/example_2`}>Link 2</Link>
        </li>
        <li>
          <Link href={`/react-pdf/example_3`}>Link 3</Link>
        </li>
      </ul>
    </main>
  );
}
