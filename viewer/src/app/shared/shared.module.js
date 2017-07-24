import angular from 'angular';

import spinnerComponent from './spinner/spinner.component';

const SharedModule = angular.module('shared-module', [])
    .component('pkSpinner', spinnerComponent);

export default SharedModule.name;
