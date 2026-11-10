import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية | AutoSouq" },
      { name: "description", content: "سياسة الخصوصية — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "سياسة الخصوصية | AutoSouq" },
      { property: "og:description", content: "سياسة الخصوصية — AutoSouq." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <PhasePlaceholder eyebrow="Datenschutz" title="سياسة الخصوصية" />;
}
