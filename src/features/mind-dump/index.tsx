import { Button } from "@/components/ui/button";
import { emotions } from "./emotion";

export const MindDump = () => {
  return (
    <div className="flex max-w-sm flex-col gap-4 p-4">
      <h2>今どのように感じていますか</h2>
      <div className="flex flex-wrap gap-2">
        {emotions.map((emotion) => (
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
  );
};
