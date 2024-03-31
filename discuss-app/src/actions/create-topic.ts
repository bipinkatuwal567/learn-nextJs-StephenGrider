"use server";

import { auth } from "@/auth";
import { db } from "@/db/script";
import path from "@/helper";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreateTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/a-z-/, {
      message: "Name must be lowercase letter with dash and no any space",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  error: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const result = CreateTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      error: {
        _form: ["You must be signed in to create a form!"],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: {
          _form: [err.message],
        },
      };
    } else {
      return {
        error: {
          _form: ["Something went wrong!"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(path.topicShowPath(topic.slug));
}
