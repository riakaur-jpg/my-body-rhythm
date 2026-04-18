import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { IntroScreen } from "@/components/wellness/IntroScreen";
import { FactsScreen } from "@/components/wellness/FactsScreen";
import { CompletionScreen } from "@/components/wellness/CompletionScreen";

const Index = () => {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(2, s + 1));
  const exit = () => {
    toast("Exiting activity…", { description: "You can resume anytime." });
  };
  const onDone = () => {
    toast.success("Activity complete!", { description: "Great job taking care of you 💕" });
    setStep(0);
  };
  const onTrackerClick = () => {
    toast("Opening Tracker…", { description: "Redirecting to Tracker Section" });
    window.open("https://web.mantracare.com/women-wellness", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen w-full bg-shell flex items-center justify-center p-4 sm:p-8">
      <h1 className="sr-only">Menstrual Health Awareness Activity</h1>

      <section
        aria-label="Menstrual Health Awareness Activity"
        className="relative w-full max-w-[390px] h-[760px] max-h-[92vh] bg-background rounded-[2.25rem] shadow-card overflow-hidden border border-primary-soft-border"
      >
        {/* Screen container with transition */}
        <div key={step} className="h-full w-full animate-slide-in-right">
          {step === 0 && <IntroScreen onNext={goNext} onBack={exit} />}
          {step === 1 && <FactsScreen onNext={goNext} />}
          {step === 2 && (
            <CompletionScreen onDone={onDone} onTrackerClick={onTrackerClick} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Index;
