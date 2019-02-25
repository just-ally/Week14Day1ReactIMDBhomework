import React, { Component } from 'react';
import Film from './Film.js'

class FilmList extends Component {

  render(){
    const filmNodes = this.props.data.map( film => {
      return <Film key ={film.id} url={film.url}>{film.name}</Film>
    })
    return (
      <div className="film-list">
        <ul>
          {filmNodes}
        </ul>
      </div>
    )
  }
}

export default FilmList;
