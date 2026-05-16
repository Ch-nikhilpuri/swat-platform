import { Badge } from "@/components/ui/Badge";
import { Signal } from "@/components/ui/Signal";
import { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  status = "online",
  right,
}: {
  title: string;
  description: string;
  status?: "online" | "coming";
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="font-display text-[28px] leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-1 text-[13px] text-ink-100/80 max-w-3xl">{description}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {right}
          <Badge variant={status === "online" ? "positive" : "signal"}>
            <Signal color={status === "online" ? "green" : "amber"} size={5} />
            {status === "online" ? "Online" : "Coming Online"}
          </Badge>
        </div>
      </div>
    </div>
  );
}
