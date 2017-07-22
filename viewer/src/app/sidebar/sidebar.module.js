import angular from 'angular';

import sidebarComponent from './sidebar.component';

const SidebarModule = angular.module('sidebar-module', [])
    .component('pkSidebar', sidebarComponent);

export default SidebarModule.name;
