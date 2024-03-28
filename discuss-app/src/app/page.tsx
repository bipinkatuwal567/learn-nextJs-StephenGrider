import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex gap-3">
        <form action={actions.signIn}>
          <Button type="submit">Sign In</Button>
        </form>

        <form action={actions.signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>

      <div>
        <Profile />
      </div>
    </div>
  );
}
