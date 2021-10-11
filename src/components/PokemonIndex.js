import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(result => result.json())
    .then(data => this.setState({pokemon: data}))
    .catch(error => console.log("ERROR", error))
  }

  addPokemon = newPokemon => {
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }
  handleSearchFilter = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render() {
    const filteredPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search filterPokemon={this.handleSearchFilter} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonIndex
