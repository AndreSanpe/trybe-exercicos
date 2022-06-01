const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordernate = () => {
    return oddsAndEvens.sort(function (a, b) { return a - b });
}
// https://www.w3schools.com/js/js_array_sort.asp
console.log(ordernate()); // será necessário alterar essa linha 😉