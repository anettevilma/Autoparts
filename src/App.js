import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header App-background">
        <div id="login">
          <form>
            <span className="head">Login</span><br />
            <table>
            <tr>
              <td>UserName:  </td>
              <td><input type="text" name="username" id="username"></input></td>
              </tr>
           <tr>
             <td> Password:  </td>
             <td><input type="password" name="password" id="password"></input></td>
             </tr>
             </table>
            <input id="loginbtn" type="submit" value="Log in"/>
            
          </form>
       </div>
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
        
        </header>
    </div>
  );
}
}

export default App;
