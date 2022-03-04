import axios from "axios";  

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}

export default App;
