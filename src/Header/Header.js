import React from 'react';
import Menu from './Menu';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="header">
                <div className="logo-score-container">
                    <h1>Song<span>bird</span></h1>
                    <p>Score: {this.state.currentScore ? this.state.currentScore : 0}</p>
                </div>
                <div className="menu-container">
                    <Menu activeItem={this.props.currentQuestion} />
                </div>
            </div>
            
        )
    }
}

export default Header;