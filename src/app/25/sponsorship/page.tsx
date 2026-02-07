import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Sponsorship",
};

export default async function SponsorshipPage() {
  const html = await readIchec25Html("sponsorship");
  return <Ichec25Html html={html} />;
}
