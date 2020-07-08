function MOV() {
    var z = document.getElementById("z");
    var zoption = z.options[z.selectedIndex].value;

    var d = document.getElementById("do");
    var doption = d.options[d.selectedIndex].value;

    var first = document.getElementById(zoption).value;
    document.getElementById(zoption).value = "";
    document.getElementById(doption).value = first;
}
function XCHG() {
    var z = document.getElementById("z");
    var zoption = z.options[z.selectedIndex].value;

    var d = document.getElementById("do");
    var doption = d.options[d.selectedIndex].value;

    var first = document.getElementById(zoption).value;
    var second = document.getElementById(doption).value;
    document.getElementById(zoption).value = second;
    document.getElementById(doption).value = first;
}
function CLEAR() {
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
            elements[ii].value = "";
        }
    }
}