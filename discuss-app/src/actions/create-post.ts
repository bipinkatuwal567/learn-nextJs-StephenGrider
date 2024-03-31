"use server";

import { auth } from "@/auth";
import { db } from "@/db/script";
import path from "@/helper";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreatePostSchema = z.object({
  title: z.string().min(3).regex(/[a-z-]/),
  content: z.string().min(10),
});

interface CreatePostState {
  error: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostState,
  formData: FormData,
): Promise<CreatePostState> {
  const result = CreatePostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

    const session = await auth();
    if(!session || !session?.user){
      return {
          error: {
              _form: ["You must be Signed In to create a post"],
          }
      }
    }

    const topic = await db.topic.findFirst({
        where: {slug}
    });

    if(!topic){
        return{
            error: {
                _form: ['Cannot find topic']
            }
        }
    }

    let post: Post;
    try{
      post = await db.post.create({
          data: {
          title: result.data.title,
          content: result.data.content,
          userId: session.user.id,
          topicId: topic?.id
          }
      })
    }catch(err: unknown){
        if(err instanceof Error){
            return{
                error: {
                    _form: [err.message]
                }
            }
        }else{
            return{
                error: {
                    _form: ["Something went wrong"]
                }
            }
        }
    }

    revalidatePath(path.topicShowPath(slug));
    redirect(path.showPostPath(slug, post.id));
}
