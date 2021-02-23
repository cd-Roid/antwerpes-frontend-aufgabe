import './App.css'
import {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      answer1: false, 
      answer2: false,
      answer3: false,
      answer4: false,
      answer5: false
    }   
  }
  
   setAnswer = (event) => {
    let target = event.target.name;
    console.log(target);
  }

  render(){

    return (
      <div className="App">
        <section>
          <h2>Frage 1?</h2>
          <button name="1-j" onClick={this.setAnswer}>ja</button>
          <button name ="1-n" onClick={this.setAnswer} >nein</button>
        </section>

        <section>
          <h2>Frage 2?</h2>
          <button name="2-j" onClick={this.setAnswer}>ja</button>
          <button name="2-n" onClick={this.setAnswer}>nein</button>
        </section>

        <section>
          <h2>Frage 3?</h2>
          <button name="3-j" onClick={this.setAnswer}>ja</button>
          <button name="3-n" onClick={this.setAnswer}>nein</button>
        </section>

        <section>
          <h2>Frage4?</h2>
          <button name="4-j" onClick={this.setAnswer}>ja</button>
          <button name="4-n" onClick={this.setAnswer}>nein</button>
        </section>

        <section>
          <h2>Frage 5?</h2>
          <button name="5-j" onClick={this.setAnswer}>ja</button>
          <button name="5-n" onClick={this.setAnswer}>nein</button>
        </section>

        <div>
          <button name="auswerten" onClick={this.setAnswer}>Auswerten</button>
        </div>
      
      </div>
    )
  }

}

export default App;