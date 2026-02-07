import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Call for Papers",
};

export default async function CallForPapersPage() {
  const html = await readIchec25Html("callforpapers");
  return <Ichec25Html html={html} />;
}
