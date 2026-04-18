import { cn } from "@/lib/utils";

interface StepDotsProps {
  total: number;
  current: number; // 0-indexed
  className?: string;
}

export const StepDots = ({ total, current, className }: StepDotsProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)} aria-label={`Step ${current + 1} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => {
        const active = i === current;
        return (
          <span
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              active
                ? "w-7 bg-primary"
                : "w-2 bg-primary-soft border border-primary-soft-border"
            )}
          />
        );
      })}
    </div>
  );
};
