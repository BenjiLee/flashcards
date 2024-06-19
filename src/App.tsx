import React, { useMemo, useState } from 'react';
import './App.css';

const countries = [
  { en: ['Korea'], kr: ['한국'] },
  { en: ['USA'], kr: ['미국'] },
  { en: ['China'], kr: ['중국'] },
  { en: ['Japan'], kr: ['일본'] },
  { en: ['Russia'], kr: ['러시아'] },
  { en: ['Germany'], kr: ['독일'] },
  { en: ['Canada'], kr: ['캐나다'] },
  { en: ['France'], kr: ['프랑스'] },
  { en: ['UK'], kr: ['영국'] },
  { en: ['Italy'], kr: ['이탈리아'] },
  { en: ['Australia'], kr: ['호주'] },
  { en: ['Brazil'], kr: ['브라질'] },
  { en: ['India'], kr: ['인도'] },
  { en: ['person'], kr: ['사람'] },
];

const numbers = [
  { en: ['0'], kr: ['영', '공'] },
  { en: ['1'], kr: ['일'] },
  { en: ['2'], kr: ['이'] },
  { en: ['3'], kr: ['삼'] },
  { en: ['4'], kr: ['사'] },
  { en: ['5'], kr: ['오'] },
  { en: ['6'], kr: ['육'] },
  { en: ['7'], kr: ['칠'] },
  { en: ['8'], kr: ['팔'] },
  { en: ['9'], kr: ['구'] },
  { en: ['10'], kr: ['십'] },
  { en: ['100'], kr: ['백'] },
  { en: ['1,000'], kr: ['천'] },
  { en: ['10,000'], kr: ['만'] },
];

const jobs = [
  { en: ['doctor'], kr: ['의사'] },
  { en: ['teacher'], kr: ['선생님'] },
  { en: ['student'], kr: ['학생'] },
  { en: ['engineer'], kr: ['기술자'] },
  { en: ['police officer'], kr: ['경찰'] },
  { en: ['firefighter'], kr: ['소방관'] },
  { en: ['nurse'], kr: ['간호사'] },
  { en: ['lawyer'], kr: ['변호사'] },
  { en: ['chef'], kr: ['요리사'] },
  { en: ['artist'], kr: ['예술가'] },
  { en: ['singer'], kr: ['가수'] },
  { en: ['reporter'], kr: ['기자'] },
  { en: ['military'], kr: ['군인'] },
  { en: ['teacher'], kr: ['선생님'] },
  { en: ['office worker'], kr: ['회사원'] },
  { en: ['cook'], kr: ['요리사'] },
  { en: ['researcher'], kr: ['연구원'] },
];

const items = [
  { en: ['bag'], kr: ['가방'] },
  { en: ['chair'], kr: ['의자'] },
  { en: ['desk'], kr: ['책상'] },
  { en: ['laptop'], kr: ['노트북'] },
  { en: ['map'], kr: ['지도'] },
  { en: ['notebook'], kr: ['공책'] },
  { en: ['cell phone'], kr: ['휴대폰'] },
  { en: ['pencil'], kr: ['연필'] },
  { en: ['eraser'], kr: ['지우개'] },
  { en: ['window'], kr: ['창문'] },
  { en: ['hat/cap'], kr: ['모자'] },
  { en: ['computer'], kr: ['컴퓨터'] },
  { en: ['watch/clock'], kr: ['시계'] },
  { en: ['book'], kr: ['책'] },
  { en: ['pencil case'], kr: ['필통'] },
  { en: ['pen'], kr: ['볼펜'] },
  { en: ['wallet'], kr: ['지갑'] },
  { en: ['money'], kr: ['돈'] },
  { en: ['tissue'], kr: ['휴지'] },
  { en: ['umbrella'], kr: ['우산'] },
  { en: ['camera'], kr: ['카메라'] },
  { en: ['car'], kr: ['차'] },
  { en: ['water'], kr: ['물'] },
  { en: ['mirror'], kr: ['거울'] },
  { en: ['key'], kr: ['열쇠'] },
  { en: ['business card'], kr: ['명함'] },
  { en: ['picture'], kr: ['사진'] },
  { en: ['eye glasses'], kr: ['안경'] },
  { en: ['card'], kr: ['카드'] },
  { en: ['dictionary'], kr: ['사전'] },
];

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
