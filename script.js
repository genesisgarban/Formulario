//Capturar elementos del Dom//

let formUsers = document.getElementById('formUser');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputNumber = document.getElementById('number');
const inputMan = document.getElementById('man');
const inputWoman = document.getElementById('woman');

let users = [];

//funcion//
const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        name : inputName.value,
        surname : inputSurname.value,
        number : inputNumber.value,
        man : inputMan.value,
        woman : inputWoman.value

    };
    console.log(newUser);
    users.push(newUser);
};

//escuchar el evento de enviar //
formUsers.addEventListener
('submit', (e) => {
    handleSubmit (e) 
});


