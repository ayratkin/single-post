import './App.css';
import LikesContainer from './components/likes/likesContainer';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <LikesContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
