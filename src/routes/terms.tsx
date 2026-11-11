import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "الشروط والأحكام | AutoSouq" },
      { name: "description", content: "الشروط والأحكام — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "الشروط والأحكام | AutoSouq" },
      { property: "og:description", content: "الشروط والأحكام — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <PhasePlaceholder eyebrow="AGB" title="الشروط والأحكام" />;
}
