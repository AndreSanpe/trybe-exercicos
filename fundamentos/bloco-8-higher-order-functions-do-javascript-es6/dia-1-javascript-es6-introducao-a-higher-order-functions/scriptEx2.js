const numberSortition = () => Math.floor(Math.random()*5+1);
console.log(numberSortition());

const checkSortition = (numberSortition, choosedNumber) => {
    if(numberSortition() === choosedNumber){
        return 'that is it'
    }
    return 'try again'
    
}

console.log(checkSortition(numberSortition, 3));