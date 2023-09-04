import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

import './App.css'

function App() {

  return (
    <div>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
          <Navbar />
          <Main />
      </main>
    </div>
  )
}

export default App
