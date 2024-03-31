import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";


export default async function Home() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full">
      <div className="col-span-3">
        <h2 className="text-xl mt-2">Top Posts</h2>
      </div>
      <div className="place-self-end border p-4">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h2 className="text-lg font-semibold my-2">Topics</h2>
        <TopicList />
      </div>
    </div>
  );
}
