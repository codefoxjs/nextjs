import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { Icons } from "../shared/icons";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border py-4 md:h-16 md:py-0">
      <div className="container flex h-full flex-col gap-4 md:grid md:grid-cols-3 md:items-center">
        {/* Links - Top on mobile, middle on desktop */}
        <div className="order-1 flex flex-wrap items-center justify-center gap-2 md:order-none">
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://www.codefoxjs.com?utm_source=app-preview&utm_medium=referral&utm_campaign=codefox-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Templates
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </Link>
        </div>

        {/* Logo and Copyright - Bottom row on mobile, split on desktop */}
        <div className="order-2 flex items-center justify-between md:order-none md:col-span-2 md:contents">
          <div className="md:col-start-1 md:row-start-1">
            <Icons.nextjs className="size-16" />
          </div>
          <p className="text-sm text-muted-foreground md:col-start-3 md:row-start-1 md:justify-self-end">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://www.codefoxjs.com">CodeFoxJS</Link>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
