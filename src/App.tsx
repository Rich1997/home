import SettingsPanel from './components/SettingsPanel';
import Widget from './components/Widget';
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <div className="flex tablet:flex-row flex-col default-bg default-text w-full min-h-screen h-screen justify-between">
                <Widget align="center" />
                <SettingsPanel />
            </div>
        </div>
    );
}

export default App;
