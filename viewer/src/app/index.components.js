import angular from 'angular';

import sharedModule from './shared/shared.module';
import footerModule from './footer/footer.module';
import homeModule from './home/home.module';
import headerModule from './header/header.module';
import sidebarModule from './sidebar/sidebar.module';
import pokemonModule from './pokemon/pokemon.module';

const indexComponents = angular.module('index.components', [
    sharedModule,
    footerModule,
    homeModule,
    headerModule,
    sidebarModule,
    pokemonModule
]);

export default indexComponents.name;
