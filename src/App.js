import React, { useState, Fragment } from 'react'
import AddUserForm from './Components/AddUserForm'
import EditUserForm from './Components/EditUserForm'
import UserTable from './Components/UserTable'

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
    if (!isNaN(user.username)) {
      user.id = users.length + 1
      setUsers([ ...users, user ])
    }else{

          document.getElementById("demo").innerHTML = "Entrer un nombre";
  
    }
    
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
      </div>
    </div>
  )
}

export default App
