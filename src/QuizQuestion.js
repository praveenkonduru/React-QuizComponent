import React, {Component} from 'react';
import './App.css';
class QuizQuestion extends Component{
   render(){
       return( 
        <main>
        <section className="QuizQuestion">
          <p>{this.props.quiz_question}</p>
        </section>
        <section className="buttons">
          <ul>
          <li>{this.props.answer_options[0]}</li>
          </ul>
        </section>
      </main>

       );
    }
}
export default QuizQuestion;