import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <PostForm />
      <hr/>
      <Posts />
    </div>
  );
}

export default App;
