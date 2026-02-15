import { fetchPhotos } from "./api/mediaApi"

const App = () => {

  function getPhoto(){
    fetchPhotos('cat')
  }
  return (
    <div>
      <h1 className=''> 
        <button onClick = {getPhoto}>
          get photo
        </button>
      </h1>
    </div>
  )
}

export default App
