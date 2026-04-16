"use client";

"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="p-10">
      {session ? (
        <div>Signed in as {session.user?.name}</div>
      ) : (
        <div>Not Signed in</div>
      )}

      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      )}
    </div>
  );
}
