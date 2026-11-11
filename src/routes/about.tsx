import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | AutoSouq" },
      { name: "description", content: "من نحن — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "من نحن | AutoSouq" },
      { property: "og:description", content: "من نحن — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <PhasePlaceholder eyebrow="Über uns" title="من نحن" />;
}
