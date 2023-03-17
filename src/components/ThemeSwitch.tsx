import { useState } from 'react';
import { Switch } from '@headlessui/react';
import MoonIcon from '../assets/icons/MoonIcon';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <MoonIcon size={16} fill={true} />
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`relative inline-flex h-6 w-11 items-center rounded-full default-bg b`}
            >
                <span className="sr-only">Dark light theme switch</span>
                <div
                    className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full d-s-bg b d-bg-h`}
                />
            </Switch>
        </div>
    );
};

export default ThemeSwitch;
