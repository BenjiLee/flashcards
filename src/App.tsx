import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const flashcardData = [
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
const getRandomFlashcard = () => {
  const randomIndex = Math.floor(Math.random() * flashcardData.length);
  return flashcardData[randomIndex];
};

const App = () => {
  const [currentCard, setCurrentCard] = useState<any>();

  const nextCard = () => {
    const randomCard = getRandomFlashcard();
    setCurrentCard(randomCard);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-red-700'>
      <div
        className='h-screen w-1/2  absolute top-0 left-0 flex-1 flex items-center justify-center'
        onClick={nextCard}
      ><p>⬅️</p>
      </div>
      <div
        className='z-0 w-1/2 h-screen  absolute top-0 right-0 flex-1 flex items-center justify-center'
        onClick={nextCard}
      ><p>➡️</p>
      </div>
      <div className='z-1 text-4xl font-bold text-center' onClick={nextCard}>
        <p>{currentCard?.en}</p>
      </div>

    </div>
  );
};

export default App;
