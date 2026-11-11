import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowDown, UserRound, Building2, Handshake, Megaphone, FileCheck2, CircleCheck, ScanLine, ShieldCheck, ListChecks, FileText, CreditCard, Check, Plus } from "lucide-react";
import type { ReactNode } from "react";
import hero from "@/assets/registration-home.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Ltr } from "@/components/site/Ltr";
import { StatusBadge } from "@/components/site/StatusBadge";
import { registrationOffer, homeFaq } from "@/lib/home-content";
import { Reveal } from "./Reveal";

function StartButton({ outline = false }: { outline?: boolean }) {
  return <Button asChild size="lg" variant={outline ? "outline" : "default"}><Link to="/register">ابدأ تسجيل سيارتك <ArrowLeft /></Link></Button>;
}

function Heading({ n, label, title, children }: { n: string; label: string; title: ReactNode; children?: ReactNode }) {
  return <div className="mb-9 md:mb-12"><p className="home-kicker mb-4"><Ltr>{n}</Ltr><span className="h-px w-8 bg-current opacity-50" />{label}</p><h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>{children && <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">{children}</p>}</div>;
}

const audiences = [
  { name: "الأفراد", icon: UserRound, description: "سيارتك الجديدة. طلب واحد. متابعة واضحة حتى استلام المستندات.", action: "ابدأ تسجيل سيارتك", details: "تسجيل السيارة الجديدة ومتابعة حالة الطلب واستلام المستندات المعتمدة." },
  { name: "تجار السيارات", icon: Building2, description: "باقات تناسب أعمالك، لتنظيم معاملات التسجيل ومتابعة طلباتك.", action: "اعرف باقات التجار", details: "باقتا Starter وBusiness لتنظيم طلبات التسجيل، مع مزايا وخصومات حسب الباقة. الاشتراكات وحسابات التجار غير متاحة في هذا النموذج." },
  { name: "الشركات الشريكة", icon: Handshake, description: "حساب موحّد للشركة، وإدارة منظّمة لمعاملات تسجيل السيارات.", action: "اعرف خدمات الشركات", details: "حساب شركة واحد لمعاملات التسجيل، دون حسابات مستقلة لعملاء الشريك. خدمات الشركات وطلبات الانضمام ستُفعّل لاحقاً." },
  { name: "المسوقون بالعمولة", icon: Megaphone, description: "برنامج إحالة يربط توصياتك بطلبات مكتملة وعمولات واضحة.", action: "اعرف برنامج المسوقين", details: "برنامج روابط إحالة وأكواد وعمولات عن الطلبات المحالة والمكتملة. الإحالات والعمولات والسحوبات غير متاحة في هذا النموذج." },
];

export function HomePage() {
  return <>
    <section className="home-hero relative isolate overflow-hidden border-b">
      <img src={hero} alt="سيارة فضية أمام مبنى معاصر في ألمانيا" width={1920} height={1088} fetchPriority="high" className="home-hero-image absolute inset-0 -z-20 size-full object-cover" />
      <div className="home-hero-shade absolute inset-0 -z-10" />
      <div className="container-site relative flex h-full flex-col justify-between py-8 md:py-12">
        <div className="home-hero-copy max-w-xl">
          <p className="home-kicker mb-5"><span className="h-px w-8 bg-brass" />تسجيل السيارات الجديدة في ألمانيا</p>
          <p className="mb-3 text-4xl md:text-5xl"><Ltr className="font-display-latin">AutoSouq</Ltr></p>
          <h1 className="text-3xl font-bold leading-snug md:text-5xl">سيارتك الجديدة.<br />بدايةٌ بكل ثقة.</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">نتولى إدارة طلب تسجيل سيارتك الجديدة ومتابعته، لتبقى كل خطوة واضحة من البداية حتى استلام المستندات.</p>
          <div className="mt-7 flex flex-wrap gap-3"><StartButton /><Button asChild variant="outline" size="lg"><Link to="/how-it-works">كيف تعمل الخدمة؟</Link></Button></div>
          <p className="mt-5 text-sm text-foreground/75">أتعاب واضحة: <Ltr className="font-semibold">€{registrationOffer.fee}</Ltr> شامل الضريبة <span className="mx-1">·</span> رسوم الدائرة منفصلة</p>
        </div>
        <div className="home-hero-bottom flex items-center justify-between gap-3 text-sm"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-brass" />وضوح في الخدمة. راحة في المتابعة.</span><a href="#audiences" aria-label="اكتشف كيف يمكننا خدمتك" className="home-scroll grid size-11 shrink-0 place-items-center rounded-full border border-foreground/30 transition-colors hover:bg-background/40"><ArrowDown className="size-5" /></a></div>
      </div>
    </section>

    <section id="audiences" className="scroll-mt-20 py-12 md:py-20"><div className="container-site"><Reveal>
      <Heading n="01" label="لك، ولأعمالك" title="كيف يمكننا خدمتك؟">أربع فئات، ورؤية واحدة: خدمات سيارات أكثر وضوحاً. نبدأ اليوم بتسجيل السيارات الجديدة للأفراد.</Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((a, i) => <article key={a.name} className={`home-audience group flex min-w-0 flex-col rounded-lg border p-6 ${i === 0 ? "border-brass/60 bg-card" : "bg-background"}`}>
        <div className="mb-8 flex items-center justify-between"><a.icon className="size-7 text-brass" strokeWidth={1.25} /><span className={`text-sm ${i === 0 ? "text-brass" : "text-muted-foreground"}`}>{i === 0 ? "الخدمة الحالية" : "لاحقاً"}</span></div>
        <h3 className="mb-3 text-xl font-semibold">{a.name}</h3><p className="mb-7 text-base leading-relaxed text-muted-foreground">{a.description}</p>
        <div className="mt-auto border-t pt-5">{i === 0 ? <Button asChild variant="link" className="h-auto whitespace-normal px-0 text-base"><Link to="/register">{a.action}<ArrowLeft /></Link></Button> : <Dialog><DialogTrigger asChild><Button variant="ghost" className="h-auto whitespace-normal px-0 text-sm hover:bg-transparent">{a.action}<Plus /></Button></DialogTrigger><DialogContent className="text-start"><DialogHeader className="text-start"><DialogTitle>{a.name}</DialogTitle><DialogDescription className="pt-3 text-base leading-relaxed">{a.details}</DialogDescription></DialogHeader></DialogContent></Dialog>}</div>
      </article>)}</div>
    </Reveal></div></section>

    <section className="surface-light py-14 md:py-20"><div className="container-site"><Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
      <div><Heading n="02" label="خدمة الإطلاق" title={<>تسجيل سيارتك،<br />دون تعقيد التفاصيل.</>}>خدمة مخصصة للسيارات الجديدة في ألمانيا. نساعدك على تنظيم بيانات الطلب والمستندات ومتابعة المعاملة حتى اكتمالها.</Heading><Button asChild variant="outline" size="lg"><Link to="/service">اكتشف خدمة التسجيل<ArrowLeft /></Link></Button></div>
      <div className="divide-y border-y">{[{ icon: FileCheck2, title: "طلب منظّم من البداية", text: "بيانات المالك والسيارة والمستندات في مسار واحد واضح." }, { icon: ScanLine, title: "متابعة في كل مرحلة", text: "حالة واضحة للطلب، وما يحتاجه من استكمال." }, { icon: CircleCheck, title: "مستندات بعد الاعتماد", text: "استلام المستندات النهائية بعد مراجعة الإدارة واكتمال الطلب." }].map(item => <div key={item.title} className="flex gap-5 py-6"><item.icon className="mt-1 size-7 shrink-0" strokeWidth={1.3} /><div className="min-w-0"><h3 className="mb-2 text-lg font-semibold">{item.title}</h3><p className="text-base text-muted-foreground">{item.text}</p></div></div>)}</div>
    </Reveal></div></section>

    <section className="py-14 md:py-20"><div className="container-site"><Reveal>
      <Heading n="03" label="الوسيط الموثوق" title={<>لماذا <Ltr className="font-display-latin">AutoSouq</Ltr>؟</>}/>
      <div className="grid gap-8 md:grid-cols-3">{[{ n: "01", title: "وضوح قبل أي خطوة", text: "تعرف ما تتولاه المنصة وما تدفعه، مع فصل أتعابنا عن رسوم دائرة التسجيل." }, { n: "02", title: "تفاصيل أقل، متابعة أسهل", text: "طلب منظّم، وحالات مفهومة، واستكمال المستندات ضمن الطلب نفسه." }, { n: "03", title: "خدمة تحترم وقتك", text: "نتابع المعاملة دون وعود مطلقة، وبمدة مستهدفة مرتبطة بساعات العمل." }].map(item => <div key={item.n} className="border-t pt-6"><Ltr className="text-lg text-brass">{item.n}</Ltr><h3 className="mb-3 mt-5 text-xl font-semibold">{item.title}</h3><p className="text-base leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div>
    </Reveal></div></section>

    <section className="border-y bg-card py-14 md:py-20"><div className="container-site"><Reveal>
      <Heading n="04" label="رحلة واضحة" title="من الطلب إلى الاستلام.">تقدّم طلبك، نتابع التفاصيل، وتستلم مستنداتك بعد اكتمال المعاملة.</Heading>
      <div className="grid gap-8 md:grid-cols-3">{[{icon: ListChecks, n: "01", title: "قدّم طلبك", text: "أنشئ حسابك وأدخل البيانات وارفع المستندات."}, {icon: FileCheck2, n: "02", title: "نتابع المعاملة", text: "راجع الطلب وادفع الأتعاب، ثم تبدأ مراجعة الإدارة ومتابعة التسجيل."}, {icon: FileText, n: "03", title: "استلم مستنداتك", text: "بعد اكتمال الطلب واعتماد المستندات النهائية."}].map(s => <div key={s.n} className="relative"><div className="mb-5 flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full border border-brass/40 text-brass"><s.icon className="size-5" /></span><span className="h-px flex-1 bg-border"/><Ltr className="text-sm text-muted-foreground">{s.n}</Ltr></div><h3 className="mb-3 text-xl font-semibold">{s.title}</h3><p className="text-base text-muted-foreground">{s.text}</p></div>)}</div>
      <p className="mt-9 border-t pt-6 text-sm leading-relaxed text-muted-foreground">مدة الإنجاز المستهدفة: <Ltr>{registrationOffer.targetMinutes.min}–{registrationOffer.targetMinutes.max}</Ltr> دقيقة بعد انتقال الطلب إلى «قيد التنفيذ»، خلال ساعات العمل وباستثناء العطل؛ ليست ضماناً مطلقاً.</p>
    </Reveal></div></section>

    <section className="surface-light py-14 md:py-20"><div className="container-site"><Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><Heading n="05" label="السعر وما يشمله" title="سعر واضح. من البداية.">أتعاب ثابتة للأفراد، مقابل إدارة طلب تسجيل السيارة الجديدة ومتابعته.</Heading><div className="flex items-baseline gap-4"><Ltr className="font-display-latin text-7xl font-semibold">€{registrationOffer.fee}</Ltr><span className="text-base text-muted-foreground">شامل ضريبة القيمة المضافة</span></div><p className="mb-7 mt-5 border-t pt-5 text-base">رسوم دائرة التسجيل غير مشمولة، وتُدفع مباشرة للدائرة.</p><StartButton /></div>
      <div className="self-center"><h3 className="mb-6 text-xl font-semibold">ما تتولاه المنصة</h3><ul className="space-y-5">{["إدارة طلب تسجيل السيارة الجديدة", "تنظيم بيانات الطلب والمستندات", "متابعة الحالة وطلب الاستكمال عند الحاجة", "إتاحة المستندات النهائية بعد الاعتماد والاكتمال"].map(t => <li key={t} className="flex items-start gap-3 border-b pb-5 text-base"><Check className="mt-1 size-5 shrink-0"/>{t}</li>)}</ul><Button asChild variant="link" className="mt-4 px-0 text-base"><Link to="/pricing">تفاصيل الأتعاب<ArrowLeft /></Link></Button></div>
    </Reveal></div></section>

    <section className="py-14 md:py-20"><div className="container-site"><Reveal>
      <Heading n="06" label="خطوات التسجيل" title="كل خطوة في مكانها."/>
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{["إنشاء الحساب", "بيانات المالك والسيارة", "رفع المستندات", "المراجعة والدفع", "المتابعة والاستلام"].map((t,i) => <li key={t} className="border-t pt-5"><Ltr className="text-sm text-brass">0{i+1}</Ltr><p className="mt-4 text-lg font-semibold">{t}</p></li>)}</ol>
    </Reveal></div></section>

    <section className="border-y py-12 md:py-16"><div className="container-site"><Reveal className="grid gap-8 lg:grid-cols-2"><div><p className="home-kicker mb-4"><ShieldCheck className="size-5"/>الثقة تبدأ بالوضوح</p><h2 className="text-2xl font-semibold md:text-3xl">تعرف أين وصل طلبك.</h2><p className="mt-4 text-base text-muted-foreground">مستنداتك مرتبطة بطلبك، والملفات النهائية لا تُتاح قبل اعتماد الإدارة واكتمال المعاملة.</p></div><div className="flex flex-wrap content-center items-center gap-3">{(["paid","docs","progress","done"] as const).map(s=><StatusBadge key={s} status={s}/>)}</div></Reveal></div></section>

    <section className="py-14 md:py-20"><div className="container-site"><Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><Heading n="07" label="قبل أن تبدأ" title="أسئلة، بإجابات واضحة."/><Button asChild variant="link" className="px-0 text-base"><Link to="/faq">كل الأسئلة الشائعة<ArrowLeft /></Link></Button></div><Accordion type="single" collapsible>{homeFaq.map((f,i)=><AccordionItem key={f.question} value={String(i)}><AccordionTrigger className="gap-5 py-6 text-start text-lg">{f.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent></AccordionItem>)}</Accordion></Reveal></div></section>

    <section className="border-t bg-card py-14 md:py-20"><div className="container-site"><Reveal className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]"><div className="min-w-0"><p className="home-kicker mb-4">بداية جديدة، بخطوات واضحة</p><h2 className="text-3xl font-semibold md:text-4xl">جاهز لتسجيل سيارتك الجديدة؟</h2><p className="mt-4 text-base text-muted-foreground">دعنا نتولى التفاصيل، وتابع طلبك بكل وضوح.</p></div><div className="shrink-0"><StartButton /><p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><CreditCard className="size-4"/>نموذج تجريبي — لا دفع فعلي</p></div></Reveal></div></section>
  </>;
}