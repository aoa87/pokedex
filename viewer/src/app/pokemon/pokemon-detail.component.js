import template from './pokemon-detail.html';
import controller from './pokemon-detail.controller';

const PokemonDetailController = {
    template,
    controller,
    bindings: {
        id: '<'
    }
};

export default PokemonDetailController;
