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
    <>
      <button onClick={toggleDrawer} className='fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded'>
        Settings
      </button>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
    </>
  );
};

export default SettingsDrawer;
