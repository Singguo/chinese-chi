const LEGACY_BASE_URL = "https://ichec.icachi.org/25";

const LEGACY_PAGE_PATHS = {
  home: "",
  callforpapers: "callforpapers/",
  attend: "attend/",
  program: "program/",
  workshops: "workshops/",
  amalunch: "amalunch/",
  committee: "committee/",
  sponsorship: "sponsorship/",
} as const;

export type LegacyPageKey = keyof typeof LEGACY_PAGE_PATHS;

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
  const path = LEGACY_PAGE_PATHS[page];
  const url = `${LEGACY_BASE_URL}/${path}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "text/html",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Legacy page fetch failed: ${response.status}`);
    }

    const html = await response.text();
    const main = extractMain(html);
    const rewritten = rewriteLegacyLinks(main);
    return prependTodoComment(rewritten, todoComment);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error while fetching legacy HTML.";
    return `<section class="container space-2"><div class="alert alert-soft-primary" role="alert">Unable to load ICHEC 2025 content. ${message}</div></section>`;
  }
}
