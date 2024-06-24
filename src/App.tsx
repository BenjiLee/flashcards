import React, { useMemo, useState } from 'react';
import SettingsDrawer from './components/SettingsDrawer';
import { FlashCards } from './data/data';
import FlashCardScreen from './screens/FlashCardScreen';

const flashcardData = [...FlashCards.countries.data];

enum Side {
  Front = 'Front',
  Back = 'Back',
}

const App = () => {
  const shuffledFlashcardData = useMemo(() => flashcardData.sort(() => Math.random() - 0.5), []);
  // const shuffledFlashcardData = flashcardData;

  const [side, setSide] = useState(Side.Front);
  const [cardIndex, setCardIndex] = useState(0);

  const back = () => {
    if (side === Side.Front) {
      setSide(Side.Back);
      let newCardIndex = cardIndex - 1;
      if (newCardIndex < 0) {
        newCardIndex = shuffledFlashcardData.length - 1;
      }
      setCardIndex(newCardIndex);
      return;
    }
    if (side === Side.Back) {
      setSide(Side.Front);
    }
  };

  const next = () => {
    if (side === Side.Front) {
      setSide(Side.Back);
      return;
    }
    if (side === Side.Back) {
      setSide(Side.Front);
      let newCardIndex = cardIndex + 1;
      if (newCardIndex > shuffledFlashcardData.length - 1) {
        newCardIndex = 0;
      }
      setCardIndex(newCardIndex);
    }
  };

  // FIXME doesnt persist between next/back
  const getStringForList = (listOfStrings?: string[]) => {
    if (!listOfStrings) return '';
    const randomIndex = Math.floor(Math.random() * listOfStrings.length);
    return listOfStrings[randomIndex];
  };

  const currentCard = shuffledFlashcardData[cardIndex];

  return (
    <div>
      <FlashCardScreen />
      <SettingsDrawer />
    </div>
  );
};

export default App;
