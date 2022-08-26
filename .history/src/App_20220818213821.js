import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import "./App.css";

function App() {


  
  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
