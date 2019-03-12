import { confirmAlert } from 'react-confirm-alert';
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' 


class Tableau extends Component {
    submit = (a) => {
        confirmAlert({
          message: ' confirmer suppression',
          buttons: [
            {
              label: 'Oui',
              onClick: () => this.props.deleteUser(a)
            },
            {
              label: 'Non',
            }
          ]
        })
      };
     
      render(){
            return (
                <center>
                    <table  className="table table-bordered">
                    <thead id ="Thead">
                        <tr className="tab">
                            <th>id</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length > 0 ? (
                        this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nom}</td>
                                    <td>{user.prenom}</td>
                                    <td>
                                        <button id ="danger" className="btn btn-danger" onClick={()=>this.submit(user.id)}>X</button>

                                        <button onClick={() => this.props.editRow(user)} className="button muted-button">Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                              {/*   <td colSpan={3}></td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
	           </center>
            );
      }
}
	

export default Tableau;