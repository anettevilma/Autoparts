import React from 'react'
class Cart extends React.Component{
    constructor(props){
        super(props);
        
        
        
    }
    componentWillMount(){
        this.state={totalprice:0}
    }
    quantityhandler(event){
        // const price=this.props.cartproducts.price
        // const quant=event.target.value
        // console.log("Quantity:")
        // console.log(quant)
        // const tot=quant*price

        // let producttot=this.state.totalprice+tot
        // this.setState({totalprice:producttot})
        // console.log("Parts total:")
        // console.log(this.state.totalprice)
        console.log("Quantity:")
    }
   
    render(){
        
        return(
            <div>
                <h3>Cart:</h3>
                { this.props.cartproducts.map((itemdet)=>{         
              return <table>
                  <tr>
                      <td>
                          Name of the product:
                      </td>
                      <td>
                            {itemdet.name}
                      </td>
                      
                      </tr>
                      <tr>
                      <td>
                          Price:
                      </td>
                      <td>
                            {itemdet.price}
                      </td>
                      <td>
                          Quantity:
                      </td>
                      <td>
                      <input type="number" min="1" onChange={this.quantityhandler.bind(this,itemdet.price)} value="1"/>
                      </td>
                 </tr>
                 

          </table>
           } ) }
        
                     <p>   Total Amount:
                    
                         {this.state.totalprice}</p> 
                        
                     
            </div>
        
        )
    }
}
export default Cart