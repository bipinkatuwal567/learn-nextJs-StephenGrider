"use client";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/FormButton";
import * as actions from "@/actions/index";
import { useFormState } from "react-dom";

export default function CreatePostForm() {
  const [formState, action] = useFormState(actions.createPost, {
    error: {},
  });
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 px-3 py-4 w-80">
            <h2 className="text-base font-semibold">Create a post</h2>
            <Input
              isInvalid={!!formState.error.title?.join(", ")}
              errorMessage={formState.error.title}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Your title"
            />

            <Textarea
              isInvalid={!!formState.error.content?.join(", ")}
              errorMessage={formState.error.content}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Write you content here"
            />
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
