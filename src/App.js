import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';


class App extends React.Component {
  constructor(props)
{
  super(props);
  this.state={loginsuccess:false};
  this.loginvalidate=this.loginvalidate.bind(this);
}
loginvalidate()
{
  this.setState({loginsuccess:true});
  console.log("Inside login success");
}
  render(){
  return (
    <>
    {this.state.loginsuccess ?
    <Home /> :
    <div className="App">
      <header className="App-header App-background">
        <div id="login">
          <form onSubmit={this.loginvalidate}>
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
            <input id="loginbtn" type="submit" value="Log in" /><br />
            
            <a href="#" >Forgot Password?</a>
          </form>
          
       </div>
       <div id="subimg">
        <img className="centerimg" src={require('./images/autoparts.jpg')} />
        </div>  
        
        </header>
    </div>
  }
    </>
  );
}
}

export default App;
