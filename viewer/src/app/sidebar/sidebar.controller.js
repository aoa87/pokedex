import $ from 'jquery';

/**
 * @ngInject
 */
class SidebarController {
    constructor($document) {
        this.$document = $document;
    }
    $onInit() {
        // We should wait for document ready, in order to get property layout, defined.
        $(this.$document).ready(() => {
            $.AdminLTE.layout.activate();
        });
    }
}

export default SidebarController;
