import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function Home() {
  return (
    <main className="container flex min-h-[calc(100vh-128px)] items-center justify-center">
      <div className="flex flex-col items-start gap-8">
        <Icons.nextjs className="w-44" />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="rounded-md bg-muted">app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="https://vercel.com/new?utm_source=codefoxjs-next&utm_medium=referral&utm_campaign=codefoxjs"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
        </div>
      </div>
    </main>
  );
}
