s = "adfghjkjhgfdarrrrrfffffvhnjbjhnjnghjmkdghjgdhj"
function IskatelPolyndromusov(str) {
    var polydeo = "";
    for (var i = 0; i < str.length; i++) {
        for (var u = i + 1; u <= str.length; u++) {
            var subString = str.slice(i,u);
            if (subString === subString.split('').reverse().join('') && subString.length > polydeo.length){
               polydeo = subString;
            }
        }

    }
    return polydeo;
}
IskatelPolyndromusov(s);
console.log(IskatelPolyndromusov(s));