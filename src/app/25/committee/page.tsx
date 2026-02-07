import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Committee",
};

export default async function CommitteePage() {
  const html = await readIchec25Html("committee");
  return <Ichec25Html html={html} />;
}
