import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <div className={this.props.itemId===this.props.activeItem ? "menu-item active" : "menu-item"}>
                <p className="menu-item-text">{this.props.text}</p>
            </div>
        )
    }

}

export default MenuItem;