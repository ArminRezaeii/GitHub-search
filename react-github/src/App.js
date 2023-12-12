import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Search from './components/SearchComponent/Search';
function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <Search />
    </QueryClientProvider>
  )
}

export default App;
