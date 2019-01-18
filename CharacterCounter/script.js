function counter() {
    var str = document.getElementById("str").value;
    var outputStr = (str.match(new RegExp("xy", "gi")) || []).length;
    alert('This string contains ' + outputStr + ' character(s) occurrence(s).')
}