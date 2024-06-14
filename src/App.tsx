import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const flashcardData = [
  {
    en: ['zero'],
    kr: ['영', '공'],
  },
  {
    en: ['one'],
    kr: ['일'],
  },
  {
    en: ['two'],
    kr: ['이'],
  },
  {
    en: ['three'],
    kr: ['삼'],
  },
  {
    en: ['four'],
    kr: ['사'],
  },
  {
    en: ['five'],
    kr: ['오'],
  },
  {
    en: ['six'],
    kr: ['육'],
  },
  {
    en: ['seven'],
    kr: ['칠'],
  },
  {
    en: ['eight'],
    kr: ['팔'],
  },
  {
    en: ['nine'],
    kr: ['구'],
  },
  {
    en: ['ten'],
    kr: ['십'],
  },
  {
    en: ['hundred'],
    kr: ['백'],
  },
  {
    en: ['thousand'],
    kr: ['천'],
  },
  {
    en: ['ten thousand'],
    kr: ['만'],
  },
];

enum Side {
  Front = 'Front',
  Back = 'Back',
}

const getRandomFlashcard = () => {
  const randomIndex = Math.floor(Math.random() * flashcardData.length);
  return flashcardData[randomIndex];
};

const App = () => {
  const [currentCard, setCurrentCard] = useState<any>();
  const [side, setSide] = useState(Side.Front);
  const [cardIndex, setCardIndex] = useState(0);

  const shuffledFlashcardData = flashcardData.sort(() => Math.random() - 0.5);

  const back = () => {
    if (side === Side.Front) {
      setSide(Side.Back);
      let newCardIndex = cardIndex - 1;
      if (newCardIndex < 0) {
        newCardIndex = shuffledFlashcardData.length - 1;
      }
      setCardIndex(newCardIndex);
      setCurrentCard(shuffledFlashcardData[newCardIndex]);
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
      setCurrentCard(shuffledFlashcardData[cardIndex]);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-red-700'>
      <div
        className='h-screen w-1/2  absolute top-0 left-0 flex-1 flex items-center justify-center'
        onClick={back}
      ><p>⬅️</p>
      </div>
      <div
        className='z-0 w-1/2 h-screen  absolute top-0 right-0 flex-1 flex items-center justify-center'
        onClick={next}
      ><p>➡️</p>
      </div>
      <div className='z-1 text-4xl font-bold text-center'>
        <p>{currentCard?.kr}</p>
        <p>{side === Side.Front ? '_' : currentCard?.en}</p>

      </div>

      <div className={' absolute bottom-0 '}>
        <p>{'cardIndex:' + cardIndex}</p>
        <p>{'side:' + side}</p>
      </div>

    </div>
  );
};

export default App;
