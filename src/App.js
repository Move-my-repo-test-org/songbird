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
      currentQuestion: 0,
      correctAnswer: '',
      currentResult: '',
      score: 0,
      showResult: false,
    }
  }



  onQuestionChoose = (correctAnswer) => {
    this.setState({correctAnswer: correctAnswer});
  }

  getVariant = (variant, score) => {
    let currentResult = this.state.correctAnswer.name === variant.name ? true : false;
    console.log(this.state.score);
    this.setState({currentResult: currentResult, score: this.state.score + score, currentAnswer: variant});
  }

  onVariantClick = (variant) => {
    this.setState({currentAnswer: variant})
  }

  goToNextLevel = () => {
    if (this.state.currentQuestion < 5) {
      this.setState({currentQuestion: this.state.currentQuestion + 1, currentResult: false, currentAnswer: ''});
    } else if (this.state.currentQuestion === 5) {
      this.setState({showResult: true})
    }
    
  }

  playAgain = () => {
    this.setState({showResult: false, currentQuestion: 0, currentResult: false, currentAnswer: '', score: 0})
  }

  render() {
    if (this.state.showResult && this.state.score === 30) {
      return (
        <div className="App last-screen">
          <h1>Song<span>bird</span></h1>
          <p>Поздравляем с окончанием игры!</p>
          <p>Вы набрали максимальное количество баллов — 30 из 30.</p>
          <p>Вы повелитель птиц!</p>
          <iframe title="ventura gif" src="https://giphy.com/embed/KWxcDVoTd1iaW4LWnW" frameBorder="0" className="final-gif" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/morgancreek-jim-carrey-ace-ventura-pet-detective-KWxcDVoTd1iaW4LWnW">via GIPHY</a></p>
          <button className="again-btn" onClick={this.playAgain}>Хочу еще раз!</button>
        </div>
      )
    } else if (this.state.showResult) {
      return (
        <div className="App last-screen">
          <h1>Song<span>bird</span></h1>
          <p>Поздравляем с окончанием игры!</p>
          <p>Вы набрали {this.state.score} из 30 баллов.</p>
          <button className="again-btn" onClick={this.playAgain}>Пройти еще раз!</button>
        </div>
      )
    }
    return (
      <div className="App">
        <header>
          <Header currentQuestion={this.state.currentQuestion} score={this.state.score} />
        </header>
        <div className="question-block">
          <Question currentTopic={this.state.currentQuestion} onQuestionChoose={this.onQuestionChoose} isDone={this.state.currentResult} key={this.state.currentQuestion} />
        </div>
        <div className="variants-info-block">
          <div className="variants-block">
            <VariantsBlock currentTopic={this.state.currentQuestion} correctBird={this.state.correctAnswer.name} putVariant={this.getVariant} clickVariant={this.onVariantClick} key={this.state.currentQuestion} />
          </div>
          <div className="information-block">
            <InfoBlock currentAnswer={this.state.currentAnswer} isDone={this.state.currentResult} />
          </div>
        </div>
        {this.state.currentResult ? <button className="next-btn active" onClick={this.goToNextLevel}>Перейти дальше</button> : 
        <button className="next-btn" >Перейти дальше</button> }
        <audio src={`./${this.state.currentResult}.mp3`} autoPlay></audio>
      </div>
    )
  } 
}

export default App;
