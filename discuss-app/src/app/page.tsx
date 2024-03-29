import TopicCreateForm from "@/components/topics/topic-create-form";


export default async function Home() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full">
      <div className="col-span-3">
        <h2 className="text-xl mt-2">Top Posts</h2>
      </div>
      <div className="place-self-end">
        <TopicCreateForm />
      </div>
    </div>
  );
}
