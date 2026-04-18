import { ArrowLeft } from "lucide-react";

interface ScreenHeaderProps {
  step: number;
  total: number;
  showBack?: boolean;
  onBack?: () => void;
}

import { StepDots } from "./StepDots";

export const ScreenHeader = ({ step, total, showBack, onBack }: ScreenHeaderProps) => {
  return (
    <div className="relative flex items-center justify-center pt-5 pb-4 px-5">
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Exit activity"
          className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:text-primary hover:bg-primary-soft transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      )}
      <StepDots total={total} current={step} />
    </div>
  );
};
