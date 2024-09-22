import React from 'react'
import { useCities } from '../contexts/CitiesContext';

//import css
import styles from "./CityList.module.css";

//import components
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';

const CityList = () => {
    const { cities, isLoading } = useCities();
    /* const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
        }).format(new Date(date)); */
    if (isLoading) return <Spinner />

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    )
}

export default CityList