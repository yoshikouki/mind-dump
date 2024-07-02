import { Button } from "@/components/ui/button";
import { emotionTone, emotions } from "./emotion";

export const MindDump = () => {
  return (
    <section className="flex min-h-svh w-full max-w-sm flex-col justify-center gap-4 p-4">
      <h2>今どのように感じていますか</h2>
      {emotionTone.map((tone) => (
        <div key={tone} className="w-full space-y-2">
          <h3>{tone}</h3>
          <div className="grid w-full grid-cols-2 gap-2">
            {emotions
              .filter((emotion) => emotion.tone === tone)
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
