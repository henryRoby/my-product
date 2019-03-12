import React, { useState } from 'react';

import Forme from './Components/forme';
import Tableau from './Components/tableau';
import EditUserForm from './Components/EditUserForm'
import './App.css';

const App = () => {
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)

    const [count, setCount] = useState(0);

    const ajouter = user => {
      user.id = count
      setUsers([ ...users, user ])
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const [ editing, setEditing ] = useState(false)

    const initialFormState = { id: null,  username: '' }

    const [ currentUser, setCurrentUser ] = useState(initialFormState)

    const editRow = user => {
      setEditing(true)
    
      setCurrentUser({ id: user.id, username: user.prenom })
    }

    const updateUser = (id, updatedUser) => {
      setEditing(false)
    
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    return (
      <div id="corps" className="container">
        <div className="flex-row">
        
            <div className="flex-large">
            {editing ? (
              <div>
                <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}
                />
              </div>
            ) : (
              <Forme ajouter={ajouter} count={count} setCount={setCount} />
              )}
            </div>
            <div className="flex-large">
              <Tableau users={users} editRow={editRow} deleteUser={deleteUser}/>
            </div>
        </div>
    </div>
    ) 
  };

export default App;