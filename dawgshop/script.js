document.getElementById('go').onclick = function() {
    var textInput = $('#text-input').val();
    var dawgifiedtext = inputText + ", dawg";
    $('output').interHTML = dawgifiedText;
}