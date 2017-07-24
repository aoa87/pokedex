/**
 * @ngInject
 */
function PokemonRoutes($stateProvider) {
    const moduleName = 'pokemon';

    const pokemonResolver = {
        pokemonId: ['$stateParams', $stateParams => $stateParams.id]
    };

    $stateProvider
        .state(moduleName, {
            abstract: true,
            url: '',
            template: `<ui-view class="${moduleName}'"></ui-view>`
        })
        .state(`${moduleName}.list`, {
            url: '/pokemons',
            template: '<pk-pokemon-list></pk-pokemon-list>'
        })
        .state(`${moduleName}.detail`, {
            url: '/pokemons/{id:[0-9]+}',
            resolve: pokemonResolver,
            template: '<pk-pokemon-detail id="$resolve.pokemonId"></pk-pokemon-detail>'
        });
}

export default PokemonRoutes;
