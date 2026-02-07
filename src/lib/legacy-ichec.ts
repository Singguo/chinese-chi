import { readFile } from "node:fs/promises";
import path from "node:path";

const LEGACY_PAGE_FILES = {
  home: "home.html",
  callforpapers: "callforpapers.html",
  attend: "attend.html",
  program: "program.html",
  workshops: "workshops.html",
  amalunch: "amalunch.html",
  committee: "committee.html",
  sponsorship: "sponsorship.html",
} as const;

export type LegacyPageKey = keyof typeof LEGACY_PAGE_FILES;

function extractMain(html: string): string {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) return html;
  return match[1] ?? html;
}

function rewriteLegacyLinks(html: string): string {
  return html
    .replaceAll(
      "position-relative bg-primary overflow-hidden",
      "position-relative bg-primary overflow-hidden hero-green-overlay",
    )
    .replaceAll(
      "position-relative overflow-hidden text-center text-white",
      "position-relative overflow-hidden text-center text-white hero-green-overlay",
    )
    .replaceAll('href="/25/', 'href="/26/')
    .replaceAll('href="/25"', 'href="/26"')
    .replaceAll("href='/25/", "href='/26/")
    .replaceAll("href='/25'", "href='/26'")
    .replaceAll('src="/assets/', 'src="https://ichec.icachi.org/assets/')
    .replaceAll('href="/assets/', 'href="https://ichec.icachi.org/assets/')
    .replaceAll("src='/assets/", "src='https://ichec.icachi.org/assets/")
    .replaceAll("href='/assets/", "href='https://ichec.icachi.org/assets/")
    .replaceAll("url('/assets/", "url('https://ichec.icachi.org/assets/")
    .replaceAll('url("/assets/', 'url("https://ichec.icachi.org/assets/')
    .replaceAll('href="/cdn-cgi/', 'href="https://ichec.icachi.org/cdn-cgi/')
    .replaceAll('src="/cdn-cgi/', 'src="https://ichec.icachi.org/cdn-cgi/')
    .replaceAll("href='/cdn-cgi/", "href='https://ichec.icachi.org/cdn-cgi/")
    .replaceAll("src='/cdn-cgi/", "src='https://ichec.icachi.org/cdn-cgi/");
}

function prependTodoComment(html: string, todoComment?: string): string {
  if (!todoComment) return html;
  return `<!-- ${todoComment} -->\n${html}`;
}

export async function getLegacyMain(page: LegacyPageKey, todoComment?: string): Promise<string> {
  const fileName = LEGACY_PAGE_FILES[page];
  const filePath = path.join(process.cwd(), "content", "legacy-25", fileName);

  try {
    const html = await readFile(filePath, "utf8");
    const main = extractMain(html);
    const rewritten = rewriteLegacyLinks(main);
    return prependTodoComment(rewritten, todoComment);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error while reading legacy HTML.";
    return `<section class="container space-2"><div class="alert alert-soft-primary" role="alert">Unable to load local ICHEC 2025 content. ${message}</div></section>`;
  }
}
