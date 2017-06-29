document.getElementById('go').onclick = function() {
    var inputText = document.getElementById('text-input').value;
    var helloText = "Hello, " + inputText;
    document.getElementById('output').value = helloText;
}
document.getElementById('clear').onclick = function() {
    document.getElementById('text-input').value = ""; 
    document.getElementById('output').value = "";
}