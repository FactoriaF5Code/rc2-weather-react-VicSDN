import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Provincias.css";

const Provincias = () => {
    const [provinceData, setProvinceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://www.el-tiempo.net/api/json/v2/provincias",
                    { timeout: 10000 } // Ajusta el tiempo de espera según sea necesario
                );
                setProvinceData(response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("La solicitud fue cancelada:", error.message);
                } else {
                    console.error("Error al obtener datos de provincias:", error);
                }
            }
        };

        fetchData();

       
        return () => {
            const source = axios.CancelToken.source();
            source.cancel("Solicitud cancelada porque el componente se desmontó.");
        };
    }, []); 

    if (!provinceData) {
        return <div>Cargando...</div>;
    }

    const provincesToDisplay = provinceData.provincias;

    return (
        <>
            <Header />
            <section className="bodyTempProv">
                <section>
                    <h2>Encuentra tu provincia</h2>
                </section>
                <section className="containerProvincia">
                    {provincesToDisplay.map((provincia) => (
                        <div className="individualProvincia" key={provincia.CODPROV}>
                            <p className="nameProvincia">{provincia.NOMBRE_PROVINCIA}</p>
                            <article className="cajaProvincias">
                                <p className="comunidad">Comunidad: {provincia.COMUNIDAD_CIUDAD_AUTONOMA}</p>
                                <p className="capital">Capital: {provincia.CAPITAL_PROVINCIA}</p>
                            </article>
                        </div>
                    ))}
                </section>
            </section>
            <Footer />
        </>
    );
};

export default Provincias;
