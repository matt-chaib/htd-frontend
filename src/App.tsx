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
import QuestionDetails from './routes/QuestionDetails';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

function App() {

  const queryClient = new QueryClient({
  })
  
  // 2. the persister
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })
  

  return (
    <>
       <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
      <Navbar />
      <div className='main-section'>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/questions/:id" element={<QuestionDetails />} />
    </Routes>
    </div>
    </PersistQueryClientProvider>
    </>
  )
}

export default App
