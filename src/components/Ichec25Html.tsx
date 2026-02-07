import type { ReactElement } from "react";

export function Ichec25Html({ html }: { html: string }): ReactElement {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
