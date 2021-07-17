import { Provider } from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <PostForm />
      <hr/>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
