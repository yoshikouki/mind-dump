import { Button } from "@/components/ui/button";
import { emotionValence, emotions } from "./emotion";

export const MindDump = () => {
  return (
    <section className="flex min-h-svh w-full max-w-sm flex-col justify-center gap-4 p-4">
      <h2>今どのように感じていますか</h2>
      {emotionValence.map((valence) => (
        <div key={valence} className="w-full space-y-2">
          <h3>{valence}</h3>
          <div className="grid w-full grid-cols-2 gap-2">
            {emotions
              .filter((emotion) => emotion.valence === valence)
              .map((emotion) => (
                <Button
                  key={emotion.key}
                  variant="secondary"
                  size="sm"
                  className="flex animate-fade-in items-center gap-1"
                >
                  <span role="img" aria-label={emotion.label}>
                    {emotion.emoji}
                  </span>
                  {emotion.label}
                </Button>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};
