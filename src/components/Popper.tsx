import { useState } from 'react';
import SettingsIcon from '../assets/icons/SettingsIcon';
import List from './List';
import ThemeSwitch from './ThemeSwitch';

const Popper = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                title="Settings"
                className={`z-50 fixed top-8 right-6 rounded-full font-medium hover:text-opacity-100 focus:outline-0`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-center h-7 w-7 rounded-full default-bg dark:text-secondary-dark text-secondary-light d-t-h hover:animate-spin-soft">
                    <SettingsIcon size={24} />
                </div>
            </button>
            <div
                className={`-z-1 tablet:w-72 w-full tablet:overflow-hidden overflow-auto default-bg tablet:h-full h-1/2 tablet:right-0 bottom-0 b-t b-l ${
                    isOpen ? 'fixed' : 'hidden'
                }`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="pt-8 flex flex-col gap-4 ">
                        <div className="px-6 pb-6 font-bold text-lg default-text b-b">
                            Settings
                        </div>
                        <div className="px-6 flex flex-col gap-2 items-start cursor-default d-s-t h4">
                            <div>Theme</div>

                            <ThemeSwitch />
                        </div>
                        <div className="px-6 flex flex-col gap-2 items-start cursor-default">
                            <div>Font</div>
                        </div>
                    </div>
                    <div className="p-6 default-text dark:bg-surface-dark bg-surface-light">
                        <span className="flex justify-between items-center gap-4">
                            <span>home version 2.0</span>
                            <div className="flex gap-4">
                                <a
                                    href="##"
                                    className="transition duration-150 ease-in-out"
                                >
                                    {/* <GitHubIcon size={16} /> */}
                                </a>
                                <a
                                    href="##"
                                    className="transition duration-150 ease-in-out"
                                >
                                    {/* <LinkedinIcon size={16} /> */}
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popper;
