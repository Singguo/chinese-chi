import { Ichec25Html } from "@/components/Ichec25Html";
import { readIchec25Html } from "@/lib/ichec25-content";

export default async function Ichec25HomePage() {
  const html = await readIchec25Html("home");
  return <Ichec25Html html={html} />;
}
