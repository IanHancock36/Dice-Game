import React, {Component} from 'react'; 
import Die from './Die'; 
import './RollDice.css'

class RollDice extends Component {
    static defaultProps={
        sides:["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state = {die1 : 'one', die2: 'one'}
        this.roll = this.roll.bind(this)
        
    }
    roll(){
        //pick 2 new rolls // the array length is length 0-5
       const newDie1 =this.props.sides[ 
           Math.floor(Math.random()*this.props.sides.length)];

           const newDie2 =this.props.sides[ 
            Math.floor(Math.random()*this.props.sides.length)]   
        // set state with new roll
        this.setState ({die1:newDie1, die2: newDie2 }); 


    }
    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
                </div> 
                <button onClick = {this.roll}>Role Dice Homie!</button>
                
            </div>
        )
        
    }
}

export default RollDice;
