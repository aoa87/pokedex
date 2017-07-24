// vendor
import 'bootstrap';
import 'jquery';
import 'admin-lte';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import angularSanitize from 'angular-sanitize';
import angularMessages from 'angular-messages';
import angularResource from 'angular-resource';

// internal modules
import indexComponents from './index.components';
import indexConfig from './index.config';
import indexRoutes from './index.routes';
import indexRun from './index.run';

const App = angular.module(
        'pokedexApp', [
            // plugins
            uiRouter,
            angularCookies,
            angularSanitize,
            angularMessages,
            angularResource,

            // components
            indexComponents
        ]
    )
    .config(indexConfig)
    .config(indexRoutes)
    .run(indexRun);

export default App.name;
