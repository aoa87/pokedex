/**
 * @ngInject
 */
function HomeRoutes($stateProvider) {
    const moduleName = 'home';

    $stateProvider
        .state(moduleName, {
            url: '/',
            template: `<ui-view class="${moduleName}'"></ui-view>`,
            abstract: true
        })
        .state(`${moduleName}.home`, {
            url: '',
            template: '<pk-home></pk-home>'
        });
}

export default HomeRoutes;
