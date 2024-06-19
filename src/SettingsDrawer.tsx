// components/SettingsDrawer.js

import { useState } from 'react';

const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checklist, setChecklist] = useState({});

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecklist((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const checkbox = (key: string) => <li className='mb-2'>
    <label className='flex items-center'>
      <input
        type='checkbox'
        name={key}
        checked={checklist[key]}
        onChange={handleCheckboxChange}
        className='form-checkbox h-5 w-5 text-blue-600'
      />
      <span className='ml-2 text-gray-700'>Profile</span>
    </label>
  </li>;

  return (
    <div
      className={`fixed top-0 left-100 w-64 h-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleDrawer}
              className={`fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {isOpen ? (
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        )}
      </button>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Settings</h2>
        <button onClick={toggleDrawer} className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'>
          Close
        </button>
        <ul>
          {checkbox('Countries')}
          {checkbox('profile')}
        </ul>
      </div>
    </div>
  );
};

export default SettingsDrawer;
