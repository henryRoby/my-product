import React, { useState } from 'react';

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()

				props.updateUser(user.id, user)
			}}
		>
			<input type="text" name="username" value={user.prenom} onChange={handleInputChange} />
			<button>OK</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Annuler
			</button>
		</form>
	)
}

export default EditUserForm