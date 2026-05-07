import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserButton() {
  return (
    <Button asChild className="">
      <Link href="sign-in">
        <UserIcon />
        sign in
      </Link>
    </Button>
  );
}

export default UserButton;
