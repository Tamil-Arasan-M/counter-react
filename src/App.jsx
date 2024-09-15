import React, { Component } from 'react'
import "./app.css"
export default class App extends Component {
    constructor()
    {
        super()
        this.state={
            count:0

           } 
          
    }
    handelIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handelDecrement=()=>{
       if(this.state.count>=1)
       {
        this.setState({
            count:this.state.count-1
        })    
       }
    }
    handelReset=()=>{
        this.setState({
            count:0
        })
       
    }
    green=()=>{
  
      document.body.style.backgroundColor="green"
      document.body.style.color="yellow"
      
    }
    red=()=>{
      

      document.body.style.backgroundColor="red"
      document.body.style.color="aqua"
    } 
     blue=()=>{
      document.body.style.backgroundColor="blue"
      document.body.style.color="violet"
    }
    black=()=>{
      document.body.style.backgroundColor="black"

        document.body.style.color="white"
    }
     

    


  render() {
    return (
      <div >
        <div className='continer'>
       <center> 
        <h1 onMouseEnter={this.black} className='number'>{this.state.count}</h1>
        <button onClick={this.handelDecrement} onMouseEnter={this.blue} className='btn btn3'>- decrement</button>
        <button onClick={this.handelReset} onMouseEnter={this.red} className='btn btn2'>reset</button>
        <button onClick={this.handelIncrement} onMouseEnter={this.green} className='btn btn1'>+ increment</button>

        </center>
      </div>
      </div>
    )
  }
}
 