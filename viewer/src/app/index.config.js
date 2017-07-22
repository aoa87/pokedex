/**
 * @ngInject
 */
function IndexConfig($logProvider, $compileProvider) {
    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }
}

export default IndexConfig;
