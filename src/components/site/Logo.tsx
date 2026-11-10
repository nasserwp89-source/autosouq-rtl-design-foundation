import { Link } from "@tanstack/react-router";
import logo from "@/assets/autosouq-logo.png.asset.json";
import { cn } from "@/lib/utils";

/** Original logo file, used as-is (no redraw, no recolor). Min on-screen width 90px. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="AutoSouq — الرئيسية" className={cn("inline-flex shrink-0", className)}>
      <img
        src={logo.url}
        alt="AutoSouq"
        width={574}
        height={173}
        className="h-auto w-[110px] min-w-[90px] rounded-sm md:w-[128px]"
      />
    </Link>
  );
}
