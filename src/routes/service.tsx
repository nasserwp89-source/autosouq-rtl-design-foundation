import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Building2, CarFront, CheckCircle2, ChevronDown, ClipboardList, FileSearch, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const processSteps = [
  { number: "01", icon: ClipboardList, title: "قدّم طلبك", description: "أدخل بياناتك وبيانات سيارتك الجديدة ضمن خطوات واضحة." },
  { number: "02", icon: FileSearch, title: "أرفق المستندات", description: "أرسل المستندات المطلوبة وراجع تفاصيل الطلب قبل الدفع." },
  { number: "03", icon: CheckCircle2, title: "تابع واستلم", description: "تابع حالة طلبك، واستلم المستندات النهائية بعد اكتماله واعتماده." },
];


const serviceFaqs = [
  { question: "ما الخدمة التي تقدمها AutoSouq؟", answer: "نساعدك في تقديم ومتابعة طلب تسجيل سيارتك الجديدة في ألمانيا من خلال تجربة رقمية منظمة وواضحة." },
  { question: "هل الخدمة متاحة لتسجيل السيارات الجديدة فقط؟", answer: "نعم، الخدمة المتاحة في هذا النموذج هي تسجيل السيارات الجديدة فقط." },
  { question: "كم تبلغ أتعاب AutoSouq؟", answer: "أتعاب المنصة 70 يورو شاملة ضريبة القيمة المضافة." },
  { question: "هل رسوم دائرة التسجيل مشمولة؟", answer: "لا. رسوم دائرة التسجيل الحكومية منفصلة عن أتعاب المنصة، ويتم دفعها مباشرة إلى دائرة التسجيل." },
  { question: "كيف يمكنني متابعة حالة الطلب؟", answer: "يمكنك متابعة حالة طلبك والتحديثات المرتبطة به من خلال حسابك عند إطلاق الخدمة الفعلية." },
  { question: "متى يمكنني تنزيل المستندات النهائية؟", answer: "تتاح المستندات النهائية بعد اكتمال الطلب واعتماده." },
  { question: "ماذا يحدث إذا كانت هناك مستندات ناقصة؟", answer: "ستظهر لك المستندات أو المعلومات المطلوب استكمالها قبل متابعة معالجة الطلب." },
];

function ServicesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main className="overflow-hidden">
    <section className="service-hero relative isolate overflow-hidden border-b border-border">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_54%]"
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90"
        alt=""
        aria-hidden="true"
      />
      <div className="service-hero-shade absolute inset-0 -z-10" />
      <div className="container-site py-16 sm:py-20 lg:py-24">
        <div className="ml-auto w-full max-w-[650px] text-right">
          <p className="eyebrow mb-5 text-brass">خدمات AutoSouq</p>
          <h1 className="ml-auto max-w-[12ch] text-4xl font-semibold leading-[1.25] text-ivory sm:text-5xl lg:text-[3.75rem]">حلول تسجيل<br /><span className="text-brass">السيارات الشاملة</span></h1>
          <p className="mt-6 ml-auto max-w-2xl text-base leading-8 text-ivory/80 sm:text-lg sm:leading-9">خدمات موثوقة ومتكاملة للأفراد وتجار السيارات والشركات، لتسجيل وإدارة السيارات في ألمانيا بسهولة واحترافية.</p>
          <div className="mt-9 flex flex-wrap justify-start gap-3">
            <Button asChild size="lg" className="min-h-12 rounded-sm px-6"><a href="#individuals">استكشف الخدمات <ArrowLeft className="size-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="min-h-12 rounded-sm border-ivory/35 bg-onyx/20 px-6 text-ivory hover:bg-ivory/10 hover:text-ivory"><a href="/contact">تواصل معنا</a></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="service-audience-section surface-light py-16 sm:py-20">
      <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
        <p className="eyebrow mb-4">لمن نقدم خدماتنا</p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">خدمات تناسب احتياجك</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">حلول تسجيل واضحة ومناسبة للأفراد وتجار السيارات والشركات، ضمن تجربة رقمية منظمة.</p>
      </div>
      <div className="audience-grid container-site mx-auto grid gap-7 md:grid-cols-3">
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


    <section id="request" className="service-contact-section relative isolate overflow-hidden">
      <div className="service-contact-backdrop absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90')" }} />
      <div className="service-contact-shade absolute inset-0 -z-10" />
      <div className="service-contact-inner container-site grid items-center gap-12 py-20 sm:py-24 lg:min-h-[700px] lg:grid-cols-2 lg:gap-16 lg:py-24 lg:[direction:ltr]">
        <div className="service-contact-form-wrap relative z-10 lg:[direction:rtl]">
          <div className="service-contact-form mx-auto w-full max-w-[470px] border border-brass/35 px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-8 sm:py-9">
            <div className="mb-7 text-right">
              <p className="eyebrow mb-3">تواصل معنا</p>
              <h3 className="text-2xl font-semibold text-ivory sm:text-3xl">كيف يمكننا مساعدتك؟</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/75">اترك بياناتك ورسالتك، وسنكون سعداء بالتعرف على احتياجك والرد عليك بأسرع وقت.</p>
            </div>
            {submitted ? <div role="status" className="border border-brass/30 bg-onyx/70 p-6 text-ivory">
              <CheckCircle2 className="mb-3 size-8 text-brass" />
              <p className="font-semibold">شكراً لتواصلك معنا.</p>
              <p className="mt-2 text-sm leading-7 text-ivory/70">تم استلام بياناتك بنجاح.</p>
              <Button type="button" variant="outline" className="mt-5 border-brass/40 text-ivory hover:bg-brass hover:text-onyx" onClick={() => setSubmitted(false)}>إرسال استفسار آخر</Button>
            </div> : <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <div>
                <label htmlFor="service-name" className="mb-2 block text-xs font-medium text-ivory/80">الاسم الكامل</label>
                <Input id="service-name" name="name" required placeholder="أدخل اسمك" className="service-contact-field h-12 rounded-sm border-ivory/15 text-ivory placeholder:text-ivory/45" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service-phone" className="mb-2 block text-xs font-medium text-ivory/80">رقم الهاتف</label>
                  <Input id="service-phone" name="phone" type="tel" required placeholder="+49" className="service-contact-field h-12 rounded-sm border-ivory/15 text-ivory placeholder:text-ivory/45" />
                </div>
                <div>
                  <label htmlFor="service-email" className="mb-2 block text-xs font-medium text-ivory/80">البريد الإلكتروني</label>
                  <Input id="service-email" name="email" type="email" required placeholder="name@example.com" className="service-contact-field h-12 rounded-sm border-ivory/15 text-ivory placeholder:text-ivory/45" />
                </div>
              </div>
              <div>
                <label htmlFor="service-type" className="mb-2 block text-xs font-medium text-ivory/80">نوع الخدمة</label>
                <select id="service-type" name="service" defaultValue="" required className="service-contact-field h-12 w-full rounded-sm border border-ivory/15 px-3 text-sm text-ivory focus:outline-none focus:ring-2 focus:ring-brass/50">
                  <option value="" disabled>اختر الفئة</option>
                  <option value="individual">فرد</option>
                  <option value="dealer">تاجر سيارات</option>
                  <option value="company">شركة</option>
                </select>
              </div>
              <div>
                <label htmlFor="service-message" className="mb-2 block text-xs font-medium text-ivory/80">رسالتك</label>
                <Textarea id="service-message" name="message" required placeholder="اكتب استفسارك هنا..." className="service-contact-field min-h-28 rounded-sm border-ivory/15 text-ivory placeholder:text-ivory/45" />
              </div>
              <Button type="submit" size="lg" className="mt-2 min-h-12 w-full rounded-sm">إرسال الاستفسار <ArrowLeft className="size-4" /></Button>
            </form>}
          </div>
        </div>
        <div className="service-contact-copy relative z-10 text-right lg:[direction:rtl]">
          <p className="eyebrow mb-5">ابدأ مع AutoSouq</p>
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.4] text-ivory sm:text-4xl lg:text-5xl">خطوتك الأولى نحو <span className="text-brass">تسجيل أسهل</span></h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/80">هل لديك استفسار حول تسجيل سيارتك الجديدة في ألمانيا؟ أرسل لنا تفاصيلك وسنساعدك على معرفة الخطوة المناسبة.</p>
          <ul className="mt-8 space-y-4 text-sm text-ivory/85">
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-brass" /> استشارة سريعة ومجانية</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-brass" /> معلومات دقيقة وموثوقة</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="size-5 shrink-0 text-brass" /> دعم باللغة العربية</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="service-process" className="service-process-section surface-light relative isolate overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.308_0.044_84.9_/_32%),transparent_65%)]" />
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="eyebrow mb-4">رحلتك مع AutoSouq</p>
          <h2 className="text-3xl font-semibold leading-tight text-onyx sm:text-4xl lg:text-5xl">خطوات بسيطة وواضحة</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-onyx/65 sm:text-lg">ثلاث خطوات فقط لإتمام طلب تسجيل سيارتك.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return <article key={step.number} className="service-process-step group relative flex flex-col items-center px-5 text-center">
              <div className="relative mb-8 grid size-28 place-items-center border border-brass/60 bg-brass/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-brass">
                <span className="absolute -top-5 grid size-10 place-items-center rounded-full bg-brass font-display-latin text-sm font-semibold text-onyx">{step.number}</span>
                <Icon className="size-12 text-brass transition-colors duration-500 group-hover:text-onyx" strokeWidth={1.35} />
              </div>
              <h3 className="text-xl font-semibold text-onyx">{step.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-7 text-onyx/65">{step.description}</p>
              {index < processSteps.length - 1 && <span aria-hidden="true" className="service-process-connector hidden md:block" />}
            </article>;
          })}
        </div>
      </div>
    </section>

    <section id="service-faq" className="service-faq-section relative isolate overflow-hidden py-20 sm:py-24">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-4">الأسئلة الشائعة</p>
          <h2 className="text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-5xl">إجابات تساعدك قبل البدء</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">جمعنا لك أهم الإجابات حول خدمة تسجيل السيارات الجديدة وإجراءاتها.</p>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-3">
            {serviceFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `service-faq-answer-${index}`;
              return <article key={faq.question} className={`service-faq-item border transition-colors duration-300 ${isOpen ? "is-open border-brass/60 bg-card shadow-[0_14px_38px_-28px_#000]" : "border-border bg-card/55 hover:border-brass/35"}`}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex min-h-[76px] w-full items-center justify-between gap-5 px-5 py-4 text-right text-base font-semibold text-ivory sm:px-7">
                    <span className="leading-7">{faq.question}</span>
                    <ChevronDown className={`size-5 shrink-0 text-tobacco transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div id={panelId} hidden={!isOpen} className="px-5 pb-6 text-sm leading-8 text-muted-foreground sm:px-7">{faq.answer}</div>
              </article>;
            })}
          </div>
          <div className="service-faq-visual relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 border border-brass/25" />
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85" alt="سيارة حديثة تعكس تجربة AutoSouq" loading="lazy" className="relative aspect-[5/4] w-full object-cover" />
            <div className="absolute -bottom-5 right-5 max-w-[250px] border border-brass/35 bg-card px-6 py-5 text-ivory shadow-xl sm:right-8">
              <p className="text-xs text-brass">AutoSouq</p>
              <p className="mt-1 text-lg font-semibold">وضوح في كل خطوة</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-light">
      <div className="container-site py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 border border-onyx/10 bg-white p-7 sm:flex-row sm:items-center sm:p-10">
          <div><p className="eyebrow mb-2">هل أنت مستعد؟</p><h2 className="text-2xl font-semibold text-onyx sm:text-3xl">جاهز لتسجيل سيارتك الجديدة؟</h2><p className="mt-2 text-sm leading-7 text-onyx/75">ابدأ الآن، وتعرّف على خدماتنا السريعة والموثوقة.</p></div>
          <Button asChild size="lg" className="min-h-12 rounded-sm"><a href="/register">ابدأ تسجيل سيارتك <ArrowLeft className="size-4" /></a></Button>
        </div>
      </div>
    </section>
  </main>;
}
