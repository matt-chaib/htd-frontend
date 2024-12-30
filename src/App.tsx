import './App.css'
import { Header } from './components/Header'
import { MainPage } from './routes/MainPage'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import About from './routes/About';

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className='main-section'>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
      </QueryClientProvider>
    </>
  )
}

export default App
