import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const id = parseInt(props.params.id);

  await new Promise((r) => setTimeout(r, 1000));
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  if (!snippet) notFound();

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl font-semibold">{snippet.title}</h2>
        <div className="flex gap-2">
            <Link href={`/snippets/${snippet.id}/edit`} className="border rounded p-2">Edit</Link>
            <form action={deleteSnippetAction}>
            <button className="border rounded p-2">Delete</button>
            </form>
        </div>
      </div>
      <div className="p-3 rounded border bg-gray-200 border-gray-200">
        <pre>
            <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

export async function generateStaticParams(){
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return{
      id: snippet.id.toString(),
    }
  })
}
