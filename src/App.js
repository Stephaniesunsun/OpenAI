import { Prompt } from './components/Prompt';
import { Engines } from './components/Engines';

//include prompt and response 
function App() {
  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <Engines />
      <Prompt />
    </div>
  );
}

export default App;
