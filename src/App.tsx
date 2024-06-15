import React, { useMemo, useState } from 'react';
import './App.css';
import { countries, items, jobs, numbers } from './data';
import SettingsDrawer from './SettingsDrawer';


const flashcardData = [...countries, ...numbers, ...jobs, ...items];

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
    <div className='flex items-center justify-center min-h-screen bg-red-300'>

      <div
        className='h-screen w-1/2  absolute top-0 left-0 flex-1 flex items-center justify-center'
        onClick={back}
      ><p className={'text-4xl'}>{'<'}️</p>
      </div>
      <div
        className='z-0 w-1/2 h-screen  absolute top-0 right-0 flex-1 flex items-center justify-center'
        onClick={next}
      ><p className={'text-4xl'}>{'>'}️</p>
      </div>
      <div className='z-1 text-9xl text-center'>
        <p className={'p-5 font-bold '}>{getStringForList(currentCard?.kr)}</p>
        {side === Side.Front ? <div>&nbsp;</div> : <p>{getStringForList(currentCard.en)}</p>}
      </div>
      <SettingsDrawer />


      {/*<div className={' absolute bottom-0 '}>*/}
      {/*  <p>{'cardIndex:' + cardIndex}</p>*/}
      {/*  <p>{'side:' + side}</p>*/}
      {/*  <p>{'cur:' + JSON.stringify(shuffledFlashcardData[cardIndex])}</p>*/}
      {/*  <p>{'next:' + JSON.stringify(shuffledFlashcardData[cardIndex + 1])}</p>*/}
      {/*  <p>{'prev:' + JSON.stringify(shuffledFlashcardData[cardIndex - 1])}</p>*/}
      {/*</div>*/}

    </div>
  );
};

export default App;
