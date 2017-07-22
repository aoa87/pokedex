import angular from 'angular';

import footerComponent from './footer.component';
import './footer.scss';

const footerModule = angular.module('footer-module', [])
    .component('pkFooter', footerComponent);

export default footerModule.name;
