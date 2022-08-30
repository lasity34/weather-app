import "./current-weather.css";

export default function CurrentWeather({ data }) {
  

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.current.condition.text}</p>
        </div>
        <img alt="weather" className="weather-icon" src={data.current.condition.icon} />
      </div>
      <div className="bottom">
        <p className="temperature">{data.current.temp_c}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.floor(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.ceil(data.main.pressure /100)} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
