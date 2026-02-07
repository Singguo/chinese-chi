import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Attend",
};

export default async function AttendPage() {
  const html = await readIchec25Html("attend");
  return <Ichec25Html html={html} />;
}
