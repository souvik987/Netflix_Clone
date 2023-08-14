import './App.css';
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from './requests';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='bg-neutral-950'>
      <Navbar/>
      <Banner/>
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}
      isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
