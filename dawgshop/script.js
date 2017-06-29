document.getElementById('go').onclick = function() {
    var inputText = document.getElementById('text-input').value;
    var dawgifiedText = inputText + ", dawg";
    document.getElementById('output').innerHTML = dawgifiedText;
}