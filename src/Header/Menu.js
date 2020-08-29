import React from 'react';
import MenuItem from './MenuItem';
import './menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [1,2,3,4,5,6],
        }
    }

    render() {
        return (
            <div className="menu">
                {this.state.menuItems.map(element => <MenuItem text={element} itemId={this.state.menuItems.indexOf(element)} activeItem={this.props.activeItem} key={this.state.menuItems.indexOf(element)} />)}
            </div>
        )
    }
}

export default Menu;