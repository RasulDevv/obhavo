import data from "../../data/data"

const Week = ({arr}) => {
    const list = []
    let day = parseInt(new Date(arr[0].dt * 1000).getDay()),
        month = parseInt(new Date(arr[1].dt * 1000).getMonth())
    for(let i = 1; i < 8; i++) {
        list.push(
            <div key={i} style={{backgroundColor: "rgba(95, 158, 160, 0.397)", width: "300px", border: "1px solid gray", display: 'flex', gap: "5px", alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <p style={i == 1 || i == 7 ? {color: "brown"} : {color: "#000"}}>{i == 1 ? "Ertaga" : data.weeks[day]}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{width: "40px"}} src={`http://openweathermap.org/img/wn/${arr[i].weather[0].icon}@2x.png`} alt="pic" />
                    <h4>{arr[i].main.temp}°</h4>
                </div>
                <div>
                    {data.statuss[arr[i].weather[0].main]}
                </div>
            </div>
        )
        if(day == 6) day = 0
        else day++
    }

    return (
        <div style={{border: '1px solid black'}}>
            {list}
        </div>
    )
}

export default Week
