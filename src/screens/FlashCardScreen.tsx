import React, { useMemo, useState } from 'react';
import { FlashCards } from '../data/data';
import SettingsDrawer from '../components/SettingsDrawer';

const flashcardData = [...FlashCards.countries.data];

enum Side {
  Front = 'Front',
  Back = 'Back',
}

const App = () => {
  const [side, setSide] = useState(Side.Front);
  const [cardIndex, setCardIndex] = useState(0);
  const [flashCardSections, setFlashCardSections] = useState(Object.keys(FlashCards));

  const shuffledFlashcardData = useMemo(() => {
    const flashcardData: any[] = [];
    Object.keys(FlashCards).forEach((flashCardKey) => {
      if (flashCardSections.includes(flashCardKey)) {
        flashcardData.push(...FlashCards[flashCardKey].data);
      }
    });
    flashcardData.sort(() => Math.random() - 0.5);
    return flashcardData;
  }, [flashCardSections]);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-300 border">
      <div
        className="h-screen w-1/2  absolute top-0 left-0 flex-1 flex items-center pl-10"
        onClick={back}
      >
        <p className={'text-4xl'}>{'<'}️</p>
      </div>
      <div
        className="z-0 w-1/2 h-screen absolute top-0 right-0 flex-1 flex items-center justify-end pr-10"
        onClick={next}
      >
        <p className={'text-4xl'}>{'>'}️</p>
      </div>
      <div className="z-1 m-5 pb-14 pt-14 w-full bg-red-300 text-center border-1 border-black">
        <p className={'p-5 font-bold  text-8xl'}>{getStringForList(currentCard?.kr)}</p>
        <div className={'text-6xl'}>
          {side === Side.Front ? (
            <div>&nbsp;</div>
          ) : (
            <p className={'text-6xl'}>{getStringForList(currentCard.en)}</p>
          )}
        </div>
      </div>
      <SettingsDrawer flashCardSections={flashCardSections} />
    </div>
  );
};

export default App;
