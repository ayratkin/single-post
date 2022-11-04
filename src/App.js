import './App.css';
import LikesContainer from './components/likes/likesContainer';
import Title from './components/title/title';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <LikesContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
