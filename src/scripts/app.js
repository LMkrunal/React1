var sayHello = require('./sayHello.js');
window.addEventListener('load', function(){
    document.getElementById('Welcome-message')
    .innerHTML = sayHello.greet('Your name');

});
console.log("hello world");