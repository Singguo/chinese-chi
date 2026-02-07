import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Workshops",
};

export default async function WorkshopsPage() {
  const html = await readIchec25Html("workshops");
  return <Ichec25Html html={html} />;
}
