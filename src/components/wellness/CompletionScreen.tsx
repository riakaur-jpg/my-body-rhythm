import { ChevronRight } from "lucide-react";
import { ScreenHeader } from "./ScreenHeader";
import { PrimaryCTA } from "./PrimaryCTA";

interface CompletionScreenProps {
  onDone: () => void;
  onTrackerClick: () => void;
}

export const CompletionScreen = ({ onDone, onTrackerClick }: CompletionScreenProps) => {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader step={2} total={3} />

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6 animate-fade-in-up">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary-soft border border-primary-soft-border flex items-center justify-center text-5xl shadow-soft animate-float">
            🌸
          </div>
        </div>

        {/* Tip box */}
        <div className="mt-7 rounded-2xl bg-primary-soft border-l-4 border-primary p-4">
          <p className="text-[14px] leading-relaxed text-foreground">
            <span className="font-semibold">💡 Note down your period start date every month.</span>{" "}
            This simple habit helps you understand your cycle and spot anything
            unusual early.
          </p>
        </div>

        {/* Clickable tracker bar */}
        <button
          type="button"
          onClick={onTrackerClick}
          className="mt-4 w-full text-left rounded-2xl bg-card border border-primary-soft-border p-4 shadow-soft transition-all duration-200 hover:shadow-card hover:border-primary/60 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>📲</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-foreground text-[15px]">
                Track your periods
              </div>
              <div className="text-[12.5px] text-muted-foreground mt-0.5">
                Go to Tracker Section
              </div>
            </div>
            <ChevronRight className="h-6 w-6 text-primary shrink-0" strokeWidth={2.5} />
          </div>
        </button>

        <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground text-center">
          Understanding your body is an act of self love. Never ignore what your
          body is trying to tell you — you deserve to feel your best! 💕
        </p>
      </div>

      <div className="px-6 pb-7">
        <PrimaryCTA onClick={onDone}>Done ✅</PrimaryCTA>
      </div>
    </div>
  );
};
