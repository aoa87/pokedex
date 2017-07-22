import angular from 'angular';

import headerComponent from './header.component';

const HeaderModule = angular.module('header-module', [])
    .component('pkHeader', headerComponent);

export default HeaderModule.name;
