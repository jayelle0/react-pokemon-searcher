import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "", 
    hp: "", 
    frontUrl: "", 
    backUrl: ""
    }
  

  changeHandler = event => {
    // console.log(event.target.value)
     this.setState({[event.target.name]: event.target.value})
  }

  localSubmitHandler = event => {
    event.preventDefault() 
    this.props.submitHandler(this.state)
    this.setState({
      name: "", 
      hp: "", 
      frontUrl: "", 
      backUrl: ""
      })
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.changeHandler} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.changeHandler} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.changeHandler} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.changeHandler} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
