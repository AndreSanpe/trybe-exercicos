const anyNumber = () => Math.floor(Math.random() * 100);

const upperCase = (string) => string.toUpperCase();
const justFirstLetter = (string) => string[0];
const joinString = (a,b) => a+b;

const dogPicture = async () => {
    const endPoint = 'https://dog.ceo/api/breeds/image/random';
    const promise = await fetch(endPoint);
    const promiseJson = await promise.json();
    return promiseJson
}

module.exports = { anyNumber, upperCase, joinString, justFirstLetter, dogPicture };
