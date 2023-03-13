import Settings from './components/Settings';
import Widget from './components/Widget';
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <div className="default-bg default-text w-full min-h-screen h-full">
                <Settings />
                <Widget
                    is24HourFormat={false}
                    showSeconds={true}
                    align="start"
                />
            </div>
        </div>
    );
}

export default App;
