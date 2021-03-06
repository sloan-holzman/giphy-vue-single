var axios = require('axios')

class FavoritesApi {
  static fetchFavorites() {
     return axios({
       method: "GET",
       url: `http://localhost:3030/gifs`
    })
  }

  static addFavorite(gif) {
     return axios({
       method: "POST",
       url: `http://localhost:3030/gifs`,
       data: gif
    })
  }

  static deleteFavorite(gif) {
     return axios({
       method: "DELETE",
       url: `http://localhost:3030/gifs/${gif._id}`
    })
  }

}



export default FavoritesApi;
