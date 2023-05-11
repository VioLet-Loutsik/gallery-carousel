import './App.css';
import { createContext, useState} from 'react';
import SearchField from './components/SearchField';
import UseAxios from './hooks/UseAxios';
import Header from './pages/Header';
import Home from './pages/Home';


// Create Context

export const ImageContext = createContext();


function App() {
  const [searchImage, setSearchImage] = useState('')
  const { response, isLoading, error, fetchData } = UseAxios(`search/photos?page=1&query=random&client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w`);

  const value = {
    response,
    isLoading,
    error, 
    fetchData,
    searchImage,
    setSearchImage,
  }
  return (
    <ImageContext.Provider value = { value }>
      <Header>
        <SearchField />
      </Header>
      <Home />
    </ImageContext.Provider>
  );
}

export default App;
