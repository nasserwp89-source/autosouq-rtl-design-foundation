import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Building2, CarFront, Check, Clock3, FileCheck2, Headset, ShieldCheck, Users, WalletCards, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ltr } from "@/components/site/Ltr";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "الخدمات | AutoSouq" },
      { name: "description", content: "اكتشف خدمات AutoSouq للأفراد وتجار السيارات والشركات في ألمانيا." },
      { property: "og:title", content: "الخدمات | AutoSouq" },
      { property: "og:description", content: "حلول تسجيل السيارات الجديدة للأفراد وتجار السيارات والشركات." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const audiences = [
  { id: "individuals", number: "01", title: "الأفراد", subtitle: "سجّل سيارتك الجديدة بسهولة ووضوح", description: "نرافقك في رحلة تسجيل سيارتك الجديدة في ألمانيا، من إدخال البيانات وإرفاق المستندات إلى متابعة الطلب واستلام المستندات النهائية بعد اكتماله واعتماده.", icon: Users, tag: "الخدمة المتاحة في النموذج", features: ["تقديم الطلب رقمياً ضمن خطوات واضحة", "معرفة أتعاب المنصة والرسوم الحكومية بشكل منفصل", "متابعة حالة الطلب ومعرفة ما يلزم استكماله", "الوصول إلى المستندات النهائية بعد اعتماد الطلب"], action: "ابدأ تسجيل سيارتك", href: "/register", active: true },
  { id: "dealers", number: "02", title: "تجار السيارات", subtitle: "إدارة طلبات التسجيل ضمن سير عمل منظم", description: "باقات مخصصة لمعارض وتجار السيارات تساعد على تنظيم طلبات تسجيل المركبات ومتابعتها والرجوع إلى سجل الطلبات والفواتير.", icon: CarFront, tag: "باقات التجار", features: ["إدارة طلبات التسجيل وسجلها", "متابعة الحالات والمستندات والفواتير", "إمكانية إدخال عدة سيارات دفعة واحدة ضمن Business", "ملخصات وتقارير شهرية بحسب الباقة"], action: "استفسر عن باقات التجار", href: "/contact", active: false },
  { id: "companies", number: "03", title: "الشركات", subtitle: "خدمة تسجيل تناسب احتياجات الشركات", description: "مسار مخصص للشركات التي ترغب في الاستفادة من خدمة تسجيل السيارات الجديدة من خلال حساب شركة واحد ورسوم خدمة واضحة لكل تسجيل.", icon: Building2, tag: "خدمات الشركات", features: ["حساب شركة واحد", "رسوم خدمة محددة لكل عملية تسجيل", "فصل رسوم الخدمة عن أي رسوم حكومية", "متابعة الطلبات المرتبطة بالشركة"], action: "تواصل معنا", href: "/contact", active: false },
];

function ServicesPage() {
  return <main className="overflow-hidden">
    <section className="relative isolate border-b border-border">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_18%,oklch(0.308_0.044_84.9_/_42%),transparent_48%),linear-gradient(135deg,oklch(0.19_0.008_84),var(--onyx)_68%)]" />
      <div className="container-site py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">خدمات AutoSouq</p>
          <h1 className="text-4xl font-semibold leading-[1.35] sm:text-5xl lg:text-6xl">حلول تسجيل تناسب <span className="text-brass">احتياجك</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">سواء كنت صاحب سيارة، أو تدير معرضاً للسيارات، أو تمثل شركة؛ تعرّف على المسار والخدمات المصممة لتناسبك.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="min-h-12 rounded-sm px-6"><a href="#individuals">استكشف الخدمات <ArrowLeft className="size-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="min-h-12 rounded-sm border-foreground/25 bg-transparent px-6"><a href="/contact">تواصل معنا</a></Button>
          </div>
        </div>
        <div className="mt-14 grid gap-3 border-t border-border/70 pt-7 sm:grid-cols-3">
          {audiences.map((item) => <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-4 rounded-sm border border-border/70 bg-card/35 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brass/70 hover:bg-card/70">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass/40 text-brass"><item.icon className="size-5" /></span>
            <span className="min-w-0 flex-1"><span className="block text-sm text-muted-foreground">{item.number}</span><span className="block font-semibold">{item.title}</span></span>
            <ArrowLeft className="size-4 text-brass transition-transform group-hover:-translate-x-1" />
          </a>)}
        </div>
      </div>
    </section>

    <section className="container-site py-16 sm:py-20">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">اختر المسار المناسب</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">ثلاث فئات، وتجربة أوضح لكل فئة</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground">تختلف طريقة الاستفادة من AutoSouq بحسب طبيعة استخدامك. اختر الفئة لقراءة تفاصيلها.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {audiences.map((item) => <a key={item.id} href={`#${item.id}`} className="group relative flex min-h-56 flex-col border border-border bg-card/45 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brass/70 hover:bg-card sm:p-7">
          <span className="font-display-latin text-sm tracking-[.18em] text-brass">{item.number}</span>
          <div className="mt-5 flex items-center justify-between gap-3"><h3 className="text-2xl font-semibold">{item.title}</h3><item.icon className="size-8 text-brass transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} /></div>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.subtitle}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brass">عرض التفاصيل <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /></span>
          {item.active && <span className="absolute left-5 top-5 rounded-full border border-brass/40 px-3 py-1 text-[11px] text-brass">متاحة الآن في النموذج</span>}
        </a>)}
      </div>
    </section>

    <section className="surface-light">
      <div className="container-site py-16 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">تفاصيل الخدمات</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">ما الذي نقدمه لكل فئة؟</h2>
          <p className="mt-4 leading-8 text-onyx/70">استعرض تفاصيل كل مسار، وما الذي يمكنك إنجازه من خلاله.</p>
        </div>
        <div className="space-y-6">
          {audiences.map((item, index) => <article id={item.id} key={item.id} className="scroll-mt-28 grid overflow-hidden border border-onyx/10 bg-white shadow-[0_18px_50px_-42px_rgba(0,0,0,.35)] lg:grid-cols-[.8fr_1.2fr]">
            <div className={`relative flex min-h-64 flex-col justify-between p-7 sm:p-9 ${index === 1 ? "bg-onyx text-ivory" : "bg-[#e7dece] text-onyx"}`}>
              <div className="flex items-center justify-between"><span className="font-display-latin text-sm tracking-[.2em] opacity-60">{item.number} / 03</span><item.icon className="size-10 text-tobacco" strokeWidth={1.35} /></div>
              <div><span className="text-xs font-semibold tracking-wide text-tobacco">{item.tag}</span><h3 className="mt-2 text-3xl font-semibold">{item.title}</h3><p className="mt-3 max-w-md text-sm leading-7 opacity-75">{item.subtitle}</p></div>
              {item.active && <span className="mt-6 inline-flex w-fit items-center gap-2 border border-tobacco/40 px-3 py-2 text-xs"><span className="size-1.5 rounded-full bg-tobacco" /> المسار الأساسي في النموذج الحالي</span>}
            </div>
            <div className="flex flex-col p-7 sm:p-9">
              <p className="max-w-2xl leading-8 text-onyx/75">{item.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.features.map((feature) => <div key={feature} className="flex items-start gap-3 text-sm leading-7 text-onyx/80"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-onyx text-ivory"><Check className="size-3" /></span>{feature}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-onyx/10 pt-6">
                <div className="text-sm text-onyx/60">{index === 0 ? <>أتعاب المنصة: <strong className="text-xl text-onyx"><Ltr>€70</Ltr></strong> <span className="text-xs">شاملة ضريبة القيمة المضافة</span></> : index === 1 ? <>باقات شهرية وسنوية للتجار</> : <>رسوم الخدمة: <strong className="text-xl text-onyx"><Ltr>€55</Ltr></strong> لكل تسجيل، شاملة ضريبة القيمة المضافة</>}</div>
                <Button asChild className="rounded-sm"><a href={item.href}>{item.action}<ArrowLeft className="size-4" /></a></Button>
              </div>
              {index === 0 && <p className="mt-3 text-xs leading-6 text-onyx/55">رسوم دائرة التسجيل الحكومية غير مشمولة، وتُدفع مباشرة إلى دائرة التسجيل.</p>}
              {index === 1 && <p className="mt-3 text-xs leading-6 text-onyx/55">تختلف الأسعار ومزايا الخصم بحسب الباقة المختارة. راجع صفحة الأسعار للتفاصيل.</p>}
              {index === 2 && <p className="mt-3 text-xs leading-6 text-onyx/55">رسوم الخدمة لكل تسجيل، ولا تشمل أي رسوم حكومية منفصلة إن وجدت.</p>}
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="container-site py-16 sm:py-20">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: WalletCards, title: "رسوم مفهومة", text: "نعرض أتعاب الخدمة بشكل منفصل عن الرسوم الحكومية." },
          { icon: Workflow, title: "خطوات منظمة", text: "مسار واضح يساعدك على معرفة الخطوة التالية." },
          { icon: Headset, title: "متابعة الطلب", text: "تعرف على حالة الطلب وما قد يتطلب استكمالاً." },
        ].map((item) => <div key={item.title} className="flex gap-4 border-t border-brass/50 py-6"><item.icon className="mt-1 size-7 shrink-0 text-brass" strokeWidth={1.5} /><div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p></div></div>)}
      </div>
    </section>

    <section className="surface-light">
      <div className="container-site py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 border border-onyx/10 bg-white p-7 sm:flex-row sm:items-center sm:p-10">
          <div><p className="eyebrow mb-2">هل أنت مستعد؟</p><h2 className="text-2xl font-semibold text-onyx sm:text-3xl">ابدأ رحلتك مع AutoSouq</h2><p className="mt-2 text-sm leading-7 text-onyx/65">إذا كنت تسجل سيارة جديدة، يمكنك البدء من مسار الأفراد.</p></div>
          <Button asChild size="lg" className="min-h-12 rounded-sm"><a href="/register">ابدأ تسجيل سيارتك <ArrowLeft className="size-4" /></a></Button>
        </div>
      </div>
    </section>
  </main>;
}
