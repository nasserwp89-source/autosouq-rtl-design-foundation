import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Building2, CarFront, Headset, Users, WalletCards, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    </div>
    </section>

    <section className="container-site py-16 sm:py-20">
      <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
        <p className="eyebrow mb-4">لمن نقدم خدماتنا</p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">خدمات تناسب احتياجك</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">حلول تسجيل واضحة ومناسبة للأفراد وتجار السيارات والشركات، ضمن تجربة رقمية منظمة.</p>
      </div>
      <div className="audience-grid grid gap-7 md:grid-cols-3">
        {audiences.map((item) => {
          const Icon = item.icon;
          const featured = item.id === "dealers";
          return <article key={item.id} className={`audience-service-card group relative flex min-h-[330px] flex-col items-center border px-7 py-9 text-center ${featured ? "is-featured" : "is-standard"}`}>
            <span className="audience-card-number absolute right-6 top-5 text-xs tracking-[0.2em]">{item.number}</span>
            <div className="audience-icon-wrap mb-6 grid size-[76px] place-items-center">
              <Icon className="audience-icon size-14" strokeWidth={1.35} />
            </div>
            <h3 className="audience-card-title text-2xl font-semibold">{item.title}</h3>
            <p className="audience-card-description mt-4 max-w-xs text-sm leading-7">{item.subtitle}</p>
            <a href={item.href} className="audience-card-action mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">
              {item.action} <ArrowLeft className="size-4" />
            </a>
          </article>;
        })}
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
