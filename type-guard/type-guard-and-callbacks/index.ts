declare var foo: {bar?: {baz: string} };
function immediate(callback: ()=>void) {
    callback();
}

if (foo.bar) {
    console.log(foo.bar.baz);
    immediate(() => {
        console.log(foo.bar.baz);
    });
}