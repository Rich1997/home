import { Listbox, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import ExpandIcon from '../assets/icons/ExpandIcon';
import { Theme, useTheme } from '../context/ThemeContext';
import { themes } from '../utils/constants';

const ThemePickerListbox = () => {
    const { theme, setTheme } = useTheme();
    const op = localStorage.getItem('homeTheme');
    const [selected, setSelected] = useState(
        op === 'light' ? themes[0] : themes[1]
    );

    useEffect(() => {
        localStorage.setItem('homeTheme', theme);
    }, [theme]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative w-full">
                <Listbox.Button className="relative flex items-center justify-between gap-2 w-full cursor-pointer rounded-md b py-1 px-3 text-left d-t-h">
                    <span className="truncate">{selected.option}</span>
                    <span className="pointer-events-none pt-0.5">
                        <ExpandIcon size={6} />
                    </span>
                </Listbox.Button>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                >
                    <Listbox.Options className="z-30 p-2 absolute w-full decoration-none b mt-1 overflow-auto rounded-md default-bg">
                        {themes.map((theme, themeIdx) => (
                            <Listbox.Option
                                key={themeIdx}
                                className={({ active, selected }) =>
                                    `relative cursor-pointer select-none py-1 px-2 rounded ${
                                        active
                                            ? 'd-t-h dark:bg-surface-dark bg-surface-light'
                                            : ''
                                    }
                                    ${selected ? 'default-text' : ''}`
                                }
                                value={theme}
                                onClick={() => {
                                    setTheme(
                                        theme.option.toLowerCase() as Theme
                                    );
                                }}
                            >
                                {() => (
                                    <div
                                        className={`flex gap-2 items-center truncate`}
                                    >
                                        {theme.option
                                            .charAt(0)
                                            .toLocaleUpperCase() +
                                            theme.option.slice(1)}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default ThemePickerListbox;
