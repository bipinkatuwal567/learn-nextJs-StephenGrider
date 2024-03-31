import { db } from "@/db/script"
import path from "@/helper"
import { Chip } from "@nextui-org/react"
import Link from "next/link"

export default async function TopicList(){
    const renderedList = (await db.topic.findMany()).map(topic => (
        <div key={topic.id}>
            <Link href={path.topicShowPath(topic.slug)}>
                <Chip variant="shadow" color="warning">
                    {topic.slug}
                </Chip>
            </Link>
        </div>
    ))

    return(
        <div className="flex flex-wrap gap-2">
            {renderedList}
        </div>
    )
}