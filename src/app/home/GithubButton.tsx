"use client";
import { signIn } from "next-auth/react";
import Button from "../ui/Button/Button";
import GithubIcon from "../ui/Icon/GithubIcon";

export default function GithubButton() {
  return (
    <Button
      className="z-10"
      colorVariant="github"
      sizeVariant="lg"
      icon={<GithubIcon />}
      onClick={() => signIn("github")}
    >
      Sign in with GitHub
    </Button>
  );
}
