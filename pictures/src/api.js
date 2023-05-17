import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?query=${term}&per_page=50`, {
    headers: {
      Authorization: 'Client-ID zEaiBPX2O0BPTON91hY9Yci181pLEAGYtOQY3gQCwYY'
    },
    // params: {
    //   query: term,
    //   per_page: 50
    // },
  })

  return response.data.results
}

export default searchImages