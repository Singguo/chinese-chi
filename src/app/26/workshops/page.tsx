import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyWorkshopsPage() {
  // TODO(2026): 更新工作坊列表、组织者与报名信息。
  const html = await getLegacyMain(
    "workshops",
    "TODO(2026): 更新工作坊清单、时间安排、组织者与报名/投稿信息。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
