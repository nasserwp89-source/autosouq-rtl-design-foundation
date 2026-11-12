export const mainNav = [
  { to: "/", label: "الرئيسية" },
  { to: "/service", label: "الخدمات" },
  { to: "/how-it-works", label: "طريقة العمل" },
  { to: "/pricing", label: "الأسعار" },
  { to: "/about", label: "من نحن" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export const legalNav = [
  { to: "/privacy", label: "سياسة الخصوصية" },
  { to: "/terms", label: "الشروط والأحكام" },
] as const;

/** Four audiences. Only individuals is active in this prototype. */
export const audiences = [
  { label: "الأفراد", active: true },
  { label: "تجار السيارات", active: false },
  { label: "الشركات", active: false },
  { label: "المسوقون بالعمولة", active: false },
] as const;

export const demoContact = {
  email: "demo@autosouq.example",
  phone: "+49 000 000 000",
};
