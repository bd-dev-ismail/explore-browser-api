document.getElementById("btn-add-name").addEventListener('click', function(){
    const inputField = document.getElementById("name-field");
    const inputFieldString = inputField.value;
    
    localStorage.setItem('name', inputFieldString)

});

document.getElementById("btn-add-age").addEventListener('click', function(){
    const ageField = document.getElementById("age-field");
    const ageInput = ageField.value;

    localStorage.setItem('age', ageInput);
});
document.getElementById("btn-remove-name").addEventListener('click', function(){
    localStorage.removeItem('name');
});
document.getElementById("btn-remove-age").addEventListener('click', function(){
    localStorage.removeItem('age');
});
document.getElementById("btn-clear").addEventListener('click',function(){
    localStorage.clear();
})