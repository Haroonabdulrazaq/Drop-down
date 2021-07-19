import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

import './App.css';

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch)

  console.log(account);
  return (
    <div className="App">
     <h1>{account}</h1>
     <button onClick={() => depositMoney(1000)}>Deposit</button>
     <button onClick={() => withDrawMoney(500)}>WithDraw</button>
    </div>
  );
}

export default App;
