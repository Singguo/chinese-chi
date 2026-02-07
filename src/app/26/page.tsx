import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyHomePage() {
  // TODO(2026): 更新首页年份、会议日期与地点、主题与报名入口。
  const html = await getLegacyMain(
    "home",
    "TODO(2026): 更新首页年份、会议日期/地点、主题文案、注册入口与重要日期清单。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
