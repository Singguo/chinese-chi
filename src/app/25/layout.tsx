import type { Metadata } from "next";
import { Ichec25Html } from "@/components/Ichec25Html";
import { Ichec25Scripts } from "@/components/Ichec25Scripts";
import { readIchec25Html } from "@/lib/ichec25-content";

export const metadata: Metadata = {
  title: {
    default: "ICHEC 2025 | Chinese CHI",
    template: "%s | Chinese CHI",
  },
  description: "ICACHI 世界华人华侨人机交互协会",
};

export default async function Ichec25Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = await readIchec25Html("header");
  const footer = await readIchec25Html("footer");

  return (
    <>
      <Ichec25Html html={header} />
      {children}
      <Ichec25Html html={footer} />
      <Ichec25Scripts />
    </>
  );
}
