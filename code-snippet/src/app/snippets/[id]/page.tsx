import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 1000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) notFound();

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl font-semibold">{snippet.title}</h2>
        <div className="flex gap-2">
            <button className="border rounded p-2">Edit</button>
            <button className="border rounded p-2">Delete</button>
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
