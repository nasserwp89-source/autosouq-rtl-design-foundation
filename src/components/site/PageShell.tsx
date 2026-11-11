import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Standard page intro band used at the top of every inner page. */
export function PageIntro({ eyebrow, title, lead }: { eyebrow?: string; title: ReactNode; lead?: string }) {
  return (
    <section className="border-b" style={{ background: "var(--gradient-onyx)" }}>
      <div className="container-site py-14 md:py-20">
        {eyebrow && <p className="eyebrow ltr-value mb-4" lang="en">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{lead}</p>}
      </div>
    </section>
  );
}

/** Content section. tone="light" switches to the Ivory surface. */
export function Section({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <section className={cn(tone === "light" && "surface-light", "py-14 md:py-20", className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

/** Placeholder for pages scheduled for a later phase. */
export function PhasePlaceholder({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} />
      <Section>
        <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground md:p-12">
          محتوى هذه الصفحة سيُبنى في مرحلة لاحقة بعد اعتماد الأساس البصري.
        </div>
      </Section>
    </>
  );
}
