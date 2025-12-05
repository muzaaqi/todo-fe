"use client";
import { usePathname } from "next/dist/client/components/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginButton = () => {
  const path = usePathname();
  return (
    <Link href={path === "/login" ? "/register" : "/login"}>
      <Button className="text-primary-foreground flex h-14 items-center justify-center rounded-full px-10 text-xl font-semibold">
        {path === "/login" ? "Sign Up" : "Login"}
      </Button>
    </Link>
  );
};

export default LoginButton;
