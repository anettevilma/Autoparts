import React from 'react'
import $ from 'jquery'
import Cart from './Cart.js'
class PartsDetail extends React.Component{
    constructor(props){
        super(props);
       
    }
    addtocart(productname,productprice) {
      console.log("added to cart")
     // let producttot=this.state.itemtot+productprice
      let elem=new Object()
      elem.name=productname
      elem.price=productprice
      console.log("Part obj:")
      console.log(elem)
      this.setState(prevState => ({
       cart: [...prevState.cart, elem]
 
     }))
    //  this.setState({itemtot:producttot})
    //  console.log("Parts total:")
    //   console.log(this.state.itemtot)
   }
   setcart(){
     this.setState({gotocart:true})
     console.log("Value of go to cart inside set cart:"+this.state.gotocart)
     { this.state.cart.map((item)=>{         
      console.log(item)
 } ) }
   }
   
   componentWillMount(){
    this.state={cart:[],rows:[],gotocart:false,itemtot:0}
   }
   componentDidMount(){
       { this.props.parts.map((item)=>{         
              this.searchproduct(item)
         } ) }
         this.setState({gotocart:false})
         console.log("Value of go to cart inside component did mount:"+this.state.gotocart)
           }

    
           searchproduct(searchTerm) {
            console.log("Perform search")
            const urlString = "http://localhost:8081/autoparts/parts/" + searchTerm
            $.ajax({
              url: urlString,
              success: (searchResults) => {
                console.log("Fetched data successfully")
                console.log(searchResults)
                 var partRows = []
                   searchResults.forEach((part) => {
                  
                    part.poster_src = part.imgurl
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
                       
                       <input type="button" onClick={this.addtocart.bind(this,part.partname,part.price)} value="Add to cart"/>
                                    
                       </tr> 
                       
                       </tbody>
                          
                </table><br /><br /><br />
                 </div>
                 </>
                  );
                  partRows.push(partRow)
                })
                 this.setState(prevState => ({
                  rows: [...prevState.rows, partRows]
            
                }))
                
              },
              error: (xhr, status, err) => {
                console.error("Failed to fetch data")
              }
            })
          } 
    
    
    render(){
       
      return(
          <>
          { this.state.gotocart?
          <Cart cartproducts={this.state.cart} />:
            <div>
            <h2>Partsdetails</h2>
             {/* {this.state.rows} */}
             <div>
             { this.state.rows.map((itemdet)=>{         
              return <label> {itemdet}</label>
           } ) }
           </div>
           <input type="button" onClick={this.setcart.bind(this)} value="Go to Cart"/>
           
            </div>
    }
  
    </>
        )
    }
}
export default PartsDetail