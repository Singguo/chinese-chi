"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type LayoutShellProps = {
  children: ReactNode;
  hasSupabase: boolean;
};

export function LayoutShell({ children, hasSupabase }: LayoutShellProps) {
  const pathname = usePathname();
  const isIchec25 = pathname?.startsWith("/25");

  if (isIchec25) {
    return <div className="ichec-25-root">{children}</div>;
  }

  return (
    <div className="min-h-dvh flex flex-col font-mono">
      <header className="border-b-2 border-dashed border-neutral-300 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Chinese CHI 2026 <span className="text-xs font-normal text-neutral-500">(Draft)</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-neutral-700">
            <Link className="hover:underline hover:decoration-wavy" href="/about">
              About
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/important-dates">
              Important Dates
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/cfp">
              CFP
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/keynotes">
              Keynotes
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/program">
              Program
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/registration">
              Registration
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/venue">
              Venue
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/committees">
              Committees
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/sponsors">
              Sponsors
            </Link>
            <Link className="hover:underline hover:decoration-wavy" href="/news">
              News
            </Link>
            <span className="mx-1 hidden h-4 w-px bg-neutral-300 sm:inline" />
            <button className="text-xs border border-dashed border-neutral-400 px-2 py-0.5 rounded hover:bg-neutral-100">
              EN/CN
            </button>
            <span className="mx-1 hidden h-4 w-px bg-neutral-300 sm:inline" />
            {hasSupabase ? (
              <>
                <Link className="hover:underline hover:decoration-wavy" href="/dashboard">
                  Portal
                </Link>
                <Link className="hover:underline hover:decoration-wavy" href="/auth">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                <span className="cursor-not-allowed text-neutral-400" title="Missing Supabase env">
                  Portal
                </span>
                <span className="cursor-not-allowed text-neutral-400" title="Missing Supabase env">
                  Sign in
                </span>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 border-x-2 border-dashed border-neutral-200 px-6 py-10 bg-white">
        {children}
      </main>
      <footer className="border-t-2 border-dashed border-neutral-300 bg-neutral-50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-500">
          <p>&copy; 2026 Chinese CHI. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
