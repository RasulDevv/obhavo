import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"
import NotFoundPage from "./not-found";
import data from "../data/data";
import Today from "../components/today/today";
import Week from "../components/week/week";


const ContentPage = ({slug}) => {
    const [baza, setBaza] = useState(),
          [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${slug ? slug : params.slug}&appid=${data.apiKey}&units=metric`)
            .then(response => response.json())
            .then(dat => {setBaza(dat)})
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, [params.slug])
    console.log(params);
    if(baza && baza.cod === "404") return <NotFoundPage />
    return (
        <div>
            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <div style={{display: 'flex', gap: "5px"}}>
                    <Today values={baza.list[0]} city={baza.city.name} />
                    <Week arr={baza.list} />
                </div>
            )}
        </div>
    )
}

export default ContentPage
