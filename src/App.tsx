import './App.css';
import ReloadPrompt from "./ReloadPrompt";

function App() {

    const date = '__DATE__'

    return (
        <div className="App">
            <h1>Vite PWA Lab</h1>
            <h3>Built at: {date}</h3>
            <h3>3</h3>
            <ReloadPrompt />
        </div>
    )
}

export default App;
