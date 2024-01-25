import "./Ciudades.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const Ciudades = () => {
    const [weatherData, setWeatherData] = useState(null);
    const maxCitiesToShow = 50;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://www.el-tiempo.net/api/json/v2/home"
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error al obtener datos meteorológicos:", error);
            }
        };

        fetchData();
    }, []);

    if (!weatherData) {
        return <div>Cargando...</div>;
    }

    const citiesToDisplay = Object.entries(weatherData.ciudades)
        .slice(0, maxCitiesToShow)
        .map(([id, ciudad]) => ({ id, ...ciudad }));

    return (
        <>
            <Header />
            <section className="bodyTempCiu">
                <section>
                    <h2>Encuentra tu ciudad</h2>
                </section>
                <section className="containerTemp">
                    {citiesToDisplay.map(({ id, name, temperatures }) => (
                        <div className="IndvidualCiudad" key={id}>
                            <p className="nameCiudad"> {name}</p>
                            <article className="temp">
                            <p className="tempMax">T. máxima: {temperatures.max}°C</p>
                            <p className="tempMin">T. mínima: {temperatures.min}°C</p>
                            </article>
                        </div>
                    ))}
                    {Object.keys(weatherData.ciudades).length > maxCitiesToShow && (
                        <p>...</p>
                    )}
                </section>
            </section>
            <Footer />
        </>
    );
};

export default Ciudades;
