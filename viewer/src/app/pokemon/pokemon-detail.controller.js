class PokemonDetailController {
    /**
     * @ngInject
     */
    constructor(pokemonService, $log) {
        this.pokemonService = pokemonService;
        this.$log = $log;
    }

    $onInit() {
        this.pokemon = null;

        this.pokemonService.get(this.id).then((pokemon) => {
            this.pokemon = pokemon;
        }, () => {
            this.$log.debug('An error has ocurred retrieving the pokemon');
        });
    }

}

export default PokemonDetailController;
