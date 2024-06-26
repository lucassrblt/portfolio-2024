
import {ThemeProvider} from "./context/ThemeContext.tsx";
import ThemeAppContent from "./components/ThemeAppContent.tsx";

function App() {
    return (
        <ThemeProvider>
            <ThemeAppContent/>
        </ThemeProvider>

    )
}



export default App
