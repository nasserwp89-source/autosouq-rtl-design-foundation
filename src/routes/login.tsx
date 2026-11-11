import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "تسجيل الدخول | AutoSouq" },
      { name: "description", content: "تسجيل الدخول — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "تسجيل الدخول | AutoSouq" },
      { property: "og:description", content: "تسجيل الدخول — AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return <PhasePlaceholder eyebrow="Anmelden" title="تسجيل الدخول" />;
}
