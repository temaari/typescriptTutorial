function checkIfPalendrome(testString: string) : boolean {
    let newString : string = testString.split("").reverse().join("");
    console.assert(newString === testString, `new string: ${newString} isn't a palendrome with test string ${testString}`);
    let isPalendrome = newString === testString ? true : false;
    return isPalendrome;
}

console.log(checkIfPalendrome("RACECAR"));
console.log(checkIfPalendrome("RACECARS"));
