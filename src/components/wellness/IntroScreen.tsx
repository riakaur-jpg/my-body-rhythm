import { ScreenHeader } from "./ScreenHeader";
import { PrimaryCTA } from "./PrimaryCTA";

interface IntroScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const IntroScreen = ({ onNext, onBack }: IntroScreenProps) => {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader step={0} total={3} showBack onBack={onBack} />

      <div className="flex-1 px-6 pt-4 pb-6 animate-fade-in-up">
        <h1 className="font-serif-display text-[28px] leading-tight text-foreground">
          Menstrual Health Awareness
        </h1>
        <p className="mt-2 text-primary font-medium">
          Know your body, love your body!
        </p>

        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          Welcome to your Menstrual Health Awareness Activity! 🌸 Your menstrual
          health is a window into your overall wellbeing. Understanding what's
          normal, what's not, and how to take care of yourself is one of the
          most powerful things you can do for your health. Let's learn together
          — no awkwardness, just facts and care! 💕
        </p>
      </div>

      <div className="px-6 pb-7">
        <PrimaryCTA onClick={onNext}>Let's Begin →</PrimaryCTA>
      </div>
    </div>
  );
};
