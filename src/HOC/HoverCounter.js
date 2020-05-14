import React, { Component } from 'react';
import UpdatedComponet from './withCounter';

class HoverCounter extends Component {
      render() {
        const {name,count,incrementCount}=this.props;
        return (
            <div>
                 <p>{name} from Hover</p>
                <h1 onMouseOver={incrementCount}>  {count}</h1>
            </div>
        );
    }
}export default UpdatedComponet(HoverCounter);