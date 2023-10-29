console.log("<<<<Take a sentence as an input and reverse every word in that sentence>>>>")
const sent = "This is a sunny day";
console.log("Original Sentence: ",sent)
const arr = sent.split(' ');
for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let temp = "";

    for (let j = word.length - 1; j >= 0; j--) {
        temp = temp + word[j];
    }

    arr[i] = temp;
}
const reversedSent = arr.join(' ');
console.log("Reversed Sentence: ",reversedSent);