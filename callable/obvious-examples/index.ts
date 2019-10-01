interface Overloaded {
    (foo: string): string;
    (foo: number): number;
};

function stringOrNumber(foo: any): any {
    if(typeof foo === 'number') {
        return foo * foo;
    } else if (typeof foo === 'string') {
        return `hello ${foo}`;
    }
}

const overloaded: Overloaded = stringOrNumber;


const str = overloaded('Benson');
console.log(str);

const num = overloaded(123);
console.log(num);