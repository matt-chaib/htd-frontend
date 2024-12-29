import './App.css'
import { Header } from './components/Header'
import { MainPage } from './routes/MainPage'

function App() {

  return (
    <>
      <Header />
      <div className='main-section'>
        <MainPage />
      </div>
    </>
  )
}

export default App
