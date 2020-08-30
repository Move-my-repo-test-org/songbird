import React from 'react';
import birdsData from '../birds';
import defaultBird from '../default-bird.png';
import './question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0,
            answer: true,
        }
    }

    componentDidMount = () => {
        this.chooseRandomItem();
    }

    chooseRandomItem = () => {
        let randomNum = Math.ceil(Math.random()*5);
        let questionObj = birdsData[this.props.currentTopic][randomNum];
        console.log(questionObj);
        this.setState({currentItem: randomNum, currentQuestionObj: questionObj});
    }
    render() {
        let questionObj = this.state.currentQuestionObj;
        if (!questionObj){
            return <p>Loading ...</p>;
        }
        if (!this.state.answer) {
            return (
                <div className="question">
                    <img className="question-img" src={defaultBird} alt="some bird image" />
                    <div className="question-name-audio">
                        <p className="question-bird-name">{'*'.repeat(questionObj.name.length)}</p>
                        <hr />
                        <audio src={questionObj.audio} controls className="question-audio-player"></audio>
                    </div>
                </div>
            )
        }
        return (
            <div className="question">
                <img className="question-img" src={questionObj.image} alt={questionObj.species} />
                <div className="question-name-audio">
                    <p className="question-bird-name">{questionObj.name}</p>
                    <hr />
                    <audio src={questionObj.audio} controls className="question-audio-player"></audio>
                </div>
            </div>
        )
    }
}

export default Question;