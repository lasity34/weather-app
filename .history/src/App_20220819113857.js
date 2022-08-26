import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import "./App.css";

function App() {


  
  function handleOnSearchChange(searchData) {
  const [lat, lon] =  searchData.data.split(" ")
  const currentWeather = fetch(`/weather?lat={lat}&lon={lon}&appid={API key}`)

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
