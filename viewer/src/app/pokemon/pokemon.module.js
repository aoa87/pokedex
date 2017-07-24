import angular from 'angular';

import pokemonListComponent from './pokemon-list.component';
import pokemonDetailComponent from './pokemon-detail.component';
import pokemonRoutes from './pokemon.routes';
import pokemonService from './pokemon.service';

const PokemonModule = angular.module('pokemon-module', [])
    .config(pokemonRoutes)
    .component('pkPokemonList', pokemonListComponent)
    .component('pkPokemonDetail', pokemonDetailComponent)
    .service('pokemonService', pokemonService);

export default PokemonModule.name;
