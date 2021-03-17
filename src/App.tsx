import './App.css';
import store from './store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
            <Sidebar />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;