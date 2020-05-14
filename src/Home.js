import React from 'react';
import './App.css';
import Searchparts from './Searchparts.js'
import PartsDetail from'./PartsDetail.js'
import $ from 'jquery'
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {viewpart:false,partsselected:[],movetoparts:false}
        this.performSearch("")
        
      
       this.viewarray=this.viewarray.bind(this);
      // this.handleselect=this.handleselect.bind(this);
  }
  viewPart() {
     
    this.setState({viewpart:true})
    
  }
  
 
  handleselect(element) {
     console.log("Inside HandleCheck")
     let elem=element
     console.log("Part obj:")
     console.log(element)
     this.setState(prevState => ({
      partsselected: [...prevState.partsselected, elem]

    }))
  }

viewarray(){
  this.state.partsselected.map((item)=>{    
    console.log("Partsselected:")     
    console.log(item)
     } )
     this.setState({movetoparts:true})
}
  performSearch(searchTerm) {
    console.log("Perform search")
    const urlString = "http://localhost:8081/autoparts/category/" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        console.log(searchResults)
        const results = searchResults
         console.log(results[0])

        var partRows = []

        results.forEach((part) => {
          this.setState({partname:part.partname})
            part.poster_src = part.imgurl
           // const partRow = <Searchparts key={part.key} part={part}/>
           const partRow =(
            <>
              
           <div className="App">
           
           <table key={part.key} className="plain-text table-center">
          <tbody>
            <tr>
              <td>
                <img alt="poster" width="120" src={part.poster_src}/>
              </td>
              </tr>
              <tr>
                <td>
                <label>Sub Category:</label>
                </td>
                <td className="col-width">
                  {part.subcategory}
                </td>
              </tr>
              <tr>
                <td>
                <label>Price:</label>
                </td>
                <td className="col-width">
                {part.price}
                </td>
              </tr>
              <tr>
                <td>
                <label>Part Name:</label>
                </td>
                <td className="col-width">
                {part.partname}
                </td>
              </tr>
              <tr>
                <td>
                <label>Description:</label>
                </td>
                <td className="col-width">
                {part.description}
                </td>
              </tr>
              <tr>
               <input type="button" onClick={this.viewPart.bind(this)} value="View"/>
               <input type="button" onClick={this.handleselect.bind(this,part.partname)} value="Select"/>
                            
               </tr> 
               
               </tbody>
                  
        </table><br /><br /><br />
        

              
         </div>
        
        </>
        
          );
          partRows.push(partRow)
        })

        this.setState({rows: partRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }
   searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

    render(){
        return(
          <>
          {this.state.movetoparts ?
            <PartsDetail parts={this.state.partsselected} />:
            <div className="App">
            <div className="App-header" style={{ paddingLeft: 20 }}>
              <a href="App.js" className="floatright" >Logout</a><br />
            <span className="boldhead">My Home Store:</span>
                <p>4394 SUMMER AVE MEMPHIS, TN 38122 Contact: (901) 761-0514</p>
                <span className="boldhead">My Privilage:</span>
                <p>Platinum</p>
            
                <div>
                 <label className="boldhead">Search:                 </label>
                <input style={{
                     fontSize: 12,
                     width: "20%",
                     paddingTop: 2,
                     paddingBottom: 2,
                     paddingLeft: 20
                    }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}
        
      </div>
      <input type="button" value="NEXT" onClick={this.viewarray}/>
         
            </div>
            </div>
    }
    </>
        )
    }
}
export default Home;