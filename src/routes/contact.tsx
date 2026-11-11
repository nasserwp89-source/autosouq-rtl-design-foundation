import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | AutoSouq" },
      { name: "description", content: "تواصل معنا — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "تواصل معنا | AutoSouq" },
      { property: "og:description", content: "تواصل معنا — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <PhasePlaceholder eyebrow="Kontakt" title="تواصل معنا" />;
}
