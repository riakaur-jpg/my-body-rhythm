import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PrimaryCTA = ({ children, onClick, className }: PrimaryCTAProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full inline-flex items-center justify-center gap-2",
        "h-14 px-6 rounded-full",
        "bg-primary text-primary-foreground font-semibold text-base",
        "shadow-card hover:shadow-soft",
        "transition-all duration-200 active:scale-[0.98] hover:brightness-105",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {children}
    </button>
  );
};

export { ArrowRight };
