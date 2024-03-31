import CreatePostForm from "@/components/post/create-post-form";

interface TopicShowPageProps{
    params: {
        slug: string,
    }
}

export default function TopicShowPage({params}: TopicShowPageProps) {
    const {slug} = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full">
      <div className="col-span-3">
        <h2 className="text-xl mb-2 font-semibold">{slug}</h2>
      </div>
      <div className="place-self-end border p-4">
        <CreatePostForm slug={slug} />
      </div>
    </div>
  );
}
