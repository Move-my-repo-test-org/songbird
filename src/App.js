import React from 'react';
import Header from './Header/Header';
import Question from './Question/QuestionBlock';
import VariantsBlock from './Variants/VariantsBlock';
import InfoBlock from './Information/InformBlock';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      correctAnswer: '',
      currentAnswer: '',
      score: 0,
    }
  }



  onQuestionChoose = (correctAnswer) => {
    this.setState({correctAnswer: correctAnswer});
  }

  getVariant = (variant, score) => {
    let currentAnswer = this.state.correctAnswer.name === variant ? true : false;
    console.log(this.state.score);
    this.setState({currentAnswer: currentAnswer, score: this.state.score + score});
    console.log(currentAnswer);
    console.log(this.state.currentAnswer);
  }


  render() {
    return (
      <div className="App">
        <header>
          <Header currentQuestion={this.state.currentQuestion} score={this.state.score} />
        </header>
        <div className="question-block">
          <Question currentTopic={this.state.currentQuestion} onQuestionChoose={this.onQuestionChoose} isDone={this.state.currentAnswer} />
        </div>
        <div className="variants-info-block">
          <div className="variants-block">
            <VariantsBlock currentTopic={this.state.currentQuestion} correctBird={this.state.correctAnswer.name} putVariant={this.getVariant} />
          </div>
          <div className="information-block">
            <InfoBlock correctAnswer={this.state.correctAnswer} isDone={this.state.currentAnswer} />
          </div>
        </div>
        
        <audio src={`./${this.state.currentResult}.mp3`} autoPlay></audio>
      </div>
    )
  } 
}

export default App;
