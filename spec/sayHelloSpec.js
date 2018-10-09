var sayHello = require('../src/sayHello.js');

describe("Greet", function(){
it ("concats Hello and a Name", function(){
    var actual = sayHello.greet("World");
    var expected = "Hello, World";
    expect(actual).toEqual(expected);

});
});