import { useState, useEffect }  from 'react'
import axios from "axios";


const UseAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);
    const [error, setError] = useState('');

// https://api.unsplash.com/photos/random?client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w&count=4
 // https://api.unsplash.com/search/photos?page=1&query=office&client_id=Hhx6Rg_5DSJL8r9qQ53nSvvIboiHJ6yHn_C9ebngE4w

    axios.defaults.baseURL = 'https://api.unsplash.com';
    const fetchData = async (url) => {
        try {
        setIsLoading(true);
        const res = await axios(url);
        setResponse(res.data.results);
        } catch(err) {
            setError(err)
        }   finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])

  return {
   response,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  } 
}

export default UseAxios