import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة | AutoSouq" },
      { name: "description", content: "الأسئلة الشائعة — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "الأسئلة الشائعة | AutoSouq" },
      { property: "og:description", content: "الأسئلة الشائعة — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return <PhasePlaceholder eyebrow="FAQ" title="الأسئلة الشائعة" />;
}
