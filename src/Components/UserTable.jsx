import { confirmAlert } from 'react-confirm-alert';
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' 
import 'bootstrap/dist/css/bootstrap.min.css'

class confirm extends Component {
 
    submit = (a) => {
        confirmAlert({
          message: ' Suppression produit',
          buttons: [
            {
              label: 'OUI',
              onClick: () => this.props.deleteUser(a)
            },
            {
              label: 'NON',
            }
          ]
        })
      };

      render(){
            return (
              
                    <table class="table table-bordered">
                      <thead>
                        <tr  className="tab">
                          <th>Id</th>
                          <th>Produits</th>
                          <th>Prix</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.users.length > 0 ? (
                          this.props.users.map(user => (
                            <tr key={user.id}>
                              <td id="nume">{user.id}</td>
                              <td id="up">{user.name}</td>
                              <td id="num">{user.username}</td>
                              <td>
                                <button id ="danger" className="btn btn-danger" onClick={()=>this.submit(user.id)}>X</button>
                                <button id ="success" className="btn btn-success" 
                                onClick={() => { this.props.editRow(user)}} data-toggle="modal" data-target="#myModal">Edit</button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                          </tr>
                        )}
                      </tbody>
                    </table>
             );

          
      }
}

export default confirm;