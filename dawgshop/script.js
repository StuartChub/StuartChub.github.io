document.getElementById('go').onclick = function() {
    var inputText = document.getElementById('#text-input').val();
    var dawgifiedText = inputText + ", dawg";
    document.getElementById('output').interHTML = dawgifiedText;
}