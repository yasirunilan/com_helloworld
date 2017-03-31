/**
 * Created by Yasiru on 3/31/2017.
 */
jQuery(function() {
    document.formvalidator.setHandler('greeting',
        function (value) {
            regex=/^[^0-9]+$/;
            return regex.test(value);
        });
});