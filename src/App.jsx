import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  async function getPhoto() {
    const data = await fetchPhotos("cat");
    console.log(data.results);
  }
  return (
    <div>
      <h1 className="">
        <button onClick={getPhoto}>get photo</button>
      </h1>
    </div>
  );
};

export default App;
