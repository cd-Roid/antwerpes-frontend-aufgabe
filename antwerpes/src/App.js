import './App.css'
import {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      answers: {
        answer1: '', 
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
      },
      calculatedYes: 0,
      calculatedNo: 0,
      showPage: false
    }   
  }

  setCalculatedYes = () => {
    if(this.state.calculatedNo > 0){
      this.setState({calculatedYes: this.state.calculatedYes+1});
      this.setState({calculatedNo: this.state.calculatedNo-1});  
    }else{
      this.setState({calculatedYes: this.state.calculatedYes+1});
    }
  }
  
  setCalculatedNo = () => {
    if(this.state.calculatedYes > 0){
      this.setState({calculatedNo: this.state.calculatedNo+1});
      this.setState({calculatedYes: this.state.calculatedYes-1});  
    }else{
      this.setState({calculatedNo: this.state.calculatedNo+1});
    }
  }
  showStats = () => {
    this.setState({showPage: true});
  }

  showYes = () => {
    let answers = this.state.answers;

    answers.array.forEach(element => {
      
    });
  }
  
   setAnswer = (event) => {
    let target = event.target.name;
      switch (target) {
        case '1-j': 
          this.setState({ answers: {...this.state.answers, answer1: true}});
          this.setCalculatedYes();
          break;
        case '2-j': 
          this.setState({ answers: {...this.state.answers, answer2: true}});
          this.setCalculatedYes();
          break;
        case '3-j': 
          this.setState({ answers: {...this.state.answers, answer3: true}});
          this.setCalculatedYes();
          break;
        case '4-j': 
          this.setState({ answers: {...this.state.answers, answer4: true}});
          this.setCalculatedYes();
          break;
        case '5-j': 
          this.setState({ answers: {...this.state.answers, answer5: true}});
          this.setCalculatedYes();
          break;
        case '1-n': 
          this.setState({ answers: {...this.state.answers, answer1: false}});
          this.setCalculatedNo();
          break;
        case '2-n': 
          this.setState({ answers: {...this.state.answers, answer2: false}});
          this.setCalculatedNo();
          break;
        case '3-n': 
          this.setState({ answers: {...this.state.answers, answer3: false}});
          this.setCalculatedNo();
          break;
        case '4-n': 
          this.setState({ answers: {...this.state.answers, answer4: false}});
          this.setCalculatedNo();
          break;
        case '5-n': 
          this.setState({ answers: {...this.state.answers, answer5: false}});
          this.setCalculatedNo();
          break;
     
        case 'auswerten': 
          console.log(JSON.stringify(this.state));

          break;
      
        default: throw new Error("No target given")
      }
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
          <button name="auswerten" onClick={this.showStats}>Auswerten</button>
        </div>

        <section name="stats-page" className={this.state.showPage? "stats": "stats-hidden"}>
            <div>
              <p>Anzahl Fragen, die mit ja beantwortet wurden</p>
              <div>{this.state.calculatedYes}</div>
            </div>

            <div>
            <p>Anzahl Fragen, die mit nein beantwortet wurden</p>
            <div>{this.state.calculatedNo}</div>
            </div>
            <div>
              <p> Fragen die mit ja beantwortet wurden</p>
              <div></div>
            </div>
            <div>
              <p> Fragen die mit ja beantwortet wurden</p>
              <div></div>
            </div>
        </section>
      
      </div>
    )
  }

}

export default App;