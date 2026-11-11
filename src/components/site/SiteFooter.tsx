import { audiences, demoContact, legalNav, mainNav } from "@/lib/site-nav";
import { Logo } from "./Logo";
import { Ltr } from "./Ltr";

const heading = "mb-3 text-base font-semibold text-brass";
const link = "inline-flex min-h-11 items-center break-words text-foreground/70 transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="brass-rule opacity-50" />
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            منصة خدمات سيارات رقمية في ألمانيا. الخدمة المتاحة حالياً: تسجيل السيارات الجديدة.
          </p>
        </div>

        <div>
          <h2 className={heading}>الصفحات</h2>
          <ul className="space-y-1 text-sm">
            {mainNav.slice(1).map((i) => (
              <li key={i.to}><a href={i.to === "/" ? "/" : `/#${i.to.slice(1)}`} className={link}>{i.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>لمن نقدم خدماتنا</h2>
          <ul className="space-y-1 text-sm">
            {audiences.map((a) => (
              <li key={a.label} className="flex min-h-11 items-center gap-2">
                {a.active ? (
                  <a href="/service" className={link}>{a.label}</a>
                ) : (
                  <>
                    <span className="text-foreground/50">{a.label}</span>
                    <span className="shrink-0 rounded border border-border px-2 py-0.5 text-sm text-muted-foreground">لاحقاً</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>تواصل معنا</h2>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            <li><a className={link} href={`mailto:${demoContact.email}`}><Ltr>{demoContact.email}</Ltr></a></li>
            <li><Ltr>{demoContact.phone}</Ltr></li>
          </ul>
          <p className="mt-3 inline-block rounded border border-status-docs/40 px-2 py-0.5 text-sm text-status-docs">
            بيانات تواصل تجريبية
          </p>
        </div>
      </div>

      <div className="border-t">
        <div className="container-site flex flex-col gap-3 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© <Ltr>2026 AutoSouq</Ltr> — نموذج أولي تجريبي، جميع البيانات للعرض فقط.</p>
          <ul className="flex gap-5">
            {legalNav.map((i) => (
              <li key={i.to}><a href={i.to === "/" ? "/" : `/#${i.to.slice(1)}`} className={link}>{i.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
