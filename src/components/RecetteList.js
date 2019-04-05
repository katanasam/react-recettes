import React, { Component } from 'react';
import Recette from './Recette';
import RecetteSearch from './RecetteSearch';

export default class RecetteList extends Component {
    
  render() {
// je recuper les infos dans un tableau envoyer depuis App comme proprieter 
const {
  recettes,
  handleDetails,
 search,
  handleSubmit,
  HandleChange
    } = this.props;

    return (
      <React.Fragment>
        <RecetteSearch 
        value={search} 
        handleSubmit={handleSubmit}
         HandleChange={HandleChange} 
         /> 
        <div className="container my-5">

        {/* title */}
        <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center">
                <h1 className="text-slanted"> Recette List</h1>
            </div>
        </div>

        {/* end of title */}
        <div className="row">

        {/* boucle pour vider le tableau */}
        {/* on utulise la fonction map  */}
        {recettes.map( recette =>{
             return(
            <Recette
            // on envoi l  id qui est note reccipe_id individuellemnt
            key={recette.recipe_id}
            // on envoie tous le recette  a traver un seul objet
            recette={recette}
            handleDetails={()=>handleDetails(0,recette.recipe_id)} />
            )})
        }    
        
        </div>
        </div>

      </React.Fragment> 
    )
  }
}
