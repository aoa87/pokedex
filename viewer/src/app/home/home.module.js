import angular from 'angular';

import homeComponent from './home.component';
import homeRoutes from './home.routes';

const HomeModule = angular.module('home-module', [])
    .component('pkHome', homeComponent)
    .config(homeRoutes);

export default HomeModule.name;
