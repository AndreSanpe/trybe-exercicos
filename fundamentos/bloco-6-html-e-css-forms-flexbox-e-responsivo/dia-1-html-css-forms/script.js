let btnClear = document.getElementById('btn-clear');
function preventDefault(){
    btnClear.addEventListener('click', function(event){
        event.preventDefault()
    })
}
preventDefault();