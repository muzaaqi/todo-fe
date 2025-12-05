import Link from "next/link";
import LoginButton from "./login-button";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4">
      <div className="mx-auto flex items-center justify-between">
        <div className="bg-primary flex h-14 items-center rounded-full px-8">
          <Link href="/">
            <h1 className="text-primary-foreground text-3xl font-bold">
              MUDO
            </h1>
          </Link>
        </div>

        <div className="flex gap-2">
          <LoginButton />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
