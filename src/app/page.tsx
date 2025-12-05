import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="grid justify-items-center">
          <span className="bg-primary w-fit px-4 py-1 rounded-full text-primary-foreground">mudo.muzaaqi.my.id</span>
          <h1 className="text-primary font-sans text-9xl font-bold">MUDO</h1>
          <h2 className="text-secondary-foreground text-2xl tracking-widest">
            record your tasks, effortlessly
          </h2>
        </div>
        <Button className="w-fit">Get Started</Button>
      </div>
    </div>
  );
}
