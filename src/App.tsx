import './App.css';
import store from './store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Sidebar />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;