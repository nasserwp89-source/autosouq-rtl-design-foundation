import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageIntro, Section } from "@/components/site/PageShell";
import { StatusBadge } from "@/components/site/StatusBadge";
import { Ltr } from "@/components/site/Ltr";

// Phase 1 only: this route shows the design foundation for review.
// It will be replaced by the real homepage in the next phase.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoSouq — الأساس البصري (المرحلة الأولى)" },
      { name: "description", content: "مراجعة نظام التصميم والهوية البصرية لمنصة AutoSouq." },
      { property: "og:title", content: "AutoSouq — الأساس البصري" },
      { property: "og:description", content: "نظام التصميم والهوية البصرية لمنصة AutoSouq." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Foundation,
});

const swatches = [
  { name: "Onyx", ar: "أونيكس", hex: "#100F0D", cls: "bg-onyx", note: "أساسي · 60%" },
  { name: "Ivory", ar: "عاجي", hex: "#EFE9DC", cls: "bg-ivory", note: "أسطح فاتحة · 30%" },
  { name: "White", ar: "أبيض", hex: "#FFFFFF", cls: "bg-white", note: "أسطح بيضاء" },
  { name: "Brass", ar: "نحاسي", hex: "#C79A4B", cls: "bg-brass", note: "إبراز · 10%" },
  { name: "Dark Bronze", ar: "برونزي داكن", hex: "#3A2E14", cls: "bg-bronze", note: "داكن مساند" },
  { name: "Tobacco", ar: "تبغي", hex: "#8A6E36", cls: "bg-tobacco", note: "لون إضافي" },
];

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t py-12 first:border-t-0 lg:grid-cols-[220px_1fr]">
      <div>
        <p className="eyebrow mb-2"><Ltr>{n}</Ltr></p>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function Foundation() {
  return (
    <>
      <PageIntro
        eyebrow="Phase 01 · Design Foundation"
        title={<>الأساس البصري لمنصة <Ltr className="font-display-latin">AutoSouq</Ltr></>}
        lead="هذه صفحة مراجعة مؤقتة تعرض نظام التصميم: الألوان، الخطوط، والمكونات الأساسية. ستُستبدل بالصفحة الرئيسية في المرحلة التالية."
      />

      <Section>
        <Block n="01" title="الألوان">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {swatches.map((s) => (
              <div key={s.hex} className="overflow-hidden rounded-lg border">
                <div className={`h-24 ${s.cls}`} />
                <div className="space-y-0.5 p-3 text-sm">
                   <p className="font-semibold">{s.ar} <Ltr className="text-muted-foreground">· {s.name}</Ltr></p>
                   <p className="text-sm text-muted-foreground"><Ltr>{s.hex}</Ltr></p>
                   <p className="text-sm text-muted-foreground">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            قواعد: لا نحاسي على خلفية فاتحة، لا عاجي على نحاسي، لا أسود على أسود. على الأسطح الفاتحة يتحول الزر الأساسي تلقائياً إلى أونيكس.
          </p>
        </Block>

        <Block n="02" title="الخطوط">
          <div className="grid gap-4 md:grid-cols-3">
            <Card><CardContent className="space-y-2 p-6">
               <p className="eyebrow ltr-value" lang="en">Arabic · El Messiri</p>
              <p className="text-4xl font-bold">المسيري</p>
              <p className="text-sm text-muted-foreground">جميع النصوص العربية · 400 / 600 / 700</p>
            </CardContent></Card>
            <Card><CardContent className="space-y-2 p-6">
               <p className="eyebrow ltr-value" lang="en">Display · Fraunces</p>
              <p className="font-display-latin text-4xl font-semibold" dir="ltr">AutoSouq</p>
              <p className="text-sm text-muted-foreground">العناوين اللاتينية</p>
            </CardContent></Card>
            <Card><CardContent className="space-y-2 p-6">
               <p className="eyebrow ltr-value" lang="en">Text · Hanken Grotesk</p>
               <p className="ltr-value block text-2xl" lang="de">Wir übernehmen die Zulassung</p>
              <p className="text-sm text-muted-foreground">النصوص الألمانية والإنجليزية</p>
            </CardContent></Card>
          </div>
          <div className="mt-8 space-y-3">
             <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">سجّل سيارتك الجديدة في ألمانيا بثقة</p>
            <p className="text-2xl font-semibold">عنوان فرعي — المستوى الثاني</p>
            <p className="max-w-2xl text-muted-foreground">
              نص فقرة: نتولى إدارة طلب التسجيل ومتابعته، بهدوء ووضوح في السعر والوقت. القيم اللاتينية تبقى بترتيبها الصحيح: <Ltr>DE89 3704 0044 0532 0130 00</Ltr> · <Ltr>WVWZZZ1JZXW000001</Ltr>.
            </p>
          </div>
        </Block>

        <Block n="03" title="الأزرار">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">ابدأ تسجيل سيارتك <ArrowLeft /></Button>
            <Button variant="outline" size="lg">كيف تعمل الخدمة؟</Button>
            <Button variant="ghost">تسجيل الدخول</Button>
            <Button variant="link">رابط نصي</Button>
            <Button disabled>غير متاح في هذا النموذج</Button>
          </div>
        </Block>

        <Block n="04" title="حالات الطلب">
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="paid" />
            <StatusBadge status="docs" />
            <StatusBadge status="progress" />
            <StatusBadge status="done" />
          </div>
        </Block>
      </Section>

      <Section tone="light">
        <Block n="05" title="البطاقات والنماذج على السطح الفاتح">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>بيانات صاحب السيارة</CardTitle>
                <CardDescription>مثال لأسلوب الحقول — بيانات تجريبية.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="n">الاسم الكامل</Label>
                  <Input id="n" placeholder="مثال: أحمد محمد" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="e">البريد الإلكتروني</Label>
                  <Input id="e" type="email" dir="ltr" className="ltr-value text-start" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                   <Label htmlFor="i"><Ltr>IBAN</Ltr></Label>
                   <Input id="i" dir="ltr" className="ltr-value text-start" placeholder="DE00 0000 0000 0000 0000 00" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="phone">رقم الهاتف</Label>
                   <Input id="phone" type="tel" dir="ltr" className="ltr-value text-start" placeholder="+49 000 000 000" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="vin">رقم الهيكل <Ltr>VIN</Ltr></Label>
                   <Input id="vin" dir="ltr" className="ltr-value text-start" placeholder="WVWZZZ1JZXW000001" />
                </div>
                <Button className="w-full">متابعة</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>أتعاب المنصة</CardTitle>
                  <CardDescription>مثال لبطاقة تفصيل السعر.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                   <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3"><span className="min-w-0">أتعاب المنصة (شامل <Ltr>VAT</Ltr>)</span><Ltr className="shrink-0 font-semibold">€70</Ltr></div>
                   <div className="grid grid-cols-2 items-start gap-3 text-muted-foreground"><span className="min-w-0">رسوم دائرة التسجيل</span><span className="min-w-0 text-end">غير مشمولة · تُدفع للدائرة</span></div>
                </CardContent>
              </Card>
              <Card className="border-dashed">
                <CardContent className="flex items-center gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted"><Upload className="size-5" /></span>
                  <div className="min-w-0">
                    <p className="font-semibold">رفع مستند</p>
                    <p className="text-sm text-muted-foreground">مستند تجريبي — يحتاج اعتماد المالك</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Block>
      </Section>
    </>
  );
}
