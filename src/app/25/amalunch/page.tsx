import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "AMA Lunch",
};

export default async function AmaLunchPage() {
  const html = await readIchec25Html("amalunch");
  return <Ichec25Html html={html} />;
}
