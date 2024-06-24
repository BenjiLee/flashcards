import { useState } from 'react';
import { FlashCards } from '../data/data';

interface Props {
  flashCardSections: string[];
}

const SettingsDrawer = ({ flashCardSections }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checklist, setChecklist] = useState({});

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // @ts-ignore FIXME
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecklist((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const checkbox = (sectionKey: string) => (
    <li className="mb-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          name={sectionKey}
          // @ts-ignore FIXME
          checked={checklist[sectionKey]}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2 text-gray-700">{sectionKey}</span>
      </label>
    </li>
  );

  const MenuButton = () => {
    return (
      <button
        onClick={toggleDrawer}
        className={`fixed top-4 -right-10 z-50 bg-white text-white p-2`}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111111">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111111">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 -left-64 w-64 h-full bg-white transform transition-transform ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
      >
        <MenuButton />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <ul>{Object.values(flashCardSections).map((section) => checkbox(section))}</ul>
        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;
