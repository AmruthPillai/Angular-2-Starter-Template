var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'Hey there!'; }
        return message;
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('Namaskaaram!');