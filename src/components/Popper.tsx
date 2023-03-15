import { useState } from 'react';
import SettingsIcon from '../assets/icons/SettingsIcon';
import List from './List';

const Popper = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                title="Settings"
                className={`z-50 fixed laptop:top-8 top-4 laptop:right-8 right-4 rounded-full font-medium hover:text-opacity-100 focus:outline-0`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-center h-8 w-8 rounded-full default-bg b dark:text-tertiary-dark text-tertiary-light d-h hover:animate-spin-soft">
                    <SettingsIcon size={24} />
                </div>
            </button>
            <div
                className={`b-t b-l -z-1 tablet:w-72 w-full tablet:overflow-hidden overflow-auto default-bg tablet:h-full h-1/2 tablet:right-0 bottom-0 ${
                    isOpen ? 'fixed' : 'hidden'
                }`}
            >
                <div className="p-4 pt-8 flex flex-col gap-4 ">
                    <div className="font-bold text-lg default-text">
                        Settings
                    </div>
                    <div className="flex flex-col gap-2 items-start cursor-default">
                        <div>Theme</div>
                        <List />
                    </div>
                    <div className="flex flex-col gap-2 items-start cursor-default">
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
        </>
    );
};

export default Popper;
