import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: "Program",
};

export default async function ProgramPage() {
  const html = await readIchec25Html("program");
  return <Ichec25Html html={html} />;
}
