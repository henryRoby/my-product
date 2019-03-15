import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div id="popup1" class="overlay">
                  <form
                    onSubmit={event => {
                      event.preventDefault()

                      props.updateUser(user.id, user)
                    }}
                  >
                    <input id="input" type="number" name="username" value={user.username} onChange={handleInputChange} />
                   <div class="content">
                      <button id="conf">OK</button>
                      <button id="conf" onClick={() => props.setEditing(false)} className="button muted-button">
                        Annuler
                      </button>
                    </div>
                  </form>
    </div>
  )
}

export default EditUserForm
