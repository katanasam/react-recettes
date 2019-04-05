import React, { Component } from 'react';
import {recipes} from './tempList';
import RecetteList from './components/RecetteList';
import RecetteDetail from './components/RecetteDetail';
import './App.css';

class App extends Component {
  state={
    recettes:recipes,
    url:"https://www.food2fork.com/api/search?key=ec218bed880051a8d823ccbc5993b459",
    base_url:"https://www.food2fork.com/api/search?key=ec218bed880051a8d823ccbc5993b459",
    detail_id:35384,
    pageIndex: 1,
    search:'',
    query:'&q='
  }

  // async getRecettes(){
  //   // essaye de recupere les data
  //   try{
  //     // recuperation de API DATTA,
  //     const data = await fetch(this.state.url);
  //     // ils nous faut mettre no data au bon format json
  //     const jsonData =  await data.json();

  //     // on remplie notre tablau de recette vide
  //     this.setState({
  //       recettes: jsonData.recettes
  //     });

  //   }catch(error){
  //     console.log(error);
  //   };

  // }
  // // je sais pas ???
  // componentDidMount(){
  //   this.getRecettes()
  // }

  // pour pouvoir afficher les pages en fonction du click
  displayPage = (index) =>{
    switch(index){
      default:
      case 1:
      return(<RecetteList 
        recettes={this.state.recettes} 
        handleDetails={this.handleDetails} 
        search={this.state.search}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>)
      case 0:
      return ( <RecetteDetail id={this.state.detail_id} handleIndex={this.handleIndex} />)
    }
  }

  handleIndex = (index) =>{
      this.setState({
      pageIndex:index
      })
  };

  handleDetails = (index, id) =>{
    this.setState({
      pageIndex: index,
      detail_id: id

    })
  };
  // fonction pour la recherche
  handleChange = e =>{
    this.setState({
      search: e.target.value
    },
    )
  };

  handleSubmit = (e) =>{
    // enpeche la page de se recharger lord du click
   e.preventDefault();
   const{base_url,query,search} = this.state;
   this.setState(
     ()=> {
     return {
       url:`${base_url}${query}${search}`,
       search:""
      };
   },
   ()=>{
     //this.getRecettes();
     // calback fonction
   })

  };
    
    
  render() {
    //console.log(this.state.recipes);
    return (
      <React.Fragment>
      {this.displayPage(this.state.pageIndex)}
   
     
      </React.Fragment>
    );
  }
}

export default App;
