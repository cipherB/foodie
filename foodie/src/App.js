import {Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

import Routes from './Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
