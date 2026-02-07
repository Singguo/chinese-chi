import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyCallForPapersPage() {
  // TODO(2026): 更新投稿入口、征稿主题、截止日期与格式要求。
  const html = await getLegacyMain(
    "callforpapers",
    "TODO(2026): 更新征稿入口、投稿主题与范围、重要日期/DDL、模板链接与审稿说明。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
