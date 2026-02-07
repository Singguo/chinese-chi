import { getLegacyMain } from "@/lib/legacy-ichec";

export default async function LegacyAttendPage() {
  // TODO(2026): 更新注册费用、地点交通与酒店信息。
  const html = await getLegacyMain(
    "attend",
    "TODO(2026): 更新注册费用与政策、会场/交通/住宿信息、参会指引链接。",
  );
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
