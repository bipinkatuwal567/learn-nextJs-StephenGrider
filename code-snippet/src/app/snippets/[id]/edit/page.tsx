import SnippetEditForm from "@/components/snippet-edit-page";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if(!snippet) notFound();

  return <div>
    <SnippetEditForm snippet={snippet} />
  </div>;
}
