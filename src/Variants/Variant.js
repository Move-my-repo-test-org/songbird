import React from 'react';
import birdsData from '../birds';

class Variant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        }
    }

    chooseVariant = () => {
        let result = this.props.correctVariant === this.props.birdName ? true : false;
        this.props.onVariantChoose(this.props.bird, result);
        this.setState({isCorrect: result, isClicked: true})
    }

    clickUnable = () => {
        this.props.onVariantClick(this.props.bird);
    }

    render() {
        if (!this.state.isClicked && !this.props.done) {
            return (
                <li className="variant"  onClick={this.chooseVariant}>
                    <p>{this.props.birdName}</p>
                </li>
            )
        } else if (!this.state.isClicked) {
            return (
                <li className="variant unable" onClick={this.clickUnable}>
                    <p>{this.props.birdName}</p>
                </li>
            )
        }
        return (
            <li className={this.state.isCorrect ? 'variant true unable': "variant false unable"} onClick={this.clickUnable}>
                <p>{this.props.birdName}</p>
            </li>
        )
    }

}

export default Variant;