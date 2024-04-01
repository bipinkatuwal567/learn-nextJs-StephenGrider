import { Comment } from "@prisma/client";
import { db } from "../script";

export type commentWithAuthor = Comment & {
    user: {
        name: string | null,
        image: string | null,
    }
}

export async function fetchCommentsByPostId(postId: string): Promise<commentWithAuthor[]>{
    return await db.comment.findMany({
        where: {postId},
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                }
            }
        }
    })
}