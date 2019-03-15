import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [ user, setUser ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div>
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return
         if(isNaN(user.username)){
                    var err = document.getElementById('addErreur')
                    err.innerHTML = 'Entrer un nombre'
                }else{
                    var err2 = document.getElementById('addErreur')
                    err2.innerHTML = ''
        props.addUser(user)
        setUser(initialFormState)
      }
    }}
    >
      <label>Produit</label>&nbsp;&nbsp;
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label id="prix">Prix</label>&nbsp;&nbsp;
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />&nbsp;&nbsp;&nbsp;Ar
      <button class="btn btn-info" id="ajout">Ajouter</button>
    </form>
    <p id="addErreur"></p>
    </div>
  )
}

export default AddUserForm