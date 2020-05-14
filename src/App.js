import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import BuggyCounter from './ErrorBoundary/BuggyCounter'

class App extends React.Component {
  constructor(props)
{
  super(props);
  
  this.loginvalidate=this.loginvalidate.bind(this);
}
componentWillMount()
{
  this.state={loginsuccess:false,username:"",pwd:"",error:""};
}
loginvalidate()
{
  if((this.state.username==="user")&&(this.state.pwd==="pwd"))
  {
  this.setState({loginsuccess:true});
  console.log("Inside login success");
  }
  else{
    this.setState({error:"Not a valid user"});

  }
}
myChangeHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
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
               <td><input type="text" placeholder="username" name="username" onChange={this.myChangeHandler}></input></td>
              </tr>
            <tr>
              <td> Password:  </td>
              <td><input type="password" placeholder="password" name="pwd" onChange={this.myChangeHandler}></input></td>
             </tr>
              </table>
            <input id="loginbtn" type="submit" value="Log in" /><br />
            
             <a href="#" >Forgot Password?</a><br />
             <label className="errorstyle">{this.state.error}</label>
           </form>
          
        </div>
       <div id="subimg">
         <img className="centerimg" src={require('./imgs/autoparts.jpg')} />
         </div>  
        
         </header>
     </div>
   }
     </>
   );
  // return (
  //   <div className="App">
  //    <ClickCounter/>
  //    <HoverCounter/>
  //   </div>
  // );
  // return (
  //   <div>
  //     <p>
  //       <b>
  //         This is an example of error boundaries in React 16.
  //         <br /><br />
  //         Click on the numbers to increase the counters.
  //         <br />
  //         The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
  //       </b>
  //     </p>
  //     <hr />
  //     <ErrorBoundary>
  //       <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
  //       <BuggyCounter />
  //       <BuggyCounter />
  //     </ErrorBoundary>
  //     <hr />
  //     <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
  //     <ErrorBoundary><BuggyCounter /></ErrorBoundary>
  //     <ErrorBoundary><BuggyCounter /></ErrorBoundary>
  //   </div>
  // );
}
}

export default App;
