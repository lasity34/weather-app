import "./current-weather.css"


export default function CurrentWeather() {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Tokyo</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img alt="weather" className="weather-icon" />
        </div>
    )
}