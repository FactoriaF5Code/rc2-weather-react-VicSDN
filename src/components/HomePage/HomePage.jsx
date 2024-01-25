import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./HomePage.css";
const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);

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

    const todayP0 = weatherData.today.p[0];
    const todayP1 = weatherData.today.p[1];
    const todayP2 = weatherData.today.p[2];
    return (
        <div className="inicio">
            <Header />
            <section className="cuerpo">
                <section>
            <h2>¿Qué esperamos hoy?</h2>
                </section>
                <section className="containerTextos">
            <p className="informacion">{todayP0}</p>
            <p className="informacion">{todayP1}</p>
            <p className="informacion">{todayP2}</p>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
