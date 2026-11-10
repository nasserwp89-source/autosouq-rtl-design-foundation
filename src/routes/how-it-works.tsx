import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "طريقة العمل | AutoSouq" },
      { name: "description", content: "كيف تعمل الخدمة — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "طريقة العمل | AutoSouq" },
      { property: "og:description", content: "كيف تعمل الخدمة — AutoSouq." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return <PhasePlaceholder eyebrow="So funktioniert's" title="كيف تعمل الخدمة" />;
}
