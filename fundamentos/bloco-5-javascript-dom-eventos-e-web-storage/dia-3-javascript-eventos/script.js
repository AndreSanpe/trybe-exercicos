function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulFather = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const daysOfMonth = dezDaysList[index];
        const dayListDays = document.createElement('li');
        dayListDays.innerHTML = daysOfMonth;
        dayListDays.classList.add('day');

        if(daysOfMonth === 24 || daysOfMonth === 25 || daysOfMonth === 31){
            dayListDays.classList.add('holiday');
           } 
        if(daysOfMonth === 4 || daysOfMonth === 11 || daysOfMonth === 18 || daysOfMonth === 25){
            dayListDays.classList.add('friday');
           } 
    
        ulFather.appendChild(dayListDays);
    }
}
createDaysOfMonth();


function createVacation(nameButton){
    const buttonBtn = document.createElement('button');
    buttonBtn.innerText = nameButton;
    buttonBtn.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(buttonBtn);

}
createVacation('Feriados');

function changingButton(){
    const buttonBtn = document.getElementById('btn-holiday');
    buttonBtn.addEventListener('click', function(){
        
        for(let i = 0; )
        if(document.querySelector('.holiday')){
            buttonBtn.style.background = 'green';
            document.querySelector('.holiday').style.background = 'green';
        }        
    })
}

changingButton();