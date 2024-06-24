export type FlashCardData = {
  en: string[];
  kr: string[];
};

export type FlashCard = {
  key: string;
  title: string;
  data: FlashCardData[];
};

export const FlashCardSectionKeys = {
  Countries: 'countries',
  Numbers: 'numbers',
  Jobs: 'jobs',
  Things: 'things',
  Food: 'food',
};
