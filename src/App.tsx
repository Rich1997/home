import SettingsPanel from './components/SettingsPanel';
import Widget from './components/Widget';
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <div className="flex default-bg default-text w-full min-h-screen h-screen">
                <Widget align="start" />
                <SettingsPanel />
            </div>
        </div>
    );
}

export default App;
