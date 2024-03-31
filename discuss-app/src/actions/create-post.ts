"use server";

import { auth } from "@/auth";
import { db } from "@/db/script";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreatePostSchema = z.object({
  title: z.string().min(3).regex(/a-z-/),
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
  formState: CreatePostState,
  formData: FormData
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

  //   const session = await auth();
  //   if(!session || !session?.user){
  //     return {
  //         error: {
  //             _form: ["User must be Signed In to create a post"],
  //         }
  //     }
  //   }

  //   let post: Post;
  //   try{
  //     post = await db.post.create({
  //         data: {
  //         title: result.data.title,
  //         content: result.data.content,
  //         }
  //     })
  //   }catch(err: unknown){

  //   }

  //   revalidatePath("");
  //   redirect("");

  return {
    error: {},
  };
}
