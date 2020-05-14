import React from 'react'
import './App.css';
import PartsDetail from'./PartsDetail.js'
import Home from './Home.js'
import { Route, Link,Redirect, BrowserRouter as Router } from 'react-router-dom'  
class Searchparts extends React.Component {
 
    constructor(props){
     
        super(props);
        this.state={viewpart:false,partsarr:[]}
       this.handleCheck=this.handleCheck.bind(this);
            }
   
               
  viewPart() {
     
    this.setState({viewpart:true})
    
  }
  
 
  handleCheck(){
     console.log("Inside HandleCheck")
     let elem=this.props.part
     console.log("Part obj:")
     console.log(elem)
     this.setState(prevState => ({
      partsarr: [...prevState.partsarr, elem]
    }))
    

  }
  render(){
   const partsdet=(
     <div>
   <PartsDetail part={this.props.part} />
   </div>);
   return (
      <>
        {this.state.viewpart ?
        <PartsDetail part={this.props.part} />:
     <div className="App">
     
     <table key={this.props.part.key} className="plain-text table-center">
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.part.poster_src}/>
        </td>
        </tr>
        <tr>
          <td>
          <label>Sub Category:</label>
          </td>
          <td className="col-width">
            {this.props.part.subcategory}
          </td>
        </tr>
        <tr>
          <td>
          <label>Price:</label>
          </td>
          <td className="col-width">
          {this.props.part.price}
          </td>
        </tr>
        <tr>
          <td>
          <label>Part Name:</label>
          </td>
          <td className="col-width">
          {this.props.part.partname}
          </td>
        </tr>
        <tr>
          <td>
          <label>Description:</label>
          </td>
          <td className="col-width">
          {this.props.part.description}
          </td>
        </tr>
        <tr>
         <input type="button" onClick={this.viewPart.bind(this)} value="View"/>
         <input type="checkbox" onChange={this.handleCheck}/>
         </tr> 
         
         </tbody>
            
  </table><br /><br /><br />
  <label>Array</label>
  { this.state.partsarr.map((item)=>{         
     return  <label>{item.partname}{item.price}</label>
      } ) }

   </div>
  }
  </>
  
    );
    }
  
}

export default Searchparts