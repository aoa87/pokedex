/**
 * @ngInject
 */
function IndexRoutes($urlRouterProvider, $stateProvider) {
    const STATE_ENTRY_POINT = 'home.home';

    $urlRouterProvider.otherwise('/');

    // Initial route configuration
    $stateProvider.state('app', {
        url: '/',
        /**
         * @ngInject
         */
        controller: $state => $state.go(STATE_ENTRY_POINT)
    });
}

export default IndexRoutes;
