"use client";

import * as actions from "@/actions/index";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    error: {},
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary" variant="shadow">
          Create a topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h2 className="text-base font-medium">Create a topic</h2>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.error.name}
              errorMessage={formState.error.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your  topic"
              isInvalid={!!formState.error.description}
              errorMessage={formState.error.description?.join(", ")}
            />
            {formState.error._form && (
              <div className="text-xs text-red-500">
                {formState.error._form.join(", ")}
              </div>
            )}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
