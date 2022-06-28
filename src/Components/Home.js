import React from 'react'

function Home() {
  return (
    <div className="header home" style={{paddingTop:200}}>
        <h3>weather App <i className="fa-solid fa-cloud"></i></h3>
        <p>Free app for moitoring</p>
        <p><a href="/weather">Click to know Current Weather status <i className="fa-solid fa-cloud"></i></a></p>
    </div>
  )
}
export default Home;
