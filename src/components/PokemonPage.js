import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [], 
    search: ""
  }
 componentDidMount = () => {
  fetch( 'http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(pokemonArray => {
    this.setState({pokemons: pokemonArray})
    // console.log(pokemonArray)
  });
 }

  searchHandler = (searchParam) => {
    this.setState({search: searchParam})
  }

  filterPokemons = () => { return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  submitHandler = (newPokemonObj) => {
    let pokemonObj = {
      name: newPokemonObj.name, 
      hp: newPokemonObj.hp, 
      sprites: {
        front: newPokemonObj.frontUrl, 
        back: newPokemonObj.backUrl
      }
    }

    console.log(newPokemonObj.name)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemonObj),
    })
    .then(response => response.json())
    .then(newPokemon => {
      // let newArray = [...this.state.pokemons]
      this.setState({pokemons: [...this.state.pokemons, newPokemon]})
      console.log('Success:', newPokemon);
    })
  }

  render() {
    // console.log(this.filterPokemons())
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler ={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.search}/>
        <br />
        <PokemonCollection pokemons= {this.filterPokemons()}/>
      </Container>
    )
  }
}

export default PokemonPage
