import React, { Component } from 'react'

export default class RecetteSearch extends Component {
  render() {
    const {
      value,
      handleSubmit,
      handleChange
    } = this.props;

    return (
     <React.Fragment>
     <div className="container">
    <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
           <h1 className="text-capitalize">  recherche  de Recette <strong> Food2Fork</strong></h1>
           <form onClick={handleSubmit} className="mt-4">
               <label htmlFor="search" className="text-capitalize">
                   Nom de la Recette 
               </label>
               <div className="input-group">
                   <input type="text" name="search" placeholder="poulet,viande" className="form-control"/>
                   <div className=" input-group-append">
                       <button type="submit" onChange={handleChange} value={value} className="input-group-text bg-primary text-white">
                           <i className="fas fa-search"/>
                       </button>
                   </div>
      
               </div>
           </form>
            
        </div>
    </div>
</div>
     </React.Fragment>
    )
  }
}
