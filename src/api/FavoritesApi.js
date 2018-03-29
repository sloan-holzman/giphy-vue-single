var axios = require('axios')

class FavoritesApi {
  static fetchFavorites() {
     return axios({
     method: "GET",
     url: `http://localhost:3030/gifs`,
      // params: {
      //   api_key: 'FfJGay2ccKpR7Sb0uftPnrsmeBhFVInR',
      //   limit: limit,
      //   rating: rating,
      //   q: q
      // }
    })
  }

}



export default FavoritesApi;
