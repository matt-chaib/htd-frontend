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

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Header />
      <div className='main-section'>
        <MainPage />
      </div>
      </QueryClientProvider>
    </>
  )
}

export default App
