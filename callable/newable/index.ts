interface CallMeWithNewToGetString {
    new(): string;
};

declare const Foo: CallMeWithNewToGetString;
const bar = new Foo();