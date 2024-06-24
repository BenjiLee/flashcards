import React, { useMemo, useState } from 'react';
import SettingsDrawer from './components/SettingsDrawer';
import { FlashCards } from './data/data';
import FlashCardScreen from './screens/FlashCardScreen';

const flashcardData = [...FlashCards.countries.data];

const App = () => {
  const shuffledFlashcardData = useMemo(() => flashcardData.sort(() => Math.random() - 0.5), []);
  // const shuffledFlashcardData = flashcardData;

  const [flashCardData, setFlashCardData] = useState(flashcardData);
  const [flashCardSections, setFlashCardSections] = useState(Object.keys(FlashCards));

  return (
    <div>
      <FlashCardScreen />
      {/*<SettingsDrawer flashCardSections={flashCardSections} />*/}
    </div>
  );
};

export default App;
