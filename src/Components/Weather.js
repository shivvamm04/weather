import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from "axios";

// http://api.openweathermap.org/data/2.5/weather?lat={this.state.lat}&lon={this.state.lon}&appid=717c1995b7972edaefb0ecd2ec

class Weather extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lat:"",
         lon:"",
         city:"",
         feel:"00",
         sunRise:"00:00",
         sunSet:"00:00",
         minTemp:"00",
         maxTemp:"Temp",
         disc:"",
         hum:"Hum",
         temp:"(Temp)",
         country:"Country",
         timeZone:"00:00",
         loc:"Loc",
         imgId:"0",
         recent:[]
      }
    }

  addDataToRecent=()=>{
    let recent = this.state.recent;
    recent.push({
      lat:this.state.lat,
      lon:this.state.lon,
      loc:this.state.loc
    });
    this.setState({recent});
  }

  changeHandler = (event)=>{
    let trg = event.target.name;
    if(trg === "city"){
        this.setState({city:event.target.value});
    }else if(trg === "lat"){
        this.setState({lat:event.target.value});
    }else if(trg === "lon"){
        this.setState({lon:event.target.value});
    }
  }
  locHandler = ()=>{
      this.setState({
          lat:"",
          lon:"",
          city:""
      })
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
              (res)=>{
                  this.setState({
                      lat:res.coords.latitude,
                      lon:res.coords.longitude,
                  },()=>{this.hitUrl(this.state.lat,this.state.lon,)})
                },
              (error)=>{
                  console.log(error);
                }
          );
      }else{
          console.log("Browser loction is deactive");
      }
  }
  hitUrl = (lat, lon)=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=717c1995b79a72edaefb013ee0ecd2ec`)
    .then((res)=>{
      this.setState({loc:res.data.name,
                    city:res.data.name,
                     feel:this.kToC(res.data.main.feels_like),
                     sunrise:res.data.name,
                     sunset:res.data.name,
                     minTemp:this.kToC(res.data.main.temp_min),
                     maxTemp:this.kToC(res.data.main.temp_max),
                     hum:res.data.main.humidity,
                     temp:this.kToC(res.data.main.temp),
                     country:res.data.sys.country,
                     timeZone:this.getTime(res.data.timezone),
                     disc:res.data.weather[0].description,
                     sunRise:this.getTime(res.data.sys.sunrise),
                     sunSet:this.getTime(res.data.sys.sunset),
                     imgId:res.data.weather[0].icon
                     },()=>{
                      this.addDataToRecent();
                    });
                    
    })
    .catch((error)=>{
      console.log("i know from where error is occuring" ,error);
    })
  }
  kToC = (val)=> {
    return(val-273.15).toFixed(2)+"°C";
  }
  getTime = (stamp)=>{
    const date = new Date(stamp*1000);
    return date.toTimeString();
  }

  submitHandler=(event)=>{
    //after filling cordinate either manually or by name hitting search button
    event.preventDefault();
    const lat = event.target.lat.value;
    const lon = event.target.lon.value;
    this.setState({lat:lat,lon:lon},()=>{
      this.hitUrl(this.state.lat,this.state.lon) // here i am hitting the URL
    });
  }
  changeCoHandler=(event)=>{
    //while entring name cordinate will be automatically change
    let trg = event.target.value;
    this.setState({city:trg});
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${trg}&limit=5&appid=717c1995b79a72edaefb013ee0ecd2ec`)
    .then((res)=>{
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        this.setState({lat:lat,lon:lon});
    })
    .catch((err)=>{

    });
  }
 
  render() {
    return (
      <div>  
          <Search
                lat={this.state.lat}
                lon={this.state.lon}
                city={this.state.city}
                change={this.changeHandler}
                getLoc = {this.locHandler}
                submit={this.submitHandler}
        icon={this.state.imgId}
                getCoOrdinate={this.changeCoHandler}>
        </Search>
          <Result
            loc={this.state.loc}
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp}
            feel={this.state.feel}
            temp={this.state.temp}
            hum={this.state.hum}
            country={this.state.country}
            timeZone={this.state.timeZone}
            sunrise={this.state.sunRise}
            sunset={this.state.sunSet}
            disc={this.state.disc}
            icon={this.state.imgId}
            recent={this.state.recent}>
          </Result>
      </div>
    )
  }
}

export default Weather