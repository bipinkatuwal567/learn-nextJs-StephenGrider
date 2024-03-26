import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippet = snippets.map((snippet) => {
    return(
      <div key={snippet.id}>
        <Link href={`/snippets/${snippet.id}`} className="flex items-center justify-between gap-4 border rounded p-2">
          <div>{snippet.title}</div>
          <div>View</div>
        </Link>
      </div>
    )
  })
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-xl font-semibold">Snippets</h2>
        <Link href="/snippets/new" className="border rounded p-2">New</Link>
      </div>
      <div className="flex flex-col gap-2">
      {renderedSnippet}
      </div>
    </div>
  );
}
