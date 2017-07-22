import angular from 'angular';

// main App module
import indexModule from './index.module';

import '../assets/styles/sass/index.scss';

angular.element(document).ready(() => {
    angular.bootstrap(document, [indexModule], {
        strictDi: true
    });
});
