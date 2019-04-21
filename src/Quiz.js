import React,  {Component} from 'react';
import QuizQuestion from './QuizQuestion';
let quizData = require('./quiz_data.json');

class Quiz extends Component{
  
    constructor(props) {
      super(props);
      this.state={
        quiz_position:1
      }
      this.question = quizData.quiz_questions[this.state.quiz_position-1]["instruction_text"]
      this.answeroptions = quizData.quiz_questions[this.state.quiz_position-1]["answer_options"]
      this.correctanswer = quizData.quiz_questions[this.state.quiz_position-1]["answer"]
      
    }
    
    render(){
      return(
          <QuizQuestion quiz_question={this.question} answer_options={this.answeroptions}/>
      )
    }
  }


export default Quiz;