import React, { Component } from 'react';
import  {recipe} from "../tempDetails";

export default class RecetteDetail extends Component {
    constructor(props){
        super(props)

        this.state ={
            recette:recipe,
            // on passe dans lurl un id particulier pour avoir les detail de la recettes grace a lapi
            url:`https://www.food2fork.com/api/get?
            key=ec218bed880051a8d823ccbc5993b459&rId=
            ${this.props.id}`

        };
    }

//   // je sais pas ???
//  async componentDidMount(){
//     try{
//       const data = await fetch(this.state.url);
//       const jsonData =  await data.json();
//       this.setState({
//         recette:jsonData.recipe
//       });
//     }catch(error)
//     {
//       console.log(error);
//     };
//   }
   
    render() {
      //console.log(this.state.recette);
     //toutes ses valeur sont dans le tableau de recette qui contien recettedetail
     const {
         image_url,
         publisher,
         publisher_url,
         source_url,
         title,
         ingredients
        } = this.state.recette;
    const{handleIndex} =this.props;
    
    return (
      <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <button onClick={()=>handleIndex(1)} type="button" className="btn btn-warning mb-5 text-capitalize">
                        retour list
                    </button>
                    <img src={image_url} className="d-block w-100" alt="img "/>
                </div>
                {/* detail */}
                <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className=""> provided by {publisher} </h6>
                <a href={publisher_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary mt-2 text-capitalize"> publisher webpage</a>
                <a href={source_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-success mt-2 mx-3 text-capitalize"> recette url</a>
                <ul className="list-group mt-4">
                    <h2 className="mt-3 mb-4"> Ingredients</h2>
                    {/* ingerdient est un tableau, ont ulitilise la fonction map */}
                    {
                        ingredients.map((item, index) => {
                            return (
                                <li key={index} className='list-group-item'>
                                {item}
                                </li>
                            )
                        })
                    }

                </ul>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
