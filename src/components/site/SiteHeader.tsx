import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { mainNav } from "@/lib/site-nav";
import { Logo } from "./Logo";

const navLink =
  "relative px-1 py-2 text-[0.95rem] text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-foreground after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-brass after:transition-transform data-[status=active]:after:scale-x-100";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <div className="container-site grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between md:h-20">
        <Logo />

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-5 xl:flex">
          {mainNav.map((item) => (
            <a key={item.to} href={item.to === "/" ? "/" : item.to === "/service" ? "/service" : `/#${item.to.slice(1)}`} className={navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="ghost" className="hidden min-h-11 sm:inline-flex">
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild className="hidden min-h-11 sm:inline-flex">
            <Link to="/register">ابدأ تسجيل سيارتك</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="size-11 xl:hidden" aria-label="فتح القائمة">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex h-dvh w-[86%] max-w-sm flex-col gap-0 overflow-y-auto border-s bg-background p-0 [&>button:first-of-type]:hidden"
            >
              <div className="grid h-[72px] shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center border-b px-5">
                <SheetTitle className="sr-only">القائمة</SheetTitle>
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="size-11" aria-label="إغلاق القائمة">
                    <X />
                  </Button>
                </SheetClose>
              </div>
              <nav aria-label="قائمة الهاتف" className="flex flex-col px-5 py-4">
                {mainNav.map((item) => (
                  <a
                    key={item.to}
                    href={item.to === "/" ? "/" : item.to === "/service" ? "/service" : `/#${item.to.slice(1)}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3.5 text-lg text-foreground/80 transition-colors hover:text-brass"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex shrink-0 flex-col gap-3 border-t p-5">
                <Button asChild size="lg" onClick={() => setOpen(false)}>
                  <Link to="/register">ابدأ تسجيل سيارتك</Link>
                </Button>
                <Button asChild variant="outline" size="lg" onClick={() => setOpen(false)}>
                  <Link to="/login">تسجيل الدخول</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
