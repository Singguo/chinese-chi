import { readFile } from "node:fs/promises";
import path from "node:path";

const ICHEC25_ORIGIN = "https://ichec.icachi.org/25";
const ICHEC_ORIGIN = "https://ichec.icachi.org";

function rewriteIchec25Html(html: string): string {
  let output = html;

  output = output.replace(/href=(["'])\.\/index\.html\1/g, 'href="/25/"');
  output = output.replace(/href=(["'])index\.html\1/g, 'href="/25/"');

  output = output.replace(/(href|src)=(["'])\.\//g, `$1=$2${ICHEC25_ORIGIN}/`);
  output = output.replace(/(["'])\.\/assets\//g, `$1${ICHEC25_ORIGIN}/assets/`);
  output = output.replace(/(["'])\/assets\//g, `$1${ICHEC25_ORIGIN}/assets/`);
  output = output.replace(/url\((['"]?)\/assets\//g, `url($1${ICHEC25_ORIGIN}/assets/`);
  output = output.replace(/url\((['"]?)\.\/assets\//g, `url($1${ICHEC25_ORIGIN}/assets/`);

  output = output.replace(/(["'])\/cdn-cgi\//g, `$1${ICHEC_ORIGIN}/cdn-cgi/`);
  output = output.replace(/(href|src)=(["'])\/(23|24)\//g, `$1=$2${ICHEC_ORIGIN}/$3/`);
  output = output.replace(/href=(["'])\/news\//g, `href=$1${ICHEC_ORIGIN}/news/`);
  output = output.replace(/href=(["'])\/\1/g, `href=$1${ICHEC_ORIGIN}/$1`);

  return output;
}

export async function readIchec25Html(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "ichec-25", `${slug}.html`);
  const html = await readFile(filePath, "utf8");
  return rewriteIchec25Html(html);
}
