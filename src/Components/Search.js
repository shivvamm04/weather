import React from 'react'

function Search(props) {
  return (
    <>
    <div className="d-flex w-75 search">
        <div>
        <p className="">Type City Name</p>
        <input type="text" className="" value={props.city} onChange={props.getCoOrdinate} name="city" placeholder="City"/> 
        <span>or</span>
        </div> 
        <div>
        <p>Get your co-ordinate <i className="fa-solid fa-location-crosshairs btn" onClick={props.getLoc}></i></p> 
        <form onSubmit={props.submit}>
        <div className="d-flex fl2">
          <div><span className="s2">Lat</span><input type="number" className="sitem " value={props.lat} onChange={props.change} required name="lat" placeholder="Latitude"/></div>  
          <div><span className="s2">Lon</span><input type="number" className="sitem" value={props.lon} onChange={props.change} required name="lon" placeholder="Longitude"/></div>
          <button type="submit" className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>  
        </div>
        </form>
        </div>
    </div>
    </>  
  )
}
export default Search;
