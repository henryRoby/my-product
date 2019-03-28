import React, {Component} from 'react';

class Time extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {date: new Date(),
                        rdv:''}; 
    } 

    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(), 
            1000 
        ); 
    } 

    componentWillUnmount() { 
        clearInterval(this.timerID); 
    } 

    tick() { 
        this.setState({ 
        date: new Date() ,
        rdv: this.affichage(this.heurEnSec(this.state.date.getHours(),this.state.date.getMinutes(),this.state.date.getSeconds()))
        }); 
    } 
    heurEnSec(h,m,s){
        return h*3600+m*60+s
    }

    

    dateHMS=(seconds)=> {
        const hours = seconds / 3600
        const minutes = (seconds % 3600) / 60
        seconds %= 60
      
        return [hours, minutes, seconds].map(this.format).join(':')
      }
    format =(val)=> {
        return ('0' + Math.floor(val)).slice(-2)
    }

     affichage=(a)=>{
        if(this.props.users.length>1){
          for(let i=0;i<this.props.users.length;i++){
             let c= this.props.users[i].Produits.split(':')
              if(a<this.heurEnSec(parseInt(c[0]),parseInt(c[1]),parseInt(c[2]))){
                  // i=this.props.users.length
                  console.log("tache a faire",this.props.users[i].Prix)
                  let g= this.props.users[i].Prix
                  let h= this.props.users[i].Produits
                  i=this.props.users.length
                  return g +" à "+ h
                  
              }
          }
        }else{
          console.log("taille<2: ",this.props.users.length)
          return " "
        }
          
      }
      
   

    render() { 
    return (
     <div className = 'time'> 
     
     <p id ='time'>{this.state.date.getHours()<=9?"0"+this.state.date.getHours():this.state.date.getHours()}:{this.state.date.getMinutes()<=9?"0"+this.state.date.getMinutes():this.state.date.getMinutes()}:{this.state.date.getSeconds()<=9?"0"+this.state.date.getSeconds():this.state.date.getSeconds()}</p> 
     <p >{this.state.rdv}</p>
     </div> 
    ); 
    } 
}
export default Time