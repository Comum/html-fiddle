var $body = $('body');
var button = '.js-button';
var input = '.js-input';
var $input = $('.js-input');
var $output = $('.js-output');

function handleInput() {
    var value = $input[0].value;

    $output.html(value);
}

$body
    .on('click', button, handleInput)
    .on('keyup', input, handleInput);