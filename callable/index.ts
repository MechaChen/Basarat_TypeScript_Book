interface ReturnString {
    (): string;
};

declare const foo: ReturnString;
const bar = foo();