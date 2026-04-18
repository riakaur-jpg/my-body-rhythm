import { ScreenHeader } from "./ScreenHeader";
import { PrimaryCTA } from "./PrimaryCTA";

interface FactsScreenProps {
  onNext: () => void;
}

const FACTS = [
  {
    icon: "🗓️",
    title: "Normal cycle length",
    body: "A healthy cycle is 21–35 days. Anything outside this consistently should be discussed with your doctor.",
  },
  {
    icon: "🩸",
    title: "Normal period duration",
    body: "Most periods last 3–7 days. Bleeding beyond 7 days is worth checking.",
  },
  {
    icon: "💊",
    title: "Iron matters",
    body: "Heavy periods can cause iron deficiency. Eat spinach, lentils & nuts during your period.",
  },
  {
    icon: "🧘",
    title: "Period pain",
    body: "Mild cramps are normal. Severe pain that stops your daily activities is NOT normal.",
  },
  {
    icon: "🌡️",
    title: "PMS is real",
    body: "Mood swings & bloating before periods are common. Sleep well, eat well & move gently.",
  },
];

export const FactsScreen = ({ onNext }: FactsScreenProps) => {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader step={1} total={3} />

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-4 animate-fade-in-up">
        <h2 className="font-serif-display text-[26px] leading-tight text-foreground">
          What you should know 📖
        </h2>
        <p className="mt-2 text-[14px] text-muted-foreground">
          Here are some important facts every woman should be aware of!
        </p>

        <ul className="mt-5 space-y-3">
          {FACTS.map((f, i) => (
            <li
              key={f.title}
              className="rounded-2xl bg-card border border-primary-soft-border p-4 shadow-soft"
              style={{ animation: `fade-in-up 0.4s ${i * 60}ms both` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none mt-0.5" aria-hidden>
                  {f.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-[15px]">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-5 bg-background border-t border-primary-soft-border/60">
        <PrimaryCTA onClick={onNext}>Next →</PrimaryCTA>
      </div>
    </div>
  );
};
