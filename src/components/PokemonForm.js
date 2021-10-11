import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => ({name: '', hp: '', frontUrl: '', backUrl: ''})

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  } 

  handleSubmit = e => {
    e.preventDefault()
    const {name, hp, frontUrl, backUrl} = this.state
    console.log({
      name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    } )
    fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    })
    })
    .then(res => res.json())
    .then(data => this.props.addPokemon(data))
    .catch(error => console.log(error))
    this.setState(this.getInitialState())
  }
  render() {
    const { name, hp, frontUrl, backUrl } = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
            />
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="hp" 
              placeholder="hp" 
              name="hp"
              value={hp} 
            />
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl"
              value={frontUrl}
            />
            <Form.Input onChange={this.handleChange} 
            fluid label="Back Image URL" 
            placeholder="url" 
            name="backUrl"
            value={backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
