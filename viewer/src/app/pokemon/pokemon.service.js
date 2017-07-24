class PokemonService {
    /**
     * @ngInject
     */
    constructor($resource) {
        this.pokemonDao = $resource('api/pokemons/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }

    getAll() {
        return this.pokemonDao.query().$promise;
    }

    get(pokemonId) {
        return this.pokemonDao.get({
            id: pokemonId
        }).$promise;
    }

    save(pokemon) {
        return this.pokemonDao.save(pokemon).$promise;
    }

    update(pokemon) {
        return this.pokemonDao.update(pokemon).$promise;
    }

    delete(pokemonId) {
        return this.pokemonDao.delete({
            id: pokemonId
        }).$promise;
    }
}

export default PokemonService;
