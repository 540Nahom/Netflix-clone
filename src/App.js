// custom 
import "../src/Resources/custom/css/coustom.css";

// components 
import Row from "./components/Row/Row";
import requests from "./Resources/requests/requests";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";


function App() {
  return (
    <div> 
      <Header />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
      title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horro Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
    
  );
}

export default App;
