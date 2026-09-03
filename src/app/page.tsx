import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className={`flex items-center w-full min-h-screen px-6 justify-center`}
      >
        <div className="max-w-xl w-full space-y-6">
          <div className="mx-auto">
            <h1 className="text-4xl font-semibold tracking-tight">
              Waldy (Le Thanh Hieu)
            </h1>
            <div className="text-base mt-5 space-y-1.5 leading-relaxed">
              <p className="text-primary-foreground">
                Software Engineer focusing and building things I like.
              </p>
              <p className="text-muted-foreground">
                Welcome to my personal workspace and digital garden.
              </p>
            </div>
            <Button className={`mt-5 text-base`}>
              <Link href={"/about"}>
                <p className="">Let's understand me a bit further?</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
