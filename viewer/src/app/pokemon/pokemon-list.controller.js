class PokemonListController {
    /**
     * @ngInject
     */
    constructor(pokemonService, $log) {
        this.pokemonService = pokemonService;
        this.$log = $log;
    }

    $onInit() {
        this.getAllPokemons();
    }

    getAllPokemons() {
        this.pokemons = null;
        this.pokemonService.getAll().then((data) => {
            this.pokemons = data;
        }, () => {
            this.$log.error('An error has ocurred loading the pokemons');
        });
    }

    deletePokemon(pokemonId) {
        this.pokemonService.delete(pokemonId).then(() => {
            this.getAllPokemons();
        }, () => {
            this.$log.error('An error has ocurred deleting the pokemon');
        });
    }

    toggleFavorite(pokemon) {
        const newPokemon = pokemon;
        newPokemon.favourite = !pokemon.favourite;
        this.pokemonService.update(newPokemon).then(() => {
            this.getAllPokemons();
        }, () => {
            console.log('error fav');
            this.$log.error('An error has ocurred changing the pokemon favourite status');
        });
    }

    filterFavourites() {
        this.onlyFavourites = this.favouriteCheckbox ? true : undefined;
    }
}

export default PokemonListController;
