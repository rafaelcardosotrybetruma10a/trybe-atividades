import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render () {
		return (
			<div>
				{this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
			</div>
	  );
  }
}

export default Pokedex;