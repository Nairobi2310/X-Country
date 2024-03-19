import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./CountryFlag.module.css";

const CountryFlag = () => {

    const[flag, setFlag] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                const data = response.data;
                setFlag(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {flag.map((country) => (
                <div key={country.cca3} className={styles.card}>
                    <img
                        src={country.flags.png}
                        alt={`Flag of ${country.name.common}`}
                        className={styles.image}
                    />
                    <h2>{country.name.common}</h2>
                </div>
            ))}
        </div>
    )
}

export default CountryFlag;