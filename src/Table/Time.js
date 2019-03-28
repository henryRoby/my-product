import React, {Component} from 'react';

class Time extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {date: new Date(),
                        rdv:'',
                        chr:'',
                        a:''}; 
        
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
        
          for(let i=0;i<this.props.users.length;i++){
             let c= this.props.users[i].Produits.split(':')
              if(a<this.heurEnSec(parseInt(c[0]),parseInt(c[1]),parseInt(c[2]))){
                  // i=this.props.users.length
                  console.log("tache a faire",this.props.users[i].Prix)
                  let ch=this.heurEnSec(parseInt(c[0]),parseInt(c[1]),parseInt(c[2]))-a
                  this.setState({
                    chr:this.dateHMS(ch)
                  })
                  let g= this.props.users[i].Prix
                  let h= this.props.users[i].Produits
                  this.setState({
                    a:h
                  })
                  i=this.props.users.length
                  return g 
                  
              }
          }
        
          
      }
      
   

    render() { 
    return (
     <div className = 'time'> 
     
     <p id ='time'>{this.state.date.getHours()<=9?"0"+this.state.date.getHours():this.state.date.getHours()}:{this.state.date.getMinutes()<=9?"0"+this.state.date.getMinutes():this.state.date.getMinutes()}:{this.state.date.getSeconds()<=9?"0"+this.state.date.getSeconds():this.state.date.getSeconds()}</p> 
        <p >
          <label id='tach'>Tache à faire : </label> 
           <span id='rdv'>{this.state.rdv}&nbsp;
            <label id='a'> à </label>&nbsp;
            <label  id ='prec'>{this.state.a}</label>
           </span> 
        </p>
     <p ><label id='chro'>Temps restant : </label>   <span id='chr'>{this.state.chr}</span></p>
     </div> 
    ); 
    } 
}
export default Time