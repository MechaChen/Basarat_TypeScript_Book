interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

// User Defined Type Guard
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}

// Sample usage of the User Defined Type Guard
function doStuff(arg: Foo | Bar) {
    isFoo(arg) ? console.log(arg.foo) : console.log(arg.bar);
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 456, common: '123' });