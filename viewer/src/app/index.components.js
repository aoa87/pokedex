import angular from 'angular';

import footerModule from './footer/footer.module';
import homeModule from './home/home.module';
import headerModule from './header/header.module';
import sidebarModule from './sidebar/sidebar.module';

const indexComponents = angular.module('index.components', [
    footerModule,
    homeModule,
    headerModule,
    sidebarModule
]);

export default indexComponents.name;
