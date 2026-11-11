export const registrationOffer = {
  fee: 70,
  vatIncluded: true,
  officeFeesIncluded: false,
  targetMinutes: { min: 15, max: 30 },
  targetStartsAt: "progress",
  workingHoursOnly: true,
  holidaysExcluded: true,
  guaranteed: false,
} as const;

export const homeFaq = [
  { question: "ما الخدمة المتاحة حالياً؟", answer: "خدمتنا الحالية هي إدارة طلب تسجيل السيارات الجديدة في ألمانيا فقط. خدمات الفئات الأخرى ستُفعّل لاحقاً." },
  { question: "هل رسوم دائرة التسجيل مشمولة؟", answer: "لا. أتعاب المنصة 70 € شاملة ضريبة القيمة المضافة، ورسوم دائرة التسجيل منفصلة وتحصّلها الدائرة مباشرة من صاحب السيارة." },
  { question: "ما المستندات المطلوبة؟", answer: "قائمة المستندات النهائية تحتاج اعتماد مالك المشروع. لا نعرض قائمة تجريبية باعتبارها متطلبات قانونية معتمدة." },
  { question: "كيف أتابع الطلب وأستلم المستندات؟", answer: "تتضمن الرحلة متابعة حالة الطلب واستكمال المستندات عند الحاجة. تصبح المستندات النهائية متاحة بعد اعتماد الإدارة واكتمال الطلب فقط." },
] as const;