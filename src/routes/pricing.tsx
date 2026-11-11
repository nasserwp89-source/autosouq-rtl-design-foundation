import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "الأسعار | AutoSouq" },
      { name: "description", content: "الأسعار — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "الأسعار | AutoSouq" },
      { property: "og:description", content: "الأسعار — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return <PhasePlaceholder eyebrow="Preise" title="الأسعار" />;
}
