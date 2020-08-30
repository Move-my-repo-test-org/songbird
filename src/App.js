import React from 'react';
import Header from './Header/Header';
import Question from './Question/QuestionBlock'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header currentQuestion={this.state.currentQuestion} />
        </header>
        <div className="question-block">
          <Question currentTopic={this.state.currentQuestion} />
        </div>
        <p>Hello</p>
      </div>
    )
  } 
}

export default App;
