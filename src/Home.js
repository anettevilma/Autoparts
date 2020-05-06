import React from 'react';
import './App.css';
class Home extends React.Component{
    render(){
        return(
            <div className="App-header">
                <span className="boldhead">My Home Store:</span>
                <p>4394 SUMMER AVE MEMPHIS, TN 38122 Contact: (901) 761-0514</p>
                <span className="boldhead">My Privilage:</span>
                <p>Platinum</p>
            <div id="categories">
                <label className="cathead">Categories:</label>
         <figure className="left">
        <img src={require('./images/aircleaner.jpg')} />
         <figcaption>AirCleaner</figcaption>
         </figure>
         <figure className="center">
         <img src={require('./images/inlet.jpg')} />
         <figcaption>Inlet</figcaption>
         </figure>
         <figure className="right">
         <img src={require('./images/outlet.jpg')} />
         <figcaption>outlet</figcaption>
         </figure>
            </div>
            </div>
        )
    }
}
export default Home;