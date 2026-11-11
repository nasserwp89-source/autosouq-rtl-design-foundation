import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "الخدمة | AutoSouq" },
      { name: "description", content: "خدمة تسجيل السيارات الجديدة — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "الخدمة | AutoSouq" },
      { property: "og:description", content: "خدمة تسجيل السيارات الجديدة — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <PhasePlaceholder eyebrow="Zulassung" title="خدمة تسجيل السيارات الجديدة" />;
}
