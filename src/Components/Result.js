import React from "react";
function Result(props){
    let data;
    if(props.recent.length <= 0){
        data = "";
    }else{
        data = props.recent.map((rdata,ind)=>{
            return <li key={ind} className="bg-dark text-light">{rdata.loc}</li>
        });
    }
    
        return (
            <div>
                <div className="result card w-75 p-4 ttt">
                    <div className="card-tittle">
                    <h4>
                        {props.icon !== "0" ?<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" /> :""}
                        {props.disc} {props.loc} {props.temp} </h4>
                    <p>({props.country}) {props.timeZone}</p><hr/>
                    </div>
                    <table className="table table-bordered p-2 tt">

                        <tbody>
                        <tr>
                            <th>Feels like</th>
                            <td >{props.feel}</td>
                        </tr>
                        <tr>
                            <th>Min temp</th>
                            <td>{props.minTemp}</td>
                        </tr>
                        <tr>
                            <th>Max temp</th>
                            <td>{props.maxTemp}</td>
                        </tr>
                        <tr>
                            <th>Humidity</th>
                            <td>{props.hum}</td>
                        </tr>
                        <tr>
                            <th>Sunrise</th>
                            <td>{props.sunrise}</td>
                        </tr>
                        <tr>
                            <th>Sunset</th>
                            <td>{props.sunset}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sideTop">
                    <h5>Recent</h5>
                </div>
                <div className="side">
                    <ul className="list-unstyled text-center ll">
                        {data}
                    </ul>
                </div>
                
            </div>
        )
}

export default Result;
