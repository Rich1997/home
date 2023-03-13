import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import SettingsIcon from '../assets/icons/SettingsIcon';
import List from './List';

const Settings = () => {
    return (
        <div className="text-sm select-none">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            title="Settings"
                            className={`
                ${
                    open ? '' : 'text-opacity-90'
                } fixed top-4 right-4 rounded-full font-medium hover:text-opacity-100 focus:outline-0`}
                        >
                            <div className="flex items-center justify-center h-8 w-8 rounded-full default-bg b dark:text-tertiary-dark text-tertiary-light d-h hover:animate-spin-soft">
                                <SettingsIcon size={24} />
                            </div>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="fixed top-16 right-4 z-10">
                                <div className="rounded-md ml-8 overflow-hidden default-bg d-t-t b">
                                    <div className="p-4 flex flex-col gap-4 ">
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
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default Settings;
