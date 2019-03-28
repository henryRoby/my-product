import React, {Component} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Tableau extends Component {
  submit = (e,a) => {
    confirmAlert({
      title: 'suppression d/heure',
      message:a ,
      buttons: [
        {
          label: 'OUI',
          onClick: () => this.props.suppr(e)
        },
        {
          label: 'NON',
          onClick: () => console.log('suppression refusée')
        }
      ],
      
    })
  }

  render() {
    return(
      <div>
        
        
      <table className="table table-hover table-bordered">
      <thead>
        <tr className="table">
          
          <th scope="col">Heure</th>
          <th scope="col">Tache à faire</th>
          <th scope="col" className="act">Actions</th>
        </tr>
      </thead>
      <tbody  >
        {this.props.users.length > 0 ? (
          this.props.users.map(user => (
            <tr>
              
              <td>{user.Produits}</td>
              <td id="prix">{user.Prix}</td>
              <td>


                <div className="row">
                
                    
                    <button aria-label="Supprimer" id="suppr"
                       onClick={() => this.submit(user.id,user.Produits)} className ="btn btn-danger" > <e id="ex">X</e></button>
                    

    
                    <button  className ="btn btn-success" id='edit'
                    onClick={(e) => {
                      confirmAlert({
                          customUI: ({ onClose }) => {
                            return (  
                              <form id='ID'>
                                <center>
                                  <div>
                                    <input name='input' placeholder={ user.Prix } id="e" className="modifier"></input><br/>
                                    
                                    <div id="gt"></div>                                             
                                    <button id="g" className="btn btn-dark"
                                    onClick={() => {
                                      e.preventDefault()
                                      
                                      var test = document.forms['ID'].elements['input'].value
                                        
                                        
                                          user.Prix = test;
                                          this.props.updateUser(user.id, user)
                                        
                                          onClose();
                                        
                                      }
                                    } 
                                    >Ok</button>

                                    <button id="l" className="btn btn-dark" onClick={onClose}>Annuler</button>
                                  </div>
                                </center>
                              </form>
                            );
                          }
                        })
                  }
                }>
                      Edit
                    </button>
                    
                </div>
              
         
                
          
            
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}></td>
          </tr>
        )}
      </tbody>
      </table>

  </div> 
      )
      }
  }

export default Tableau;