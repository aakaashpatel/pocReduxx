import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

 export  function fetchPhotos(query){
  const res = axios.get('https://api.unsplash.com/search/photos'. {
    params : {query},
    headers : {}
  })
  console.log(res)
}