// components/SettingsDrawer.js

import { useState } from 'react';

const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
            <li className='mb-2'><a href='#' className='text-blue-500'>Profile</a></li>
            <li className='mb-2'><a href='#' className='text-blue-500'>Account</a></li>
            <li className='mb-2'><a href='#' className='text-blue-500'>Notifications</a></li>
            <li className='mb-2'><a href='#' className='text-blue-500'>Privacy</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;
