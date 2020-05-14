import React, { Component } from 'react';
import UpdatedComponent from './withCounter';
class ClickCounter extends Component {
    render() {
        const {name,count,incrementCount}=this.props;
        return (
            <div>
                <p>{name} from clickCounter </p>
                <button onClick={incrementCount}>Button Clicked {count} times</button>
                <hr/>
            </div>
        );
    }
}export default UpdatedComponent(ClickCounter);
