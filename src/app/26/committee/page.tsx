import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyCommitteePage() {
  // TODO(2026): 更新委员会名单与角色分工。
  const html = await getLegacyMain(
    "committee",
    "TODO(2026): 更新主席/委员名单、职责分工与所属机构信息。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
