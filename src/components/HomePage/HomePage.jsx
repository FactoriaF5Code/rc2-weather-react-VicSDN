// Ejemplo de uso de la API de OpenWeatherMap en React
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const HomePage = () => {
    
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "3a998884945dea0955ecd14da2ce82db";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=ciudad&appid=${apiKey}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error al obtener datos meteorológicos:", error);
            }
        };

        fetchData();
    }, [apiKey]);

    if (!weatherData) {
        return <div>Cargando...</div>;
    }

    return (
      <div>
        <Header/>
        <h2>Condiciones meteorológicas actuales en {weatherData.name}</h2>
        <p>Temperatura: {weatherData.main.temp}°C</p>
        <p>Descripción: {weatherData.weather[0].description}</p>
        <Footer />
      </div>
    );
};


export default HomePage;
