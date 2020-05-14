import React from 'react';
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            };
        }
        
        ClickHandler = () => {
            this.setState({ counter: 5 });
        }
        render() {
            return <OriginalComponent name='Anette' count={this.state.counter} incrementCount={this.ClickHandler} />
        }

    }
    return NewComponent;
}
export default UpdatedComponent;