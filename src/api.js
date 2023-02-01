import axios from "axios";

export async function fetchWeather(city, setError) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3df1b4ca80d7d11355766703f850e4b`;

    try {
        const response = await axios.get(url);
        setError("");
        return response.data;
    } catch (error) {
        setError("City Not Found!");
        return error;
    }
}