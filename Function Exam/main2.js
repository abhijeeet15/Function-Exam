// WAP TO CHECK WHETHER A NUMBER IS A PALINDROME OR NOT USING A FUNCTION.

function Palindrome() {
    var num = prompt("Enter a number:");
    var original = num;
    var reversed = "";
    for (var i = num.length - 1; i >= 0; i--) {
        reversed += num[i];
    }

    if (original === reversed) {
        document.writeln(original + " is a palindrome.");
    } else {
        document.writeln(original + " is not a palindrome.");
    }
}

Palindrome();