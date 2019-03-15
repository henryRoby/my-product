import React, { useState, Fragment } from 'react'
import AddUserForm from './Components/AddUserForm'
import UserTable from './Components/UserTable'
import EditUserForm from './Components/EditUserForm'
import './App.css'
import './Components/UserTable.css'
import './Components/AddUserForm.css'
import './Components/EditUserForm.css'

const App = () => {
  // Data
  const usersData = []

  const initialFormState = { id: null, name: '', username: '' }

  // Setting state
  const [ users, setUsers ] = useState(usersData)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([ ...users, user ])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))


  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const somUsername=()=>{
    var get = document.getElementById('get')
    let tota = 0
    for(let i=0 ; i < users.length; i++){
      tota = tota + parseInt(users[i].username)
    }
    let val = [tota] 

    var numbFormat = new Intl.NumberFormat("es-ES")
    var formaFini = val.map(numbFormat.format)
    get.innerHTML = formaFini
    return formaFini.join(";")
  }

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
         <div className="flex-large">
          <button id="total" onClick = {()=>{somUsername()}} className="btn btn-primary">TOTAL</button>
          <p id="resultat">TOTAL = &nbsp;<span id="get"></span>Ar</p>
        </div>
      </div>
    </div>
  )
}

export default App
