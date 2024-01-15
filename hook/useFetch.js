import { useState, useEffect } from 'react'
import axios from 'axios'

//import { RAPID_API_KEY } from '@env'

//const rapidApiKey = RAPID_API_KEY
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': 'b8ee775c2cmshcc1e8085b477faep159744jsn15edf152c847',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  }

  //Get hivás
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There was an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //Ha valami történik és nem jön meg az adat, akkor van egy ujrahivás funkció is
  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}
export default useFetch
