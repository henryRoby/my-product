import React, { useState } from 'react';
import Tableau from './Tableau';
import Form from './Form';
import './Form.css';
import './Tableau.css';
import Time from './Table/Time'
import './Table/time.css';


const App = () => {
    const usersData = []


    const updateUser = (id, updatedUser) => {
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
  
		const [ users, setUsers ] = useState(usersData)
    const [count, setCount] = useState(0);

    const edit =(id,a)  => {
    
     users.map(user => (user.id === id ?  user.Prix=a:user.Prix ))
      
      console.log(id);
      console.log(a);
      
    }

    const ajouter = user => {
      user.id = count
      user.Produits= user.Produits.substr(0,1).toUpperCase()+	user.Produits.substr(1,user.Produits.length).toLowerCase()
      setUsers([ ...users, user ])
      
    }
    const suppr = id => {
        setUsers(users.filter(user => user.id !== id))
    }
    

    const somme=()=>{
      let total=0;
      for(let i=0;i<users.length;i++){
          total=total+parseInt(users[i].Prix);
      }
       let a=[total]
         
      var numberFormat = new Intl.NumberFormat("es-ES");
      var formatted = a.map(numberFormat.format);
      
      return formatted.join("; ")
      }

    return (
      <div  className="container">
      <div id ='bod' className="flex-row">
        <div className="flex-large">
          <Form  ajouter={ajouter} setCount={setCount} count={count}/>
        </div>
        <div>
          <Time  users={users}/>
        </div>
        <div className="flex-large">
          <Tableau  users={users} suppr={suppr} edit={edit} somme={somme}  updateUser={updateUser}/>
        </div>
      </div>
    </div>
    )
  };

export default App;
