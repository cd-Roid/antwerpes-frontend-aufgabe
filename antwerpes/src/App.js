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
      yesArray: [],
      noArray: [],
      calculatedYes: 0,
      calculatedNo: 0,
      showPage: false
    }   
  }

  setCalculatedYes = (answer) => {
    let yesArray = this.state.yesArray;
    let noArray = this.state.noArray;
    let index = 0;
    console.log(yesArray)
    if(this.state.calculatedNo >= 1){
      this.setState({calculatedYes: this.state.calculatedYes+1});
      yesArray.push(answer);
      this.setState({yesArray: yesArray});
      index = noArray.indexOf(answer);
      noArray.slice(index,1);
      this.setState({calculatedNo: this.state.calculatedNo-1});
    }else{
      this.setState({calculatedYes: this.state.calculatedYes+1});
      yesArray.push(answer);
      this.setState({yesArray: yesArray});
    }
  }
  
  setCalculatedNo = (answer) => {
    let yesArray = this.state.yesArray;
    let noArray = this.state.noArray;
    let index = 0;

    if(this.state.calculatedYes >= 1){
      this.setState({calculatedNo: this.state.calculatedNo+1});
      noArray.push(answer);
      this.setState({noArray: noArray});
      index = yesArray.indexOf(answer);
      yesArray.slice(index,1); 
      this.setState({yesArray: yesArray});
      this.setState({calculatedYes: this.state.calculatedYes-1});
    }else{
      this.setState({calculatedNo: this.state.calculatedNo+1});
      noArray.push(answer);
      this.setState({noArray: noArray});
    }
  }
  showStats = () => {
    this.setState({showPage: true});
    this.showYes();
  }

  showYes = () => {
    let answers = this.state.answers;
    let yes = [];
    let no = {};
      console.log(answers);
      Object.keys(this.state.answers).map(
        el => console.log(el)
      )
  }
  
   setAnswer = (event) => {
    let target = event.target.name;
      switch (target) {
        case '1-j': 
          this.setState({ answers: {...this.state.answers, answer1: true}});
          this.setCalculatedYes("answer1");
          break;
        case '2-j': 
          this.setState({ answers: {...this.state.answers, answer2: true}});
          this.setCalculatedYes("answer2");
          break;
        case '3-j': 
          this.setState({ answers: {...this.state.answers, answer3: true}});
          this.setCalculatedYes("answer3");
          break;
        case '4-j': 
          this.setState({ answers: {...this.state.answers, answer4: true}});
          this.setCalculatedYes("answer4");
          break;
        case '5-j': 
          this.setState({ answers: {...this.state.answers, answer5: true}});
          this.setCalculatedYes("answer5");
          break;
        case '1-n': 
          this.setState({ answers: {...this.state.answers, answer1: false}});
          this.setCalculatedNo("answer1");
          break;
        case '2-n': 
          this.setState({ answers: {...this.state.answers, answer2: false}});
          this.setCalculatedNo("answer2");
          break;
        case '3-n': 
          this.setState({ answers: {...this.state.answers, answer3: false}});
          this.setCalculatedNo("answer3");
          break;
        case '4-n': 
          this.setState({ answers: {...this.state.answers, answer4: false}});
          this.setCalculatedNo("answer4");
          break;
        case '5-n': 
          this.setState({ answers: {...this.state.answers, answer5: false}});
          this.setCalculatedNo("answer5");
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
          <button name="1-j" onClick={this.setAnswer} className="button">ja</button>
          <button name ="1-n" onClick={this.setAnswer} className="button">nein</button>
        </section>

        <section>
          <h2>Frage 2?</h2>
          <button name="2-j" onClick={this.setAnswer} className="button">ja</button>
          <button name="2-n" onClick={this.setAnswer} className="button">nein</button>
        </section>

        <section>
          <h2>Frage 3?</h2>
          <button name="3-j" onClick={this.setAnswer} className="button">ja</button>
          <button name="3-n" onClick={this.setAnswer} className="button">nein</button>
        </section>

        <section>
          <h2>Frage4?</h2>
          <button name="4-j" onClick={this.setAnswer} className="button">ja</button>
          <button name="4-n" onClick={this.setAnswer} className="button">nein</button>
        </section>

        <section>
          <h2>Frage 5?</h2>
          <button name="5-j" onClick={this.setAnswer} className="button">ja</button>
          <button name="5-n" onClick={this.setAnswer} className="button">nein</button>
        </section>

        <div>
          <button name="auswerten" onClick={this.showStats} className="button__submit">Auswerten</button>
        </div>

        <section name="stats-page" className= {this.state.showPage? "stats": "stats-hidden"}>
            <div className="calculated__yes">
              <p>Anzahl Fragen, die mit ja beantwortet wurden</p>
              <div>{this.state.calculatedYes}</div>
            </div>

            <div className="calculated__no">
            <p>Anzahl Fragen, die mit nein beantwortet wurden</p>
            <div>{this.state.calculatedNo}</div>
            </div>
            <div className="answers__yes">
              <p> Fragen die mit ja beantwortet wurden</p>
              <div>{this.state.yesArray.map(el => {return el + ' '})}</div>
            </div>
            <div className="answers__no">
              <p> Fragen die mit nein beantwortet wurden</p>
              <div>{this.state.noArray}</div>
            </div>
        </section>
      </div>
    )
  }

}

export default App;