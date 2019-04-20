import React, {Component} from 'react'
import  Quiz from './Quiz';
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="QuizQuestion">
          <Quiz/>
      </div>
      
    )
  };
};



export default App