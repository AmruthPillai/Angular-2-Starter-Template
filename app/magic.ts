class Greeter {
    saySomething(message: string = 'Hey there!') {
        return message;
    }
}

var greeter = new Greeter();
greeter.saySomething('Namaskaaram!');