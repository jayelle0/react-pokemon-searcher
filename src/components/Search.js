import React from 'react'

class Search extends React.Component {
  localHandler = (event) => {
  //  console.log(event.target.value)
   this.props.searchHandler(event.target.value)
 }
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input  type= "text" className="prompt" value= {this.props.searchValue} onChange={this.localHandler}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
