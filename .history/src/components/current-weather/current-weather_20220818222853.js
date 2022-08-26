import "./current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Tokyo</p>
          <p className="weather-description">rainy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/09n.png" />
      </div>
      <div className="bottom">
        <p className="tempreture">18C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">6 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">40%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">10 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
