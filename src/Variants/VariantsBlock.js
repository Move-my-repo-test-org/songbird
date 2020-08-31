import React from 'react';
import birdsData from '../birds';
import Variant from './Variant';
import './variants.css';

class VariantsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            errorsCount: 0,
        }
    }

    
    onVariantChoose = (variant, result) => {
        let score = 0;
        if (result) {
            score = 5 - this.state.errorsCount;
        }
        
        this.setState({isDone: result ? true : false, errorsCount: result ? this.state.errorsCount : this.state.errorsCount + 1})
        this.props.putVariant(variant, score);
    }

    onVariantClick = (variant) => {
        this.props.clickVariant(variant);
    }

    render() {
        return (
            <div>

                <ul className="variants">
                    {birdsData[this.props.currentTopic].map(el => <Variant birdName={el.name} bird={el} correctVariant={this.props.correctBird} onVariantChoose={this.onVariantChoose} onVariantClick={this.onVariantClick} done={this.state.isDone} key={el.id} />)}
                </ul>
            </div>
        )
    }

}

export default VariantsBlock;