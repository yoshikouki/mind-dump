import { Button } from "@/components/ui/button";
import { emotionTone, emotions } from "./emotion";

export const MindDump = () => {
  return (
    <section className="flex min-h-svh w-full flex-col justify-center gap-4">
      <h2 className="text-center font-bold text-xl">
        今どのように感じていますか
      </h2>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-scroll scroll-smooth px-4 pb-10">
        {emotionTone.map((tone) => (
          <div
            key={tone}
            className="w-[98%] max-w-sm flex-shrink-0 snap-center"
          >
            <div className="h-full rounded border bg-card px-4 pt-8 pb-10 shadow">
              <h3 className="mb-2 font-semibold text-lg">{tone}</h3>
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
          </div>
        ))}
      </div>
    </section>
  );
};
