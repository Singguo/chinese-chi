import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacySponsorshipPage() {
  // TODO(2026): 更新赞助方案、权益与联系方式。
  const html = await getLegacyMain(
    "sponsorship",
    "TODO(2026): 更新赞助等级/权益、价格与联系方式。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
