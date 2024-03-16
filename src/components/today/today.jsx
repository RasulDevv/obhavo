import data from "../../data/data"
import styles from "./today.module.css"

const Today = ({values, city}) => {
    return (
        <div className={styles.today}>
            <h2>{city}</h2>
            <p>Bugun, {new Date(values.dt_txt).getDate()} {data.months[new Date(values.dt_txt).getMonth()]}</p>
            <div className={styles.today_temp}>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${values.weather[0].icon}@2x.png`} alt="pic" />
                    <p>{data.statuss[values.weather[0].main]}</p>
                </div>
                <p style={{fontSize: "30px", fontWeight: "500"}}>{Math.floor(values.main.temp)}°</p>
            </div>
            <div className="hr" />
            <div>
                <p>Namlik: {values.main.humidity}%</p>
            </div>
        </div>
    )
}

export default Today
