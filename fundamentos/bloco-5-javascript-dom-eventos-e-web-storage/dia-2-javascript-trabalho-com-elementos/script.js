const whereAreYou = document.getElementById('elementoOndeVoceEsta');
whereAreYou.parentElement.style.background = 'red';

const father = elementoOndeVoceEsta.parentElement;
father.style.color = 'green';

const firstSonOfson = elementoOndeVoceEsta.firstElementChild;
firstSonOfson.innerText = 'teste de texto';

const firstChild = pai.firstElementChild;
// console.log(firstChild);

const firstChildWhere = elementoOndeVoceEsta.previousElementSibling;

whereAreYou.nextElementSibling.innerText = 'Does not care';

whereAreYou.nextSibling.background = 'purple';


// second part

const pai = document.getElementById('pai');
    const irmaoElementoOndeVoceEsta = document.createElement('section');
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta);


const elementWhereIm = document.getElementById('elementoOndeVoceEsta');
const childWhereIm = document.createElement('section');
childWhereIm.id = 'filhoElementoOndeVoceEsta';
elementWhereIm.appendChild(filhoElementoOndeVoceEsta);
