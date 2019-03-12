import React, { useState } from 'react'

const Forme = props => {

   const initial = { id: null, nom: '', prenom: '' }

   const [ user, setUser ] = useState(initial)

         const changed = event => {

            const { name, value } = event.target
         
            setUser({ ...user, [name]: value })
      }

	return (
		<form id="test"
            onSubmit={event => {
               event.preventDefault()
               if (!user.nom || !user.prenom) return
         
               props.ajouter(user)
               props.setCount(props.count +1)
               
               setUser(initial)
            }}>
               <label>Produit</label>
               <input type="text" name="nom" value={user.nom} onChange={changed}/>
               <label>Prix</label>
               <input type="text" name="prenom"  value={user.prenom} onChange={changed}/>
               <label>Ar</label>
               <button id="ajout" className="btn btn-info">Ajouter</button>
		</form>
   )
}
export default Forme