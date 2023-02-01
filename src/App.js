import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import './App.css';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className='header-app'>
          <Header/>
        </div>

        <div className='body-app'>
          <Body/>
        </div>

        <div className='footer-app'>
          <Footer/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
