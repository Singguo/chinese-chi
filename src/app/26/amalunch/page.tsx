import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyAmaLunchPage() {
  // TODO(2026): 更新 AMA Lunch 时间、地点与报名方式。
  const html = await getLegacyMain(
    "amalunch",
    "TODO(2026): 更新 AMA Lunch 日期/时间/地点、报名入口与参与说明。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
