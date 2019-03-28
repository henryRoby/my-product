import React, { useState } from 'react'


const Form = props => {
   const initial = { id: null, Produits: '', Prix: '' }
   const [ user, setUser ] = useState(initial)
   const changed = event => {
   const { name, value } = event.target
   setUser({ ...user, [name]: value })
 }

	return (
		<form 
      onSubmit={event => {
         event.preventDefault()
         
         if (!user.Produits || !user.Prix) return

            props.ajouter(user)
            props.setCount(props.count + 1)
            setUser(initial)
            
   
       }}>
         <div className="row">
            <div className="col-md-4"><label>Heure</label>
			         <input placeholder="00:00:00" type="text" name="Produits" className="id1" value={user.Produits} onChange={changed}/>
            </div>
            <div className="col-md-4 gag">
                   <div><label>Tache</label></div> 
			         <textarea id='texte' type="text" name="Prix"   value={user.Prix} onChange={changed} ></textarea>
            </div>
            <div className="col-md-4">
               <button id="ajout" className="btn btn-primary">Ajouter</button>
            </div>
         </div>
         
       
		</form>
   )
}
export default Form