import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/helper";
import { db } from "@/db/script";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  const comments = await db.post.findMany({
    select: {comments: true}
  })

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShowPath(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      {/* <CommentList comments={comments} /> */}
    </div>
  );
}
