import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imgSrc: this.props.pokemon.sprites.front, 
    clicked: false
  }

  imageClickHandler= () => {
    this.setState({clicked: !this.state.clicked})
    if (this.state.clicked === false) {
      this.setState({imgSrc: this.props.pokemon.sprites.front})
    } else {
      this.setState({imgSrc: this.props.pokemon.sprites.back})
    }
  }
  render() {
    let {pokemon} = this.props
    // console.log(this.props)
    // debugger
    // console.log(this.state.clicked  )

    return (
      <Card>
        <div>
          <div className="image">
            <img alt={pokemon.name} src={this.state.imgSrc} onClick = {this.imageClickHandler}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
