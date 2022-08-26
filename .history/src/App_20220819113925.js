import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL } from "./api";
import "./App.css";

function App() {


  
  function handleOnSearchChange(searchData) {
  const [lat, lon] =  searchData.data.split(" ")
  const currentWeather = fetch(`${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid={API key}`)

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
