import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, BadgeCheck, Building2, CarFront, Check, ChevronDown, Clock3, FileCheck2, FileText, Handshake, Headset, ShieldCheck, Sparkles, Users, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Ltr } from "@/components/site/Ltr";

const heroSlides = [
  { eyebrow: "تسجيل السيارات الجديدة في ألمانيا", title: <>سجّل سيارتك الجديدة <span>بثقة</span></>, description: "تجربة رقمية واضحة ومنظمة تساعدك على إنجاز إجراءات تسجيل سيارتك الجديدة، مع متابعة طلبك خطوة بخطوة.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90", alt: "سيارة رياضية فاخرة على طريق مفتوح", index: "01" },
  { eyebrow: "تجربة رقمية أكثر سهولة", title: <>إجراءات أوضح، <span>وراحة أكبر</span></>, description: "قدّم بياناتك ومستنداتك ضمن خطوات مرتبة، واعرف ما يحدث لطلبك في كل مرحلة.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90", alt: "سيارة حديثة بتصميم أنيق", index: "02" },
  { eyebrow: "من البداية حتى اكتمال الطلب", title: <>سيارتك الجديدة، <span>خطوتك القادمة</span></>, description: "ابدأ طلب التسجيل بثقة، وتعرّف على الرسوم والخطوات المطلوبة قبل البدء.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90", alt: "سيارة رياضية فاخرة بإضاءة سينمائية", index: "03" },
];

const faqs = [
  { q: "ما الخدمة التي تقدمها AutoSouq؟", a: "نساعدك في تقديم ومتابعة طلب تسجيل سيارتك الجديدة في ألمانيا من خلال تجربة رقمية منظمة وواضحة." },
  { q: "هل الخدمة متاحة لتسجيل السيارات الجديدة فقط؟", a: "نعم، الخدمة المتاحة في هذا النموذج هي تسجيل السيارات الجديدة فقط." },
  { q: "كم تبلغ أتعاب AutoSouq؟", a: "أتعاب المنصة 70 يورو شاملة ضريبة القيمة المضافة." },
  { q: "هل رسوم دائرة التسجيل مشمولة؟", a: "لا. رسوم دائرة التسجيل الحكومية منفصلة عن أتعاب المنصة، ويتم دفعها مباشرة إلى دائرة التسجيل." },
  { q: "كيف يمكنني متابعة حالة الطلب؟", a: "يمكنك متابعة حالة طلبك والتحديثات المرتبطة به من خلال حسابك عند إطلاق الخدمة الفعلية." },
  { q: "متى يمكنني تنزيل المستندات النهائية؟", a: "تتاح المستندات النهائية بعد اكتمال الطلب واعتماده." },
  { q: "ماذا يحدث إذا كانت هناك مستندات ناقصة؟", a: "ستظهر لك المستندات أو المعلومات المطلوب استكمالها قبل متابعة معالجة الطلب." },
];

const audiences = [
  { icon: Users, title: "الأفراد", desc: "أنجز طلب تسجيل سيارتك الجديدة بخطوات رقمية واضحة.", action: "ابدأ تسجيل سيارتك", active: true, number: "01" },
  { icon: CarFront, title: "تجار السيارات", desc: "باقات وخدمات تساعد التجار على تنظيم طلبات تسجيل السيارات.", action: "اكتشف باقات التجار", number: "02" },
  { icon: Building2, title: "الشركات الشريكة", desc: "خدمات تسجيل مصممة لتناسب احتياجات الشركات.", action: "تعرّف على خدمات الشركات", number: "03" },
];

const benefits = [
  { icon: WalletCards, title: "رسوم واضحة", desc: "تعرف على أتعاب AutoSouq بشكل منفصل عن الرسوم الحكومية قبل بدء الطلب." },
  { icon: FileCheck2, title: "خطوات منظمة", desc: "أكمل بياناتك وأرسل مستنداتك ضمن رحلة تسجيل مرتبة وواضحة." },
  { icon: Clock3, title: "متابعة مستمرة", desc: "تابع حالة طلبك وتعرّف على أي إجراء مطلوب منك." },
  { icon: ShieldCheck, title: "وضوح واطمئنان", desc: "راجع تفاصيل طلبك والرسوم والمستندات من مكان واحد." },
  { icon: CarFront, title: "تسجيل السيارات الجديدة", desc: "خدمة متخصصة لطلبات تسجيل السيارات الجديدة في ألمانيا." },
  { icon: FileText, title: "إدارة المستندات", desc: "ارفع المستندات المطلوبة وتابع استكمالها ضمن طلبك." },
];

const steps = [
  { n: "01", title: "أدخل بياناتك", desc: "أضف بيانات صاحب السيارة ومعلومات التواصل." },
  { n: "02", title: "أضف بيانات السيارة", desc: "أدخل المعلومات الأساسية الخاصة بسيارتك الجديدة." },
  { n: "03", title: "أرفق المستندات", desc: "ارفع المستندات المطلوبة لإرسال الطلب." },
  { n: "04", title: "راجع وادفع", desc: "تأكد من التفاصيل ثم ادفع أتعاب المنصة." },
  { n: "05", title: "تابع واستلم", desc: "تابع حالة الطلب، ثم نزّل مستنداتك بعد اكتماله واعتماده." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoSouq — سجّل سيارتك الجديدة في ألمانيا بثقة" },
      { name: "description", content: "خدمة رقمية تساعدك على تسجيل سيارتك الجديدة في ألمانيا بخطوات واضحة ومتابعة منظمة." },
      { property: "og:title", content: "AutoSouq — تسجيل السيارات الجديدة في ألمانيا" },
      { property: "og:description", content: "تجربة رقمية واضحة ومنظمة لتسجيل سيارتك الجديدة." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`max-w-2xl ${light ? "text-onyx" : ""}`}>
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
    {text && <p className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${light ? "text-onyx/70" : "text-muted-foreground"}`}>{text}</p>}
  </div>;
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    if (!isPlaying || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);
  return <main className="overflow-hidden">
    <section className="hero-shell relative isolate overflow-hidden" aria-roledescription="carousel" aria-label="خدمات AutoSouq">
      <div className="hero-slides absolute inset-0 -z-20">
        {heroSlides.map((slide, i) => <div key={slide.index} className={`hero-slide absolute inset-0 ${activeSlide === i ? "is-active" : ""}`} aria-hidden={activeSlide !== i}><img src={slide.image} alt={slide.alt} fetchPriority={i === 0 ? "high" : "auto"} /></div>)}
      </div>
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="container-site relative flex min-h-[680px] items-center py-24 sm:min-h-[740px] lg:min-h-[790px]">
        {heroSlides.map((slide, i) => <div key={slide.index} className={`hero-copy absolute inset-x-5 top-1/2 max-w-3xl -translate-y-1/2 sm:inset-x-8 lg:inset-x-10 ${activeSlide === i ? "is-active" : ""}`} aria-hidden={activeSlide !== i}>
          <div className="mb-7 inline-flex items-center gap-3 border border-brass/40 bg-onyx/40 px-4 py-2 text-sm text-ivory/90 backdrop-blur-sm"><span className="size-2 rounded-full bg-brass shadow-[0_0_16px_#C79A4B]" />{slide.eyebrow}</div>
          <p className="mb-5 text-sm font-medium tracking-wide text-brass sm:text-base">AutoSouq <span className="px-1 text-ivory/50">/</span> وسيطك الرقمي الموثوق</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.35] text-ivory sm:text-5xl lg:text-7xl">{slide.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-ivory/80 sm:text-lg sm:leading-9">{slide.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group min-h-14 rounded-sm px-7 text-base shadow-[0_12px_35px_-15px_#C79A4B]"><a href="/service">ابدأ تسجيل سيارتك <ArrowLeft className="transition-transform group-hover:-translate-x-1" /></a></Button>
            <Button asChild variant="outline" size="lg" className="min-h-14 rounded-sm border-ivory/35 bg-onyx/20 px-7 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"><a href="#how-it-works">كيف تعمل الخدمة؟ <ArrowUpLeft /></a></Button>
          </div>
        </div>)}
      </div>
      <div className="container-site absolute inset-x-0 bottom-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs tracking-[0.18em] text-ivory/65"><span className="font-display-latin text-sm text-brass">{heroSlides[activeSlide]?.index}</span><span className="h-px w-10 bg-ivory/30"><span className="hero-progress block h-px bg-brass" key={activeSlide} /></span><span className="font-display-latin">03</span></div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setActiveSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)} aria-label="الشريحة السابقة" className="hero-control"><ArrowLeft className="size-4 rotate-180" /></button>
          <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="الشريحة التالية" className="hero-control"><ArrowLeft className="size-4" /></button>
          <div className="mx-2 flex items-center gap-2">{heroSlides.map((slide,i)=><button key={slide.index} type="button" onClick={()=>setActiveSlide(i)} aria-label={`الانتقال إلى الشريحة ${i+1}`} aria-current={activeSlide===i?"true":undefined} className={`hero-dot ${activeSlide===i?"is-active":""}`} />)}</div>
          <button type="button" onClick={()=>setIsPlaying(!isPlaying)} aria-label={isPlaying?"إيقاف العرض التلقائي":"تشغيل العرض التلقائي"} className="hero-control text-xs">{isPlaying?"Ⅱ":"▶"}</button>
        </div>
      </div>
    </section>

    <section id="audiences" className="container-site py-24 sm:py-28">
      <div className="mb-14 text-center">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="لمن نقدم خدماتنا" title="كيف يمكننا خدمتك؟" text="حلول تسجيل مرنة للأفراد والجهات العاملة في قطاع السيارات." />
        </div>
      </div>
      <div className="audience-grid grid gap-7 md:grid-cols-3">
        {audiences.map((item) => {
          const Icon = item.icon;
          const featured = item.number === "02";
          return <article key={item.number} className={`audience-service-card group relative flex min-h-[330px] flex-col items-center border px-7 py-9 text-center ${featured ? "is-featured" : "is-standard"}`}>
            <span className="audience-card-number absolute right-6 top-5 text-xs tracking-[0.2em]">{item.number}</span>
            <div className="audience-icon-wrap mb-6 grid size-[76px] place-items-center">
              <Icon className="audience-icon size-14" strokeWidth={1.35} />
            </div>
            <h3 className="audience-card-title text-2xl font-semibold">{item.title}</h3>
            <p className="audience-card-description mt-4 max-w-xs text-sm leading-7">{item.desc}</p>
            <a href={item.active ? "/service" : "#audiences"} className="audience-card-action mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">
              {item.action}<ArrowLeft className="size-4" />
            </a>
          </article>;
        })}
      </div>
    </section>

    <section id="service" className="surface-light">
      <div className="container-site grid items-center gap-14 py-24 lg:grid-cols-[1fr_0.9fr] lg:py-32">
        <div className="relative">
          <div className="service-image overflow-hidden"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85" alt="سيارة حديثة بتصميم أنيق" loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.035]" /></div>
          <div className="absolute -bottom-6 -left-4 max-w-[230px] border border-onyx/10 bg-white p-5 shadow-xl sm:-left-8"><p className="text-xs text-onyx/60">خدمة AutoSouq</p><p className="mt-1 text-xl font-semibold text-onyx">من البداية حتى الاكتمال</p></div>
        </div>
        <div className="lg:pr-5">
          <SectionHeading light eyebrow="خدمتنا" title="تسجيل سيارتك الجديدة أصبح أسهل" text="نرتب لك تجربة تقديم طلب التسجيل رقمياً، من إدخال البيانات وإرفاق المستندات إلى متابعة حالة الطلب واستلام المستندات النهائية بعد اكتماله واعتماده." />
          <div className="mt-9 space-y-4">
            {["تقديم بياناتك وبيانات السيارة ضمن خطوات واضحة","إرفاق المستندات ومراجعة تفاصيل الطلب","متابعة حالة الطلب ومعرفة ما يتطلب إجراءً منك"].map((t) => <div key={t} className="flex items-start gap-3 text-sm leading-7 text-onyx/80"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-onyx text-ivory"><Check className="size-3.5" /></span>{t}</div>)}
          </div>
          <a href="/service" className="mt-9 inline-flex items-center gap-3 border-b border-onyx pb-2 text-sm font-semibold text-onyx transition-all hover:gap-5">اكتشف الخدمة <ArrowLeft className="size-4" /></a>
        </div>
      </div>
    </section>

    <section id="about" className="relative isolate w-full overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2400&q=85')" }} />
      <div className="absolute inset-0 -z-10 bg-onyx/85" />
      <div className="container-site">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <p className="eyebrow mb-4">لماذا تختارنا</p>
          <h2 className="text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-5xl">لماذا تختار AutoSouq؟</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-14">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return <article key={b.title} dir="ltr" className="group flex min-h-32 flex-row-reverse items-center gap-5 transition-transform duration-700 ease-out hover:-translate-y-1">
              <span className="grid size-20 shrink-0 place-items-center rounded-full bg-brass text-onyx shadow-lg shadow-black/20 transition-transform duration-700 ease-out group-hover:scale-105">
                <Icon className="size-9" strokeWidth={1.6} />
              </span>
              <div dir="rtl" className="min-w-0 flex-1 text-right">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-xl font-semibold leading-8 text-ivory sm:text-2xl">{b.title}</h3>
                  <span className="font-display-latin text-xs tracking-widest text-brass/90">0{i + 1}</span>
                </div>
                <p className="text-base leading-8 text-ivory/90">{b.desc}</p>
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="surface-light">
      <div className="w-full py-24 sm:py-28">
        <div className="container-site mb-14 flex justify-center text-center">
          <div className="mx-auto text-center">
            <SectionHeading light eyebrow="رحلة تسجيلك" title="رحلة تسجيل سيارتك، خطوة بخطوة" />
          </div>
        </div>
        <div className="journey-gallery grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {n:"01",t:"بيانات صاحب السيارة",d:"ابدأ بإدخال بياناتك ومعلومات التواصل.",img:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=85"},
            {n:"02",t:"بيانات السيارة",d:"أضف المعلومات الأساسية لسيارتك الجديدة.",img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85"},
            {n:"03",t:"المستندات",d:"أرفق المستندات المطلوبة لإرسال الطلب.",img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"},
            {n:"04",t:"مراجعة الطلب",d:"راجع بياناتك وتأكد من التفاصيل قبل المتابعة.",img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"},
            {n:"05",t:"الدفع والمتابعة",d:"ادفع أتعاب المنصة وتابع حالة طلبك.",img:"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=85"},
            {n:"06",t:"استلام المستندات",d:"نزّل المستندات النهائية بعد اكتمال الطلب واعتماده.",img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85"}
          ].map((item) => <article key={item.n} className="journey-photo-card group relative isolate overflow-hidden bg-onyx">
            <img src={item.img} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className="journey-photo-shade absolute inset-0 -z-10" />
            <div className="journey-photo-content absolute inset-5 flex flex-col items-center justify-center p-5 text-center sm:inset-6">
              <span className="journey-photo-number mb-4 font-display-latin text-sm text-brass">{item.n}</span>
              <h3 className="text-xl font-semibold sm:text-2xl">{item.t}</h3>
              <p className="journey-photo-description mt-3 max-w-sm text-sm leading-7">{item.d}</p>
            </div>
            <span className="journey-photo-corner absolute right-4 top-4 size-8 border-r border-t border-brass/70 opacity-70 transition-all duration-500 group-hover:right-6 group-hover:top-6 group-hover:size-12" />
          </article>)}
        </div>
      </div>
    </section>


    <section id="affiliate-program" className="affiliate-section relative isolate overflow-hidden py-16 sm:py-20">
      <div className="container-site">
        <div className="affiliate-panel grid items-center gap-8 border border-brass/25 bg-card/70 px-7 py-9 sm:px-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="relative">
            <p className="eyebrow mb-3">برنامج الشراكة</p>
            <h2 className="text-2xl font-semibold leading-tight text-ivory sm:text-3xl">حوّل توصياتك إلى أرباح مع AutoSouq</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/80">شارك خدمات AutoSouq مع جمهورك واحصل على عمولة مقابل كل طلب تسجيل مكتمل من خلال رابط الإحالة الخاص بك. تُحتسب العمولة بعد اكتمال طلب التسجيل المحال بنجاح.</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-baseline gap-2"><span className="font-display-latin text-5xl text-brass">€15</span><span className="text-sm text-ivory/70">عن كل طلب إحالة مكتمل</span></div>
            <Button asChild size="lg" variant="outline" className="min-h-12 rounded-sm border-brass/60 px-6 text-ivory hover:bg-brass hover:text-onyx"><a href="/contact">استفسر عن البرنامج <ArrowLeft className="ms-2 size-4" /></a></Button>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="w-full">
      <div className="cta-panel relative min-h-[360px] w-full overflow-hidden bg-brass px-7 py-16 text-center text-onyx sm:min-h-[420px] sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -left-24 -top-28 size-80 rounded-full border border-onyx/10"/><div className="pointer-events-none absolute -left-10 -top-14 size-52 rounded-full border border-onyx/10"/>
        <Sparkles className="relative mx-auto mb-5 size-7"/>
        <h2 className="relative text-3xl font-semibold sm:text-4xl lg:text-5xl">جاهز لتسجيل سيارتك الجديدة؟</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-sm leading-8 text-onyx/75 sm:text-base">ابدأ طلبك مع AutoSouq واستمتع بتجربة رقمية واضحة ومنظمة.</p>
        <Button asChild size="lg" className="relative mt-8 min-h-14 rounded-sm bg-onyx px-8 text-ivory hover:bg-onyx/90"><a href="/service">ابدأ تسجيل سيارتك <ArrowLeft className="ms-2"/></a></Button>
      </div>
    </section>
  </main>;
}
