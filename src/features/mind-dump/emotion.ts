export const emotionValence = [
  "positive",
  "neutral",
  "negative",
  "ambiguous",
] as const;
export type EmotionValence = (typeof emotionValence)[number];
export const emotionDirection = ["outward", "inward", "mixed"] as const;
export type EmotionDirection = (typeof emotionDirection)[number];

export type Emotion = {
  key: string;
  label: string;
  valence: EmotionValence;
  direction: EmotionDirection;
};

export const emotions: Emotion[] = [
  {
    key: "satisfaction",
    label: "充足",
    valence: "positive",
    direction: "inward",
  },
  {
    key: "happiness",
    label: "幸せ",
    valence: "positive",
    direction: "inward",
  },
  {
    key: "contentment",
    label: "満足",
    valence: "positive",
    direction: "inward",
  },
  {
    key: "confidence",
    label: "自信",
    valence: "positive",
    direction: "inward",
  },
  {
    key: "pride",
    label: "誇り",
    valence: "positive",
    direction: "inward",
  },
  {
    key: "courage",
    label: "勇敢",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "hope",
    label: "希望",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "passion",
    label: "情熱",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "joy",
    label: "愉快",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "gratitude",
    label: "感謝",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "enjoyment",
    label: "楽しい",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "excitement",
    label: "興奮",
    valence: "positive",
    direction: "outward",
  },
  {
    key: "anxiety",
    label: "不安",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "loneliness",
    label: "孤独",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "shame",
    label: "恥ずかしい",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "sadness",
    label: "悲しい",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "depression",
    label: "消沈",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "exhaustion",
    label: "疲弊",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "despair",
    label: "絶望",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "guilt",
    label: "罪悪感",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "disappointment",
    label: "落胆",
    valence: "negative",
    direction: "inward",
  },
  {
    key: "irritation",
    label: "いら立ち",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "frustration",
    label: "うんざり",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "stress",
    label: "ストレス",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "dissatisfaction",
    label: "不満",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "jealousy",
    label: "嫉妬",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "worry",
    label: "心配",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "anger",
    label: "怒り",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "fear",
    label: "恐怖",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "concern",
    label: "憂慮",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "pressure",
    label: "重圧",
    valence: "negative",
    direction: "outward",
  },
  {
    key: "calmness",
    label: "冷静",
    valence: "neutral",
    direction: "inward",
  },
  {
    key: "confusion",
    label: "困惑",
    valence: "neutral",
    direction: "inward",
  },
  {
    key: "apathy",
    label: "無関心",
    valence: "neutral",
    direction: "inward",
  },
  {
    key: "relief",
    label: "安心",
    valence: "neutral",
    direction: "outward",
  },
  {
    key: "calm",
    label: "穏やか",
    valence: "neutral",
    direction: "outward",
  },
  {
    key: "surprise",
    label: "驚き",
    valence: "neutral",
    direction: "outward",
  },
];

export const sortEmotions = (emotions: Emotion[]): Emotion[] => {
  const valenceOrder: Record<EmotionValence, number> = {
    positive: 0,
    negative: 1,
    ambiguous: 2,
    neutral: 3,
  };
  const directionOrder: Record<EmotionDirection, number> = {
    inward: 0,
    mixed: 1,
    outward: 2,
  };
  return [...emotions].sort((a, b) => {
    // 1. order by valence
    if (valenceOrder[a.valence] !== valenceOrder[b.valence]) {
      return valenceOrder[a.valence] - valenceOrder[b.valence];
    }
    // 2. order by direction
    if (directionOrder[a.direction] !== directionOrder[b.direction]) {
      return directionOrder[a.direction] - directionOrder[b.direction];
    }
    // 3. order by label
    return a.label.localeCompare(b.label);
  });
};
