import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Isolates Latin values (email, phone, IBAN, VIN, order no.) inside RTL text. */
export function Ltr({ children, className }: { children: ReactNode; className?: string }) {
  return <bdi dir="ltr" className={cn("ltr-value", className)}>{children}</bdi>;
}
