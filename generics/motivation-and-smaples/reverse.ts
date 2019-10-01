function reverseD<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sampleD = [1, 2, 3];
var reversedD = reverseD(sampleD);
console.log(reversedD); // 3,2,1

reversedD[0] = '1';
reversedD = ['1', '2'];

reversedD[0] = 1;
reversedD = [1, 2];