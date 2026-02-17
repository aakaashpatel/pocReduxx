import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

 export  function fetchPhotos(query , page = 1, per_page= 20){
  const res = axios.get('https://api.unsplash.com/search/photos', {
    params : {query},
    headers : {}
  })
  console.log(res)
}