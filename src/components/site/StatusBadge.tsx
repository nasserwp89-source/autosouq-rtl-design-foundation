import { cn } from "@/lib/utils";

export type OrderStatus = "paid" | "docs" | "progress" | "done";

const map: Record<OrderStatus, { label: string; cls: string }> = {
  paid: { label: "مدفوع", cls: "text-status-paid border-status-paid/40 bg-status-paid/10" },
  docs: { label: "مطلوب استكمال مستندات", cls: "text-status-docs border-status-docs/40 bg-status-docs/10" },
  progress: { label: "قيد التنفيذ", cls: "text-status-progress border-status-progress/40 bg-status-progress/10" },
  done: { label: "مكتمل", cls: "text-status-done border-status-done/40 bg-status-done/10" },
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  const s = map[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold", s.cls)}>
      <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden />
      {s.label}
    </span>
  );
}
