var $button = $('.js-button');
var $input = $('.js-input');
var $output = $('.js-output');

$button.click(function() {
    var value = $input[0].value;

    $output.html(value);
});