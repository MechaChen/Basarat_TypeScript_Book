(function(something) {

    something.foo = 123;

})(something || (something = {}));



(function(something) {

    something.bar = 456;

})(something || (something = {}));