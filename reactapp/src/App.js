import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import GreetClass from './Components/GreetClass'
// 因为我们 用了 default export 就不用 {GreetClass} 了
import Message from './Components/Message'
import Counter from './Components/Counter'
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <Greet name="Bruce" heroName="Batman">
          <h2>THE BATMAN</h2>
          <button>CLICK</button>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <h2>THE SUPERMAN</h2>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman">
          <h2>THE WONDER WOMAN</h2>
        </Greet>

        <GreetClass name="Bruce" heroName="Batman"></GreetClass>
        <GreetClass name="Clark" heroName="Superman"></GreetClass>

        <Message></Message>

        <Counter></Counter>

        <EventBind></EventBind>
      </header>
    </div>
  );
}

export default App;
