import { createFileRoute } from "@tanstack/react-router";
import { PhasePlaceholder } from "@/components/site/PageShell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "إنشاء حساب | AutoSouq" },
      { name: "description", content: "ابدأ تسجيل سيارتك — AutoSouq، منصة خدمات السيارات الرقمية في ألمانيا." },
      { property: "og:title", content: "إنشاء حساب | AutoSouq" },
      { property: "og:description", content: "ابدأ تسجيل سيارتك — AutoSouq." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return <PhasePlaceholder eyebrow="Registrieren" title="ابدأ تسجيل سيارتك" />;
}
