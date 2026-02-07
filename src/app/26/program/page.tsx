import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyProgramPage() {
  // TODO(2026): 更新大会日程、分会场安排与时间表。
  const html = await getLegacyMain(
    "program",
    "TODO(2026): 更新大会日程表、会议时间/地点、keynote 与分会安排。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
